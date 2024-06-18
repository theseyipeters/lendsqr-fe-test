import React from "react";
import "../styles/components/ui/Dropdown.scss";

interface DropdownProps {
	options: string[];
	onSelect: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
	return (
		<div className="dropdown">
			<ul className="dropdown-menu">
				{options.map((option, index) => (
					<li
						key={index}
						onClick={() => onSelect(option)}>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;
