import { useRouter } from "next/router";
import {useForm} from "react-hook-form";
import { useSWRConfig } from "swr";
import WTInput from "../components/WTInput";
import AuthForm from "../components/AuthForm";
import { auth } from "../lib/mutations";

const Signup = () => {
	const hookForm = useForm();
	const router = useRouter();

	const onSubmit = async (newUserData) => {
		try {
			const user = await auth("signup", newUserData);
			router.push("/");
		} catch {
			alert("Email already has a registered account.");
		}
	};

	const buttonAreaContent = {
		ctaText: "Already have an account?",
		linkText: "Login",
		buttonText: "Signup",
		linkHref: "/login",
	};

	return (
		<AuthForm onSubmit={onSubmit} hookForm={hookForm} buttonAreaContent={buttonAreaContent}>
			<WTInput
				name={"email"}
				type={"email"}
				placeholder={"Email"}
				hookForm={hookForm}
			/>
			<WTInput
				name={"firstName"}
				type={"firstName"}
				placeholder={"First Name"}
				hookForm={hookForm}
			/>
			<WTInput
				name={"lastName"}
				type={"lastName"}
				placeholder={"Last Name"}
				hookForm={hookForm}
			/>
			<WTInput
				name={"password"}
				type={"password"}
				placeholder={"Password"}
				hookForm={hookForm}
			/>
		</AuthForm>
	);
};

export default Signup;