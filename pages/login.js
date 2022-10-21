import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import WTLogo from "../components/WTLogo";
import { auth } from "../lib/mutations";

import styles from "./login.module.scss";

const Login = () => {
	const hookForm = useForm();
	const router = useRouter();

	const onSubmit = async (userData) => {
		const user = await auth("login", userData);
		console.log(user);
		if (user.ok) {
			router.push("/")
		};
	};

	return (
		<div className={styles.pageWrapper}>
			<div className={styles.loginFormOuterBox}>
				<WTLogo/>
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
						<div className={styles.buttonAreaContainer}>
							<div className={styles.moreInfo}>
								<div>Don&apos;t have an account? <a className={styles.signupLink} href={"/signup"}>Signup</a></div>
								{/* <div>Forgot Password</div> */}
							</div>
							<button className={styles.formSubmitButton} type={"submit"}>Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;