// import "../styles/components/NavItem.scss";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const StyledNavLink = styled(NavLink)`
// 	padding: 10px 30px;
// 	border-left: 3px solid #39cdcc;
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	gap: 10px;
// 	text-decoration: none;
// 	font-size: 16px;
// 	color: rgba(33, 63, 125, 0.6);
// 	background-color: rgba(57, 205, 204, 0.06);
// 	font-family: "Work Sans", sans-serif;
// `;

// interface NavItemProps {
// 	link: string;
// 	children: React.ReactNode;
// }

// const NavItem: React.FC<NavItemProps> = ({ link, children }) => {
// 	return <StyledNavLink to={link}>{children}</StyledNavLink>;
// };

// export default NavItem;

import "../styles/components/NavItem.scss";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavLink = styled(NavLink)<{ isActive?: boolean }>`
	padding: 10px 30px;

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
	text-decoration: none;
	font-size: 16px;
	color: rgba(33, 63, 125, 0.6);

	font-family: "Work Sans", sans-serif;

	&.active {
		color: #213f7d; /* Change the text color when active */
		background-color: rgba(57, 205, 204, 0.06);
		border-left: 3px solid #39cdcc;
	}

	${(props) =>
		props.isActive &&
		css`
			color: #213f7d;
			background-color: rgba(57, 205, 204, 0.06);
			border-left: 3px solid #39cdcc;
		`}
`;

interface NavItemProps {
	link: string;
	children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ link, children }) => {
	return (
		<StyledNavLink
			to={link}
			className={({ isActive }) => (isActive ? "active" : "")}>
			{children}
		</StyledNavLink>
	);
};

export default NavItem;
