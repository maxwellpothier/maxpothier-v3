import { usePosts } from "../lib/hooks";
import PostCard from "./PostCard";
import styles from "./postsList.module.scss";

const PostsList = () => {
	const {posts} = usePosts();

	posts.forEach((post) => {
		console.log("album: ", post.album);
	});

	return (
		<div className={styles.postsListContainer}>
			<PostCard/>
		</div>
	);
};

export default PostsList;