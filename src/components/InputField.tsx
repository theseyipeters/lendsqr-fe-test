import "../styles/components/InputField.scss";

// interface InputFieldProps {
// 	placeholder: () => string;
// 	type: () => void;
// }

const InputField = ({ placeholder, type }: any) => {
	return (
		<div>
			<input
				className="input"
				placeholder={placeholder}
				type={type}
				required
			/>
		</div>
	);
};

export default InputField;
