import Header from "./Header";

const Theme = ({children}) => {
	return (
		<div>
			<Header/>
			{children}
			{/* Footer will go here eventually */}
		</div>
	);
};

export default Theme;