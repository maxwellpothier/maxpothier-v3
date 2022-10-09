import PostCard from "./PostCard";
import styles from "./postsList.module.scss";
import prisma from "../lib/prisma";
import { useEffect } from "react";

const PostsList = () => {

	useEffect(() => {
		(async () => {
			const posts = await prisma.post.findMany();

			console.log(posts);
		})();
	});

	return (
		<div className={styles.postsListContainer}>
			<PostCard/>
		</div>
	);
};

export default PostsList;