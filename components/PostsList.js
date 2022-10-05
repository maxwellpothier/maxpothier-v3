import PostCard from "./PostCard";
import styles from "./postsList.module.scss";

const PostsList = () => {
	return (
		<div className={styles.postsListContainer}>
			<PostCard/>
		</div>
	);
};

export default PostsList;