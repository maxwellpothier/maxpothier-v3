import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async (req, res) => {
	const {username, password} = req.body;

	const user = await prisma.user.findUnique({
		where: {username},
	});

	if (user && bcrypt.compareSync(password, user.password)) {
		const token = jwt.sign(
			{
				id: user.id,
				username: user.username,
				time: Date.now(),
			},
			"hello",
			{expiresIn: "8h"}
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
		res.json({error: "Invalid username or password"});
	}
};