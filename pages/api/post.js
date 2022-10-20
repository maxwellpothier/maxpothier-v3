import prisma from "../../lib/prisma";
import {validateRoute} from "../../lib/auth";

export default validateRoute(async (req, res) => {
	const posts = await prisma.post.findMany({
		include: {
			music: true,
		},
		orderBy: {
			updatedAt: "desc"
		}
	});

	res.json(posts);
});