// src/components/Table.tsx
import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";
import Dropdown from "./ui/Dropdown";
import "../styles/components/Table.scss";
import "../styles/components/ui/Dropdown.scss";
import FilterIcon from "../icons/FilterIcon";
import Options from "../icons/Options";
import EyeIcon from "../icons/EyeIcon";
import Blacklist from "../icons/Blacklist";
import ActivateUserIcon from "../icons/ActivateUserIcon";
import StatusPill from "./ui/StatusPill";
import PrevBtn from "../icons/PrevBtn";
import NextBtn from "../icons/NextBtn";
import { User } from "../types"; // Import User interface

interface TableProps {
	data: User[]; // Use the User interface here
	onUserSelect: (user: User) => void; // Use the User interface here
}

const Table: React.FC<TableProps> = ({ data, onUserSelect }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(
		null
	);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const itemsPerPage = 9;
	const pageCount = Math.ceil(data.length / itemsPerPage);
	const displayedData = data.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage
	);

	const handlePageClick = (selectedItem: { selected: number }) => {
		setCurrentPage(selectedItem.selected);
	};

	const handleDropdownSelect = (option: string, index: number) => {
		if (option === "View Details") {
			onUserSelect(displayedData[index]);
		}
		console.log(`Selected ${option} for item ${index}`);
		setDropdownOpenIndex(null);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setDropdownOpenIndex(null);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const iconComponents = [<EyeIcon />, <Blacklist />, <ActivateUserIcon />];

	console.log(data);

	return (
		<div id="table">
			<div className="table-wrapper">
				<table className="table">
					<thead className="t-head">
						<tr>
							{[
								"Organization",
								"Username",
								"Email",
								"Phone number",
								"Date joined",
								"Status",
								"Options",
							].map((header) => (
								<th key={header}>
									{header !== "Options" && (
										<div className="table-header">
											<h3>{header}</h3>
											<FilterIcon />
										</div>
									)}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="table-body">
						{displayedData.map((item, index) => (
							<tr key={index}>
								<td>{item.job?.company}</td>
								<td>{item.username.toLowerCase()}</td>
								<td className="user-email">{item.email}</td>
								<td>{`080${item.phoneNumber}`}</td>
								<td>{format(new Date(item.createdAt), "MMM d, yyyy h:mma")}</td>
								<td>
									<StatusPill status={item?.status?.toLowerCase()}>
										{item.status}
									</StatusPill>
								</td>
								<td>
									<div className="options-wrapper">
										<button
											className="options-button"
											onClick={() =>
												setDropdownOpenIndex(
													dropdownOpenIndex === index ? null : index
												)
											}>
											<Options />
										</button>
									</div>
								</td>
								{dropdownOpenIndex === index && (
									<Dropdown
										ref={dropdownRef}
										icons={iconComponents}
										options={[
											"View Details",
											"Blacklist User",
											"Activate User",
										]}
										onSelect={(option) => handleDropdownSelect(option, index)}
									/>
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="table-end">
				<aside className="showing">
					<p>
						Showing{" "}
						<button>
							{data.length}{" "}
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g opacity="0.6">
									<path
										d="M11.0573 3.99378C11.8984 3.15269 13.1595 4.45644 12.3184 5.25487L7.56759 10.0056C7.23127 10.3841 6.64282 10.3841 6.3065 10.0056L1.64002 5.38129C0.841037 4.5402 2.10267 3.27906 2.94322 4.1202L6.937 8.11398L11.0573 3.99378Z"
										fill="#213F7D"
									/>
								</g>
							</svg>
						</button>{" "}
						out of {data.length}
					</p>
				</aside>

				<aside>
					<ReactPaginate
						previousLabel={<PrevBtn />}
						nextLabel={<NextBtn />}
						breakLabel={"..."}
						breakClassName={"break-me"}
						pageCount={pageCount}
						marginPagesDisplayed={1}
						pageRangeDisplayed={1}
						onPageChange={handlePageClick}
						containerClassName={"pagination"}
						activeClassName={"active"}
						previousClassName={"previous"}
						nextClassName={"next"}
						disabledClassName={"disabled"}
					/>
				</aside>
			</div>
		</div>
	);
};

export default Table;
