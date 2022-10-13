import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { auth } from "../lib/mutations";

import styles from "./login.module.scss";

const Login = () => {
	const hookForm = useForm();
	const router = useRouter();

	const onSubmit = async (userData) => {
		await auth("login", userData);
		await router.push("/");
	};

	return (
		<div>
			Login Page
			<form onSubmit={hookForm.handleSubmit(onSubmit)} className={styles.loginForm}>
				<input
					{...hookForm.register("email")}
					placeholder={"Email"}
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