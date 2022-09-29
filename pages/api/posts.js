import prisma from "../../lib/prisma";
import {validateRoute} from "../../lib/auth";

export default validateRoute(async(req, res) => {
	const posts = await prisma.posts.findMany({});

	res.json(playlists);
});