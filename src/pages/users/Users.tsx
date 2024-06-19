import { useEffect, useState } from "react";
import Table from "../../components/Table";
import UserCard from "../../components/UserCard";
import ActiveUsers from "../../icons/ActiveUsers";
import LoanUsers from "../../icons/LoanUsers";
import SavingUsers from "../../icons/SavingUsers";
import Users2 from "../../icons/Users2";
import Layout from "../../layout/Layout";
import "../../styles/pages/Users.scss";
import WebAppService from "../../services/WebAppService";
import UserDetails from "./UserDetails";
import { User } from "../../types";

const Users = () => {
	const [data, setData] = useState<User[]>([]);
	const [activeUsersCount, setActiveUsersCount] = useState(0);
	const [loanUsersCount, setLoanUsersCount] = useState(0);
	const [savingsUsersCount, setSavingsUsersCount] = useState(0);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	useEffect(() => {
		WebAppService.getUsers()
			.then((response) => {
				const users: User[] = response.result.map((user: User) => ({
					...user,
					createdAt: new Date(user.createdAt), // Convert createdAt string to Date
				}));
				setData(users);
				const activeUsers = users?.filter(
					(user) => user?.status === "active"
				).length;
				setActiveUsersCount(activeUsers);

				const loanUsers = users?.filter(
					(user) => user.account.isLoanAccount === "true"
				).length;
				setLoanUsersCount(loanUsers);

				const savingUsers = users?.filter(
					(user) => user.account.isSavingsAccount === "true"
				).length;
				setSavingsUsersCount(savingUsers);
			})
			.catch((error) => {
				console.error("Error fetching users", error);
			});
	}, []);

	const handleUserSelect = (user: User) => {
		setSelectedUser(user);
	};

	return (
		<Layout>
			<div className="users-container">
				{selectedUser ? (
					<UserDetails
						user={selectedUser}
						onBack={() => setSelectedUser(null)}
					/>
				) : (
					<>
						<h3 className="page-title">Users</h3>
						<div className="users-card-container">
							<UserCard
								icon={<Users2 />}
								cardname={"Users"}
								cardnumber={data?.length}
							/>
							<UserCard
								icon={<ActiveUsers />}
								cardname={"Active Users"}
								cardnumber={activeUsersCount}
							/>
							<UserCard
								icon={<LoanUsers />}
								cardname={"Users with Loans"}
								cardnumber={loanUsersCount}
							/>
							<UserCard
								icon={<SavingUsers />}
								cardname={"Users with Savings"}
								cardnumber={savingsUsersCount}
							/>
						</div>
						<div className="table-container">
							<Table
								data={data}
								onUserSelect={handleUserSelect}
							/>
						</div>
					</>
				)}
			</div>
		</Layout>
	);
};

export default Users;
