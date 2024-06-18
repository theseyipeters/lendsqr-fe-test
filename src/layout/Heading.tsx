import "../styles/layout/Heading.scss";
import logo from "../assets/lendsqrLogo.svg";
import SearchBox from "../components/SearchBox";
import { NavLink } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import BellIcon from "../icons/BellIcon";
import Dropdown from "../icons/Dropdown";

const Heading = () => {
	return (
		<header className="heading">
			<div className="heading-inner">
				<div className="img-container">
					<img
						className="img-box"
						src={logo}
					/>
				</div>

				<div className="heading-search-container">
					<SearchBox placeholder={"Search for anything..."} />
				</div>

				<div className="heading-end">
					<div className="nav">
						<NavLink
							className="nav-item"
							to={"/"}>
							Docs
						</NavLink>
					</div>

					<div className="user-details">
						<BellIcon />

						<div className="user-container">
							<div className="avatar-container">
								<img
									src={avatar}
									alt="avatar"
									className="avatar"
								/>
							</div>

							<div className="name-holder">
								<p className="name">Lendsqr</p>
								<Dropdown />
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Heading;
