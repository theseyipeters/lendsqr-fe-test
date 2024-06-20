import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface NavItemProps {
	link: string;
	children: React.ReactNode;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

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
		color: #213f7d;
		background-color: rgba(57, 205, 204, 0.06);
		border-left: 3px solid #39cdcc;
	}
	&:hover {
		color: rgba(33, 63, 125, 1);
	}

	${(props) =>
		props.isActive &&
		css`
			color: #213f7d;
			background-color: rgba(57, 205, 204, 0.06);
			border-left: 3px solid #39cdcc;
		`}

	// Media query for smaller screens
  @media (max-width: 768px) {
		padding: 10px;
		font-size: 14px;
		padding-left: 20px;

		.nav-icon {
			display: inline-block;
			font-size: 24px;
			margin-right: 0;
		}

		.nav-text {
			display: none;
		}
	}

	@media (max-width: 992px) {
		.nav-text {
			font-size: 14px;
		}
	}
`;

const NavItem: React.FC<NavItemProps> = ({ link, children, icon: Icon }) => {
	return (
		<StyledNavLink
			to={link}
			className={({ isActive }) => (isActive ? "active" : "navLink")}>
			<span className="nav-icon">
				<Icon />
			</span>
			<span className="nav-text">{children}</span>
		</StyledNavLink>
	);
};

export default NavItem;
