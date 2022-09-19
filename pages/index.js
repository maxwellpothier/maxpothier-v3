import PageTitle from "../components/PageTitle";
import PostsList from "../components/PostsList";
import Theme from "../components/Theme";

import styles from "./homePage.module.scss";

const HomePage = () => {
	return (
		<Theme>
			<PageTitle title={"Blog"} subtitle={"Recent Posts"}/>
			<div className={styles.postsListWrapper}>
				<PostsList/>
			</div>
		</Theme>
	);
};

export default HomePage;