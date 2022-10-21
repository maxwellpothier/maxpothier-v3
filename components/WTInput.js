import styles from "./wtInput.module.scss";

const WTInput = ({type, placeholder, hookForm, name}) => {
	return (
		<input
			className={styles.formInputField}
			{...hookForm.register(name)}
			placeholder={placeholder}
			type={type}
		/>
	);
};

export default WTInput;