import "../styles/layout/Layout.scss";
import Heading from "./Heading";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }: any) => {
	return (
		<div className="layout">
			<Heading />

			<div className="layout-container">
				<div className="layout-sidebar-container">
					<Sidebar />
				</div>

				<div className="page-container">{children}</div>
			</div>
		</div>
	);
};

export default Dashboard;
