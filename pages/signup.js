import {useForm} from "react-hook-form";

import styles from "./signup.module.scss";

const Signup = () => {
	const hookForm = useForm();

	const onSubmit = ({username, firstName, lastName, password}) => {
		console.log(username, firstName, lastName, password);
	};

	return (
		<div>
			Signup Page
			<form onSubmit={hookForm.handleSubmit(onSubmit)} className={styles.signupForm}>
				<input
					{...hookForm.register("username")}
					placeholder={"Username"}
				/>
				<input
					{...hookForm.register("firstName")}
					placeholder={"First Name"}
				/>
				<input
					{...hookForm.register("lastName")}
					placeholder={"Last Name"}
				/>
				<input
					{...hookForm.register("password")}
					placeholder={"Password"}
					type={"password"}
				/>
				<button type={"submit"}>Sign Up</button>
			</form>
		</div>
	);
};

export default Signup;