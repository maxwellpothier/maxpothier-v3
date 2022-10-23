import PostCard from "./PostCard";
import styles from "./postsList.module.scss";
import {usePost} from "../lib/hooks";
import { useEffect, useState } from "react";

const PostsList = () => {
	const {posts} = usePost();

	return (
		<div className={styles.pageContainer}>
			<div className={styles.postsListContainer}>
				{posts?.map((post, i) => (
					<PostCard
						key={i}
						url={post.music.artwork}
						title={post.title}
						artist={post.music.artist}
					/>
				))}
			</div>
		</div>
	);
};

export default PostsList;