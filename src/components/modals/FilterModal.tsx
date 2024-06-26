import React, { useState } from "react";
import { User } from "../../types";
import "../../styles/components/modals/FilterModal.scss";

interface FilterModalProps {
	data: User[];
	onClose: () => void;
	onFilterApply: (filteredData: User[]) => void;
}

interface FilterState {
	sortBy: keyof User;
	sortOrder: "asc" | "desc";
	status: string;
	organization: string;
	username: string;
	email: string;
	phoneNumber: string;
	startDate: string;
	endDate: string;
}

const FilterModal: React.FC<FilterModalProps> = ({
	data,
	onClose,
	onFilterApply,
}) => {
	const [filters, setFilters] = useState<FilterState>({
		sortBy: "createdAt",
		sortOrder: "asc",
		status: "",
		organization: "",
		username: "",
		email: "",
		phoneNumber: "",
		startDate: "",
		endDate: "",
	});

	const handleApplyFilters = () => {
		let filteredData = [...data];

		// Apply filters based on individual fields
		if (filters.status) {
			filteredData = filteredData.filter(
				(user) => user.status === filters.status
			);
		}
		if (filters.organization) {
			filteredData = filteredData.filter(
				(user) =>
					user.job &&
					user.job.company
						.toLowerCase()
						.includes(filters.organization.toLowerCase())
			);
		}
		if (filters.username) {
			filteredData = filteredData.filter((user) =>
				user.username.toLowerCase().includes(filters.username.toLowerCase())
			);
		}
		if (filters.email) {
			filteredData = filteredData.filter((user) =>
				user.email.toLowerCase().includes(filters.email.toLowerCase())
			);
		}
		if (filters.phoneNumber) {
			filteredData = filteredData.filter((user) =>
				("080" + user.phoneNumber).includes(filters.phoneNumber)
			);
		}
		if (filters.startDate && filters.endDate) {
			const start = new Date(filters.startDate).getTime();
			const end = new Date(filters.endDate).getTime();
			filteredData = filteredData.filter((user) => {
				const userDate = new Date(user.createdAt).getTime();
				return userDate >= start && userDate <= end;
			});
		}

		// Sorting logic
		filteredData.sort((a, b) => {
			if (filters.sortOrder === "asc") {
				return (
					new Date(a[filters.sortBy] as string).getTime() -
					new Date(b[filters.sortBy] as string).getTime()
				);
			} else {
				return (
					new Date(b[filters.sortBy] as string).getTime() -
					new Date(a[filters.sortBy] as string).getTime()
				);
			}
		});

		onFilterApply(filteredData);
		onClose();
	};

	const handleResetFilters = () => {
		setFilters({
			sortBy: "createdAt",
			sortOrder: "asc",
			status: "",
			organization: "",
			username: "",
			email: "",
			phoneNumber: "",
			startDate: "",
			endDate: "",
		});
	};

	return (
		<div className="filter-modal">
			<div className="filter-row">
				<label>
					Organization:
					<input
						type="text"
						value={filters.organization}
						onChange={(e) =>
							setFilters({ ...filters, organization: e.target.value })
						}
					/>
				</label>
				<label>
					Username:
					<input
						type="text"
						value={filters.username}
						onChange={(e) =>
							setFilters({ ...filters, username: e.target.value })
						}
					/>
				</label>
				<label>
					Email:
					<input
						type="text"
						value={filters.email}
						onChange={(e) => setFilters({ ...filters, email: e.target.value })}
					/>
				</label>
				<label>
					Phone number:
					<input
						type="text"
						value={filters.phoneNumber}
						onChange={(e) =>
							setFilters({ ...filters, phoneNumber: e.target.value })
						}
					/>
				</label>
				<label>
					Start Date:
					<input
						type="date"
						value={filters.startDate}
						onChange={(e) =>
							setFilters({ ...filters, startDate: e.target.value })
						}
					/>
				</label>
				<label>
					End Date:
					<input
						type="date"
						value={filters.endDate}
						onChange={(e) =>
							setFilters({ ...filters, endDate: e.target.value })
						}
					/>
				</label>
				<label>
					Status:
					<div className="custom-select">
						<select
							value={filters.status}
							onChange={(e) =>
								setFilters({ ...filters, status: e.target.value })
							}>
							<option value="">All</option>
							<option value="active">Active</option>
							<option value="inactive">Inactive</option>
							<option value="pending">Pending</option>
							<option value="blacklisted">Blacklisted</option>
						</select>
					</div>
				</label>
			</div>
			<div className="button-group">
				<button
					className="reset-button"
					onClick={handleResetFilters}>
					Reset
				</button>
				<button
					className="apply-button"
					onClick={handleApplyFilters}>
					Filter
				</button>
			</div>
		</div>
	);
};

export default FilterModal;
