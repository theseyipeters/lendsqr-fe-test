import React from "react";
import "../styles/components/ItemsPerPageDropdown.scss";

interface ItemsPerPageDropdownProps {
	itemsPerPage: number;
	setItemsPerPage: (items: number) => void;
	closeDropdown: () => void;
}

const ItemsPerPageDropdown: React.FC<ItemsPerPageDropdownProps> = ({
	itemsPerPage,
	setItemsPerPage,
	closeDropdown,
}) => {
	const options = [5, 10, 20, 50];

	const handleOptionClick = (option: number) => {
		setItemsPerPage(option);
		closeDropdown(); // Close the dropdown after selecting an option
	};

	return (
		<div className="items-per-page-dropdown">
			{options.map((option) => (
				<button
					key={option}
					className={option === itemsPerPage ? "active" : ""}
					onClick={() => handleOptionClick(option)}>
					{option}
				</button>
			))}
		</div>
	);
};

export default ItemsPerPageDropdown;
