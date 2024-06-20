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
	const [activeUsersCount, setActiveUsersCount] = useState<number | null>(null);
	const [loanUsersCount, setLoanUsersCount] = useState<number | null>(null);
	const [savingsUsersCount, setSavingsUsersCount] = useState<number | null>(
		null
	);
	const [selectedUser, setSelectedUser] = useState<User | null>(null);

	useEffect(() => {
		// Check if users data is in local storage
		const storedUsers = localStorage.getItem("users");

		if (storedUsers) {
			// Parse the stored users data
			const users: User[] = JSON.parse(storedUsers);
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
		} else {
			// Fetch users data from API
			WebAppService.getUsers()
				.then((response) => {
					const users: User[] = response.result.map((user: User) => ({
						...user,
						createdAt: new Date(user.createdAt), // Convert createdAt string to Date
					}));
					setData(users);

					// Store users data in local storage
					localStorage.setItem("users", JSON.stringify(users));

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
		}
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
								cardnumber={data.length > 0 ? data.length : "-"}
							/>
							<UserCard
								icon={<ActiveUsers />}
								cardname={"Active Users"}
								cardnumber={activeUsersCount !== null ? activeUsersCount : "-"}
							/>
							<UserCard
								icon={<LoanUsers />}
								cardname={"Users with Loans"}
								cardnumber={loanUsersCount !== null ? loanUsersCount : "-"}
							/>
							<UserCard
								icon={<SavingUsers />}
								cardname={"Users with Savings"}
								cardnumber={
									savingsUsersCount !== null ? savingsUsersCount : "-"
								}
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
