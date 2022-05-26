import Head from 'next/head'
import Image from 'next/image'
import PageTitle from '../components/PageTitle';
import Theme from '../components/Theme';

const HomePage = () => {
	return (
		<Theme>
			<PageTitle title={"Blog"} subtitle={"Recent Posts"}/>
		</Theme>
	);
};

export default HomePage;