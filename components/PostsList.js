import PostCard from "./PostCard";
import styles from "./postsList.module.scss";
import {usePost} from "../lib/hooks";

const PostsList = () => {
	const {posts} = usePost();

	console.log(posts);
	return (
		<div className={styles.postsListContainer}>
			<PostCard/>
		</div>
	);
};

export default PostsList;