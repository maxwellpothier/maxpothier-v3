import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { auth } from "../lib/mutations";

import styles from "./login.module.scss";

const Login = () => {
	const hookForm = useForm();
	const router = useRouter();

	const onSubmit = async (userData) => {
		const user = await auth("login", userData);
		if (user.ok) {
			router.push("/")
		};
	};

	return (
		<div>
			<div className={styles.loginFormOuterBox}>
				What's Turning
				<div className={styles.loginFormInnerBox}>
					<form onSubmit={hookForm.handleSubmit(onSubmit)} className={styles.loginForm}>
						<input
							className={styles.formInputField}
							{...hookForm.register("email")}
							placeholder={"Email"}
							type={"email"}
						/>
						<input
							className={styles.formInputField}
							{...hookForm.register("password")}
							placeholder={"Password"}
							type={"password"}
						/>
						<button type={"submit"}>Log In</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;