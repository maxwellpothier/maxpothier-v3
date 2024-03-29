import prisma from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
	const {email, password} = req.body;

	if (email === "" || password === "") {
		res.status(401);
		res.json({error: "Email or password is wrong"});
	}

	const user = await prisma.user.findUnique({
		where: {
			email,
		}
	});

	if (user && bcrypt.compareSync(password, user.password)) {
		const token = jwt.sign(
			{
				id: user.id,
				email: user.email,
				time: Date.now(),
			},
			"hello",
			{
				expiresIn: "8h",
			}
		);

		res.setHeader(
			"Set-Cookie",
			cookie.serialize("WT_ACCESS_TOKEN", token, {
				httpOnly: true,
				maxAge: 8 * 60 * 60,
				path: "/",
				sameSite: "lax",
				secure: process.env.NODE_ENV === "production",
			})
		);

		res.json(user);
	} else {
		res.status(401);
		res.json({error: "Email or password is wrong"});
	}
};