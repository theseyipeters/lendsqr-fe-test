import Table from "../../components/Table";
import UserCard from "../../components/UserCard";
import ActiveUsers from "../../icons/ActiveUsers";
import LoanUsers from "../../icons/LoanUsers";
import SavingUsers from "../../icons/SavingUsers";
import Users2 from "../../icons/Users2";
import Layout from "../../layout/Layout";
import "../../styles/pages/Users.scss";

const Users = () => {
	const data = [
		{
			organization: "Lendsqr",
			username: "user1",
			email: "user1@example.com",
			phoneNumber: "123-456-7890",
			dateJoined: "2022-01-01",
			status: "Active",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		{
			organization: "Org2",
			username: "user2",
			email: "user2@example.com",
			phoneNumber: "234-567-8901",
			dateJoined: "2022-02-01",
			status: "Inactive",
		},
		// Add more data here
	];
	return (
		<>
			<Layout>
				<div className="users-container">
					<h3 className="page-title">Users</h3>

					<div className="users-card-container">
						<UserCard
							icon={<Users2 />}
							cardname={"users"}
							cardnumber={"2,458"}
						/>
						<UserCard
							icon={<ActiveUsers />}
							cardname={"active users"}
							cardnumber={"2,453"}
						/>
						<UserCard
							icon={<LoanUsers />}
							cardname={"users with loans"}
							cardnumber={"12,453"}
						/>
						<UserCard
							icon={<SavingUsers />}
							cardname={"users with savings"}
							cardnumber={"102,453"}
						/>
					</div>

					<div className="table-container">
						<Table data={data} />
					</div>
				</div>
			</Layout>
		</>
	);
};

export default Users;
