import React, { useState } from "react";
import BackIcon from "../../icons/BackIcon";
import EmptyStar from "../../icons/EmptyStar";
import FilledStar from "../../icons/FilledStar";
import GeneralDetails from "./GeneralDetails";
import StatusPill from "../../components/ui/StatusPill";

import { User } from "../../types";
import NoData from "./NoData";

interface UserDetailsProps {
	user: User;
	onBack: () => void;
}

const formatCurrency = (amount: number) => {
	return amount
		.toLocaleString("en-NG", {
			style: "currency",
			currency: "NGN",
			minimumFractionDigits: 2,
		})
		.replace(/\D00(?=\D*$)/, "");
};

const UserDetails: React.FC<UserDetailsProps> = ({ user, onBack }) => {
	const [activeTab, setActiveTab] = useState<string>("general details");
	const balance = parseFloat(user.account.balance);
	const tier = parseFloat(user.account.tier);

	const renderStars = (tier: number) => {
		const filledStars = [];
		const emptyStars = [];

		for (let i = 0; i < tier; i++) {
			filledStars.push(<FilledStar key={i} />);
		}

		for (let i = tier; i < 3; i++) {
			emptyStars.push(<EmptyStar key={i} />);
		}

		return [...filledStars, ...emptyStars];
	};

	const renderActiveTab = () => {
		if (activeTab !== "general details") {
			return <NoData />;
		} else {
			return <GeneralDetails user={user} />;
		}
	};

	return (
		<div className="user-details">
			<button
				className="back-btn"
				onClick={onBack}>
				<BackIcon /> Back to Users
			</button>
			<div className="user-details-heading">
				<h3 className="page-title">User Details</h3>

				<div className="action">
					<button className="blacklist">Blacklist</button>
					<button className="activate">Activate</button>
				</div>
			</div>

			<div className="user-details-card-1">
				<div className="user-details-card-container">
					<div className="user-details-box-1">
						<img
							className="user-img-container"
							src={user.profilePicture}
							alt={user.name.first}
						/>
						<div className="user-name-holder">
							<p className="user-name">
								{user.name.first} {user.name.last}
							</p>
							<small>{user.phoneNumber}</small>
						</div>
					</div>
					<hr className="divider" />

					<div className="user-tier">
						<div className="tier-container">
							<p>User's Tier</p>
							<div className="star-container">{renderStars(tier)}</div>
						</div>
					</div>

					<hr className="divider" />

					<div className="user-balance">
						<div className="balance-container">
							<p className="balance">{formatCurrency(balance)}.00</p>

							<p className="bank">
								{user.account.nuban}/{user.account.bankName} Bank
							</p>
						</div>
					</div>
				</div>

				<div className="section-tabs">
					<div>
						<button
							className={activeTab === "general details" ? "tab active" : "tab"}
							onClick={() => {
								setActiveTab("general details");
								console.log("General Details");
							}}>
							General Details
						</button>

						<button
							className={activeTab === "documents" ? "tab active" : "tab"}
							onClick={() => setActiveTab("documents")}>
							Documents
						</button>
						<button
							className={activeTab === "bank details" ? "tab active" : "tab"}
							onClick={() => setActiveTab("bank details")}>
							Bank Details
						</button>
						<button
							className={activeTab === "loans" ? "tab active" : "tab"}
							onClick={() => setActiveTab("loans")}>
							Loans
						</button>
						<button
							className={activeTab === "savings" ? "tab active" : "tab"}
							onClick={() => setActiveTab("savings")}>
							Savings
						</button>
						<button
							className={activeTab === "app and system" ? "tab active" : "tab"}
							onClick={() => setActiveTab("app and system")}>
							App and System
						</button>
					</div>
				</div>

				<div className="statusPill">
					<StatusPill status={user.status.toLowerCase()}>
						{user.status}
					</StatusPill>
				</div>
			</div>

			<div className="tab-content">{renderActiveTab()}</div>
		</div>
	);
};

export default UserDetails;
