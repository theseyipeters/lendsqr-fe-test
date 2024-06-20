import React from "react";
import Detail from "./Detail";
import "../../styles/pages/Users.scss";

interface Guarantor {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	relationship: string;
}

interface User {
	id: number;
	status: string;
	name: {
		first: string;
		last: string;
	};
	email: string;
	profilePicture: string;
	objectId: string;
	phoneNumber: string;
	account: {
		isLoanAccount: string;
		isSavingsAccount: string;
		balance: string;
		bankName: string;
		nuban: string;
		bvn: string;
		loanRepayment: string;
	};
	gender: string;
	maritalStatus: string;
	children: string;
	typeOfResidence: string;
	educationLevel: string;
	employmentStatus: string;
	job: {
		area: string;
		duration: string;
		monthlyIncome: string;
		company: string;
	};
	officeEmail: string;
	socials: {
		instagram: string;
		twitter: string;
		facebook: string;
	};
	guarantor: Guarantor[];
}

interface GeneralDetailsProps {
	user: User;
}

const capitalizeFirstLetter = (string: string) => {
	if (!string) return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatCurrency = (amount: number) => {
	return amount
		.toLocaleString("en-NG", {
			style: "currency",
			currency: "NGN",
			minimumFractionDigits: 2,
		})
		.replace(/\D00(?=\D*$)/, "");
};

const GeneralDetails: React.FC<GeneralDetailsProps> = ({ user }) => {
	const fullName = user.name.first + " " + user.name.last;
	const email = user.email.toLowerCase();

	const maritalStatus = capitalizeFirstLetter(user.maritalStatus);
	const typeofResidence = capitalizeFirstLetter(user.typeOfResidence);
	const loanRepayment = parseFloat(user.account.loanRepayment);
	const employmentStatus = capitalizeFirstLetter(user.employmentStatus);

	return (
		<div className="user-details-card-2">
			{/* ---------------- Personal Information ----------------- */}

			<div className="user-details-card-2-container">
				<p>Personal Information</p>

				<div className="detail-container">
					<Detail
						title="Full Name"
						item={fullName}
					/>
					<Detail
						title="Phone Number"
						item={`080${user.phoneNumber}`}
					/>

					<Detail
						title="Email"
						item={email}
					/>

					<Detail
						title="BVN"
						item={user.account.bvn}
					/>
					<Detail
						title="Gender"
						item={user.gender.toUpperCase()}
					/>
					<Detail
						title="Marital status"
						item={maritalStatus}
					/>
					<Detail
						title="children"
						item={user.children}
					/>
					<Detail
						title="type of residence"
						item={typeofResidence}
					/>
				</div>
			</div>

			<hr />

			{/* ------------------------- Education & Employment --------------------- */}

			<div className="user-details-card-2-container">
				<p>Education and Employment</p>

				<div className="detail-container">
					<Detail
						title="level of education"
						item={user.educationLevel}
					/>
					<Detail
						title="employment status"
						item={employmentStatus}
					/>

					<Detail
						title="sector of employment"
						item={user.job.area}
					/>
					<Detail
						title="organization"
						item={user.job.company}
					/>

					<Detail
						title="office email"
						item={user.officeEmail.toLowerCase()}
					/>
					<Detail
						title="monthly income"
						item={user.job.monthlyIncome}
					/>
					<Detail
						title="loan repayment"
						item={`${formatCurrency(loanRepayment)}.00`}
					/>

					<Detail
						title="duration of employment"
						item={`${user.job.duration} years`}
					/>
				</div>
			</div>

			<hr />

			{/* ------------------ Socials Information ---------------------- */}

			<div className="user-details-card-2-container">
				<p>Socials</p>

				<div className="detail-container">
					<Detail
						title="instagram"
						item={user.socials.instagram.toLowerCase()}
					/>
					<Detail
						title="facebook"
						item={user.socials.facebook}
					/>

					<Detail
						title="twitter"
						item={user.socials.twitter.toLowerCase()}
					/>
				</div>
			</div>

			<hr />

			{/* ------  Guarantor Information--------------  */}

			<div className="user-details-card-2-container">
				<p>Guarantor</p>

				{user.guarantor.map((guarantor, index) => (
					<React.Fragment key={index}>
						<div className="detail-container">
							<Detail
								title="Full Name"
								item={`${guarantor.firstName} ${guarantor.lastName}`}
							/>
							<Detail
								title="Phone Number"
								item={`080${guarantor.phoneNumber}`}
							/>
							<Detail
								title="Email"
								item={guarantor.email.toLowerCase()}
							/>
							<Detail
								title="Relationship"
								item={guarantor.relationship.toUpperCase()}
							/>
						</div>
						{index < user.guarantor.length - 1 && <hr className="divider" />}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default GeneralDetails;
