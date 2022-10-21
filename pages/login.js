import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AuthForm from "../components/AuthForm";
import WTInput from "../components/WTInput";
import { auth } from "../lib/mutations";

const Login = () => {
	const hookForm = useForm();
	const router = useRouter();

	const onSubmit = async (userData) => {
		try {
			const user = await auth("login", userData);
			router.push("/");
		} catch (err) {
			alert("Your email or password was not found.");
		}
	};

	const buttonAreaContent = {
		ctaText: "Don't have an account?",
		linkText: "Signup",
		buttonText: "Login",
		linkHref: "/signup",
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
				name={"password"}
				type={"password"}
				placeholder={"Password"}
				hookForm={hookForm}
			/>
		</AuthForm>
	);
};

export default Login;