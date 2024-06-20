import { useState } from "react";
import "../styles/components/PasswordField.scss";

export default function PasswordField({ placeholder, value, onChange }: any) {
	const [visible, setVisible] = useState(false);

	const toggleVisibility = () => {
		setVisible(!visible);
	};

	return (
		<div className="password-field">
			<input
				className="input"
				placeholder={placeholder}
				type={visible ? "text" : "password"}
				value={value}
				onChange={onChange}
				required
			/>
			<button
				type="button"
				onClick={toggleVisibility}>
				{visible ? "HIDE" : "SHOW"}
			</button>
		</div>
	);
}
