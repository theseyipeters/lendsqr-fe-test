import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/Login.scss";
import logo from "../../assets/lendsqrLogo.svg";
import pablo from "../../assets/pablo.svg";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleEmailChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e: {
		target: { value: React.SetStateAction<string> };
	}) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		localStorage.setItem("user", JSON.stringify({ email, password }));

		navigate("/users");
	};

	return (
		<div className="login">
			<aside className="login-body1">
				<div className="inner">
					<div className="img-box1">
						<img
							src={logo}
							alt="logo"
						/>
					</div>
					<div className="img-container">
						<div className="img-box2">
							<img
								src={pablo}
								alt="pablo"
							/>
						</div>
					</div>
				</div>
			</aside>
			<aside className="login-body2">
				<div className="inner">
					<form
						className="form"
						onSubmit={handleSubmit}>
						<h1>Welcome!</h1>
						<p>Enter details to login.</p>

						<div className="form-container">
							<div className="form-field">
								<InputField
									placeholder={"Email"}
									type={"email"}
									value={email}
									onChange={handleEmailChange}
								/>

								<PasswordField
									placeholder={"Password"}
									value={password}
									onChange={handlePasswordChange}
								/>
							</div>

							<div className="forgot">
								<Link
									className="forgot-link"
									to={"/"}>
									FORGOT PASSWORD?
								</Link>
							</div>

							<div className="login-button">
								<Button type="submit">LOGIN</Button>
							</div>
						</div>
					</form>
				</div>
			</aside>
		</div>
	);
}
