import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import Dropdown from "./ui/Dropdown";
import "../styles/components/Table.scss";
import "../styles/components/ui/Dropdown.scss";
import FilterIcon from "../icons/FilterIcon";
import Options from "../icons/Options";
import EyeIcon from "../icons/EyeIcon";
import Blacklist from "../icons/Blacklist";
import ActivateUserIcon from "../icons/ActivateUserIcon";
import StatusPill from "./ui/StatusPill";

interface TableProps {
	data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(
		null
	);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const itemsPerPage = 10;
	const pageCount = Math.ceil(data.length / itemsPerPage);
	const displayedData = data.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage
	);

	const handlePageClick = (selectedItem: { selected: number }) => {
		setCurrentPage(selectedItem.selected);
	};

	const handleDropdownSelect = (option: string, index: number) => {
		console.log(`Selected ${option} for item ${index}`);
		setDropdownOpenIndex(null); // Close the dropdown after selecting an option
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setDropdownOpenIndex(null); // Close the dropdown if clicked outside
		}
	};

	useEffect(() => {
		// Add event listener when component mounts
		document.addEventListener("mousedown", handleClickOutside);

		// Clean up event listener when component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const iconComponents = [<EyeIcon />, <Blacklist />, <ActivateUserIcon />];

	return (
		<>
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
								<td>{item.organization}</td>
								<td>{item.username}</td>
								<td>{item.email}</td>
								<td>{item.phoneNumber}</td>
								<td>{item.dateJoined}</td>
								<td>
									<StatusPill status={item.status.toLowerCase()}>
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
			<ReactPaginate
				previousLabel={"previous"}
				nextLabel={"next"}
				breakLabel={"..."}
				breakClassName={"break-me"}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={handlePageClick}
				containerClassName={"pagination"}
				activeClassName={"active"}
			/>
		</>
	);
};

export default Table;
