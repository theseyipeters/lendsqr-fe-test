import React, { useState, useEffect, useRef } from "react";
import ReactPaginate from "react-paginate";
import { format } from "date-fns";
import Dropdown from "./ui/Dropdown";
import FilterModal from "../components/modals/FilterModal";
import LoadingSpinner from "./LoadingSpinner";
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
import { User } from "../types";
import DropIcon from "../icons/DropIcon";

interface TableProps {
	data: User[];
	onUserSelect: (user: User) => void;
}

const Table: React.FC<TableProps> = ({ data, onUserSelect }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(
		null
	);
	const [pageInput, setPageInput] = useState("");
	const [filteredData, setFilteredData] = useState<User[]>([]);
	const [loading, setLoading] = useState(true); // Add loading state
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [showFilterModal, setShowFilterModal] = useState(false);

	const itemsPerPage = 9;
	const pageCount = Math.ceil(filteredData.length / itemsPerPage);
	const displayedData = filteredData.slice(
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

	useEffect(() => {
		setLoading(true);
		setFilteredData(data);
		setLoading(false);
	}, [data]);

	const iconComponents = [<EyeIcon />, <Blacklist />, <ActivateUserIcon />];

	const handleFilterApply = (filteredData: User[]) => {
		setFilteredData(filteredData);
		setCurrentPage(0);
	};

	const toggleFilterModal = () => {
		setShowFilterModal(!showFilterModal);
	};

	const handlePageInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setPageInput(event.target.value);
	};

	const handleGoToPage = () => {
		const pageNumber = parseInt(pageInput, 10);
		if (pageNumber >= 1 && pageNumber <= pageCount) {
			setCurrentPage(pageNumber - 1);
		} else {
			alert(
				`Page doesn't exist. Please enter a number between 1 and ${pageCount}`
			);
		}
	};

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
											<FilterIcon onClick={toggleFilterModal} />
										</div>
									)}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="table-body">
						{loading ? (
							<tr>
								<td colSpan={7}>
									<LoadingSpinner />
								</td>
							</tr>
						) : displayedData.length > 0 ? (
							displayedData.map((item, index) => (
								<tr key={index}>
									<td>
										<button
											className="clickable-text"
											onClick={() => onUserSelect(item)}>
											{item.job?.company}
										</button>
									</td>
									<td>
										<button
											className="clickable-text"
											onClick={() => onUserSelect(item)}>
											{item.username.toLowerCase()}
										</button>
									</td>
									<td className="user-email">{item.email}</td>
									<td>{`080${item.phoneNumber}`}</td>
									<td>
										{format(new Date(item.createdAt), "MMM d, yyyy h:mma")}
									</td>
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
							))
						) : (
							<tr className="no-records">
								<td
									className="no-records"
									colSpan={7}>
									<div className="records">
										<p>No records found!</p>
									</div>
								</td>
							</tr>
						)}

						{showFilterModal && (
							<div>
								<FilterModal
									data={data}
									onClose={toggleFilterModal}
									onFilterApply={handleFilterApply}
								/>
							</div>
						)}
					</tbody>
				</table>
			</div>

			<div className="table-end">
				<aside className="showing">
					<p>
						Showing{" "}
						<button
							className={showFilterModal ? "active" : ""}
							onClick={toggleFilterModal}>
							{filteredData.length} <DropIcon />
						</button>{" "}
						out of {filteredData.length}
					</p>
				</aside>

				<aside className="pagination-container">
					<div>
						<ReactPaginate
							previousLabel={<PrevBtn />}
							nextLabel={<NextBtn />}
							breakLabel={"..."}
							breakClassName={"break-me"}
							pageCount={pageCount}
							marginPagesDisplayed={1}
							pageRangeDisplayed={2}
							onPageChange={handlePageClick}
							containerClassName={"pagination"}
							activeClassName={"active"}
							previousClassName={"previous"}
							nextClassName={"next"}
							disabledClassName={"disabled"}
						/>
					</div>
					<div className="page-input">
						<p>Page</p>
						<input
							type="number"
							className="page-input"
							value={pageInput}
							onChange={handlePageInputChange}
						/>
						<button
							className="go-button"
							onClick={handleGoToPage}>
							Go
						</button>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Table;
