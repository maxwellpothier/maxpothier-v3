import { useForm } from "react-hook-form";
import { auth } from "../lib/mutations";

import styles from "./login.module.scss";

const Login = () => {
	const hookForm = useForm();

	const onSubmit = async ({username, password}) => {
		const user = await auth("login", {username, password});
	};

	return (
		<div>
			Login Page
			<form onSubmit={hookForm.handleSubmit(onSubmit)} className={styles.loginForm}>
				<input
					{...hookForm.register("username")}
					placeholder={"Username"}
				/>
				<input
					{...hookForm.register("password")}
					placeholder={"Password"}
					type={"password"}
				/>
				<button type={"submit"}>Log In</button>
			</form>
		</div>
	);
};

export default Login;