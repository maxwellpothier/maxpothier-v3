import jwt from "jsonwebtoken";
import prisma from "./prisma";

export const validateRoute = (handler) => {
	return async (req, res) => {
		const {WT_ACCESS_TOKEN: token} = req.cookies;

		if (token) {
			let user;

			try {
				const {id} = jwt.verify(token, "hello");
				user = await prisma.user.findUnique({
					where: {id},
				});

				if (!user) {
					throw new Error("Not a real user");
				}
			} catch (e) {
				res.status(401);
				res.json({error: "Not Authorized"});
				return;
			}

			return handler(req, res, user);
		}
		
		res.status(401);
		res.json({error: "Not Authorized"});
	}
}