export interface Guarantor {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	relationship: string;
}

export interface User {
	id: number;
	name: {
		first: string;
		last: string;
	};
	email: string;
	status: string;
	account: {
		isLoanAccount: string;
		isSavingsAccount: string;
		balance: string;
		bankName: string;
		nuban: string;
		bvn: string;
		loanRepayment: string;
		tier: string;
	};
	gender: string;
	profilePicture: string;
	objectId: string;
	phoneNumber: string;
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
	username: string;
	createdAt: Date;
	officeEmail: string;
	socials: {
		instagram: string;
		twitter: string;
		facebook: string;
	};
	guarantor: Guarantor[];
}
