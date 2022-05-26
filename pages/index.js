import Head from 'next/head'
import Image from 'next/image'
import PageTitle from '../components/PageTitle';
import PostsList from '../components/PostsList';
import Theme from '../components/Theme';

const HomePage = () => {
	return (
		<Theme>
			<PageTitle title={"Blog"} subtitle={"Recent Posts"}/>
			<PostsList/>
		</Theme>
	);
};

export default HomePage;