import jwt from "jsonwebtoken";
import prisma from "./prisma";

export const validateRoute = (handler) => {
	return async (req, res) => {
		const {WT_ACCESS_TOKEN: token} = req.cookies;

		if (token) {
			let user;

			try {
				// STRIP THE ID OFF THE JWT (YES YOU CAN DO THAT)
				const {id} = jwt.verify(token, "hello");

				user = await prisma.user.findUnique({
					where: {
						id: id,
					},
				});

				if (!user) {
					throw new Error("Not a real user");
				}
			} catch(err) {
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