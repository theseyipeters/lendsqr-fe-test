import { NavLink } from "react-router-dom";
import "../styles/layout/Sidebar.scss";
import Dropdown2 from "../icons/Dropdown2";
import Briefcase from "../icons/Briefcase";
import Home from "../icons/Home";
import Users from "../icons/Users";
import NavItem from "../components/NavItem";
import Guarantors from "../icons/Guarantors";
import Loans from "../icons/Loans";
import Savings from "../icons/Savings";
import LoanRequest from "../icons/LoanRequest";
import Whitelist from "../icons/Whitelist";
import Karma from "../icons/Karma";
import CaseIcon from "../icons/CaseIcon";
import SavingsProducts from "../icons/SavingsProducts";
import Decision from "../icons/Decision";
import Fees from "../icons/Fees";
import Transactions from "../icons/Transactions";
import Services from "../icons/Services";
import ServiceAccount from "../icons/ServiceAccount";
import Settlement from "../icons/Settlement";
import Reports from "../icons/Reports";
import Preferences from "../icons/Preferences";
import Pricing from "../icons/Pricing";
import AuditLogs from "../icons/AuditLogs";
import SystemsMessages from "../icons/SystemsMessages";
import Logout from "../icons/Logout";

// Define the type for navigation items
interface NavItemType {
	name: string;
	icon: React.ComponentType;
	link: string;
}

const Sidebar: React.FC = () => {
	const customersNavItems: NavItemType[] = [
		{ name: "Users", icon: Users, link: "/users" },
		{ name: "Guarantors", icon: Guarantors, link: "/guarantors" },
		{ name: "Loans", icon: Loans, link: "/loans" },
		{ name: "Decision Models", icon: Decision, link: "/decision-models" },
		{ name: "Savings", icon: Savings, link: "/savings" },
		{ name: "Loan Requests", icon: LoanRequest, link: "/loan-requests" },
		{ name: "Whitelist", icon: Whitelist, link: "/whitelist" },
		{ name: "Karma", icon: Karma, link: "/karma" },
	];
	const businessNavItems: NavItemType[] = [
		{ name: "Organizations", icon: CaseIcon, link: "/organizations" },
		{ name: "Loan Products", icon: LoanRequest, link: "/loan-products" },
		{
			name: "Savings Products",
			icon: SavingsProducts,
			link: "/savings-products",
		},
		{ name: "Fees and Charges", icon: Fees, link: "/fees-and-charges" },
		{ name: "Transactions", icon: Transactions, link: "/transactions" },
		{ name: "Services", icon: Services, link: "/services" },
		{ name: "Service Account", icon: ServiceAccount, link: "/service-account" },
		{ name: "Settlement", icon: Settlement, link: "/settlement" },
		{ name: "Reports", icon: Reports, link: "/reports" },
	];
	const settingsNavItems: NavItemType[] = [
		{ name: "Preferences", icon: Preferences, link: "/preferences" },
		{ name: "Fees and Pricing", icon: Pricing, link: "/fees-and-pricing" },
		{ name: "Audit Logs", icon: AuditLogs, link: "/audit-logs" },
		{
			name: "Systems Messages",
			icon: SystemsMessages,
			link: "/systems-messages",
		},
	];

	return (
		<nav className="sidebar">
			<div className="sidebar-inner">
				<div className="sidebar-nav">
					<div className="top-nav">
						<NavLink
							className={"nav-link"}
							to={"/"}>
							<Briefcase />
							Switch Organization
							<Dropdown2 />
						</NavLink>

						<NavLink
							to={"/"}
							className="nav-link">
							<Home /> Dashboard
						</NavLink>
					</div>

					<div className="customers-nav">
						<p className="nav-heading">Customers</p>

						<div className="customers-nav-items-container">
							{customersNavItems.map((item) => (
								<NavItem
									key={item.link}
									link={item.link}>
									<item.icon />
									{item.name}
								</NavItem>
							))}
						</div>
					</div>
					<div className="customers-nav">
						<p className="nav-heading">Businesses</p>

						<div className="customers-nav-items-container">
							{businessNavItems.map((item) => (
								<NavItem
									key={item.link}
									link={item.link}>
									<item.icon />
									{item.name}
								</NavItem>
							))}
						</div>
					</div>
					<div className="customers-nav">
						<p className="nav-heading">Settings</p>

						<div className="customers-nav-items-container">
							{settingsNavItems.map((item) => (
								<NavItem
									key={item.link}
									link={item.link}>
									<item.icon />
									{item.name}
								</NavItem>
							))}
						</div>
					</div>

					<div className="sidebar-end">
						<button className="logout-btn">
							<Logout />
							Logout
						</button>

						<p className="version">v1.2.0</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Sidebar;
