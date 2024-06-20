import "../styles/components/Button.scss";

export default function Button({ onClick }: any) {
	return (
		<div
			onClick={onClick}
			className="global-button">
			<button>Log in</button>
		</div>
	);
}
