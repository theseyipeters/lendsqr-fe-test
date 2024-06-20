import "../styles/components/InputField.scss";

export default function InputField({
	placeholder,
	type,
	value,
	onChange,
}: any) {
	return (
		<input
			className="input"
			placeholder={placeholder}
			type={type}
			value={value}
			onChange={onChange}
			required
		/>
	);
}
