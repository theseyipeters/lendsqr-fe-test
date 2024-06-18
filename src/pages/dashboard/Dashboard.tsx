import Heading from "../../layout/Heading";
import Sidebar from "../../layout/Sidebar";
import "../../styles/pages/Dashboard.scss";
import DashboardMain from "./DashboardMain";

const Dashboard = () => {
	return (
		<div className="dashboard">
			<Heading />

			<div className="body-container">
				<Sidebar />
				<DashboardMain />
			</div>
		</div>
	);
};

export default Dashboard;
