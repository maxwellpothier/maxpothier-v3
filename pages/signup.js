import { useRouter } from "next/router";
import {useForm} from "react-hook-form";
import { useSWRConfig } from "swr";
import { auth } from "../lib/mutations";

import styles from "./signup.module.scss";


const Signup = () => {
	const hookForm = useForm();
	const router = useRouter();

	const onSubmit = async (newUserData) => {
		const user = await auth("signup", newUserData);
		if (user.ok) {
			router.push("/")
		};
	};

	return (
		<div>
			Signup Page
			<form onSubmit={hookForm.handleSubmit(onSubmit)} className={styles.signupForm}>
				<input
					{...hookForm.register("email")}
					placeholder={"Email"}
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