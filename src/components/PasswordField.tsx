import "../styles/components/PasswordField.scss";

export default function PasswordField({ placeholder }: any) {
	return (
		<div className="password-field">
			<input
				className="input"
				placeholder={placeholder}
				type={"password"}
				required
			/>

			<button>SHOW</button>
		</div>
	);
}
