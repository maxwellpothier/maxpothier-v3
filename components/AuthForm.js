import WTLogo from "./WTLogo";
import styles from "./authForm.module.scss";

const AuthForm = ({onSubmit, hookForm, buttonAreaContent, children}) => {
	const {ctaText, linkText, buttonText, linkHref} = buttonAreaContent;

	return (
		<div className={styles.pageWrapper}>
			<div className={styles.loginFormOuterBox}>
				<WTLogo/>
				<div className={styles.loginFormInnerBox}>
					<form onSubmit={hookForm.handleSubmit(onSubmit)} className={styles.loginForm}>
						{children}
						<div className={styles.buttonAreaContainer}>
							<div className={styles.moreInfo}>
								<div>{ctaText} <a className={styles.signupLink} href={linkHref}>{linkText}</a></div>
								{/* <div>Forgot Password</div> */}
							</div>
							<button className={styles.formSubmitButton} type={"submit"}>{buttonText}</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AuthForm;