import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
	const salt = bcrypt.genSaltSync();
	const {email, firstName, lastName, password} = req.body;
	
	let user;

	try {
		user = await prisma.user.create({
			data: {
				email: email,
				firstName: firstName,
				lastName: lastName,
				password: bcrypt.hashSync(password, salt),
			}
		})
	} catch(err) {
		res.status(401);
		res.json({error: "User already exists"});
		return;
	}

	const token = jwt.sign(
		{
			email: user.email,
			id: user.id,
			time: Date.now(),
		},
		"hello",
		{
			expiresIn: "8h",
		}
	);

	res.setHeader(
		"Set-Cookie",
		cookie.serialize("WT-ACCESS-TOKEN", token, {
			httpOnly: true,
			maxAge: 8 * 60 * 60,
			path: "/",
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
		})
	);

	res.json(user);
};