import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/styles/main.scss";
import Login from "./pages/login/Login";
import Users from "./pages/users/Users";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Login />}
					/>
					<Route
						path="/users"
						element={<Users />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
