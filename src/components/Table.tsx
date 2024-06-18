import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Dropdown from "./ui/Dropdown";
import "../styles/components/Table.scss";
import "../styles/components/ui/Dropdown.scss";
import FilterIcon from "../icons/FilterIcon";
import Options from "../icons/Options";

interface TableProps {
	data: Array<{ [key: string]: any }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(
		null
	);

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
									{header === "Options" && header}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{displayedData.map((item, index) => (
							<tr key={index}>
								<td>{item.organization}</td>
								<td>{item.username}</td>
								<td>{item.email}</td>
								<td>{item.phoneNumber}</td>
								<td>{item.dateJoined}</td>
								<td>
									<span className="status-pill">{item.status}</span>
								</td>
								<td>
									<div className="options-wrapper">
										<Options
										// onClick={() =>
										// 	setDropdownOpenIndex(
										// 		dropdownOpenIndex === index ? null : index
										// 	)
										// }
										/>
										{dropdownOpenIndex === index && (
											<Dropdown
												options={[
													"View details",
													"Block user",
													"Activate user",
												]}
												onSelect={(option) =>
													handleDropdownSelect(option, index)
												}
											/>
										)}
									</div>
								</td>
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
