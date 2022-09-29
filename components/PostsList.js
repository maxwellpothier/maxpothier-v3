import { usePosts } from "../lib/hooks";
import styles from "./postsList.module.scss";

const PostsList = () => {
	const {posts} = usePosts();

	console.log(posts);

	return (
		<div className={styles.postsListContainer}>
			Posts List
		</div>
	);
};

export default PostsList;