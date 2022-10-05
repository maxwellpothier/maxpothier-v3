import { useMe, usePosts } from "../lib/hooks";
import PostCard from "./PostCard";
import styles from "./postsList.module.scss";

const PostsList = () => {
	const {posts} = usePosts();
	const {user} = useMe();

	console.log(user);
	console.log(posts);

	return (
		<div className={styles.postsListContainer}>
			<PostCard/>
		</div>
	);
};

export default PostsList;