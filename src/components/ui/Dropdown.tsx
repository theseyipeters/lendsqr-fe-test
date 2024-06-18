import React, { forwardRef } from "react";
import "../../styles/components/ui/Dropdown.scss";

interface DropdownProps {
	options: string[];
	icons: JSX.Element[]; // Array of icons
	onSelect: (option: string) => void;
}

const Dropdown: React.ForwardRefRenderFunction<
	HTMLDivElement,
	DropdownProps
> = ({ options, icons, onSelect }, ref) => {
	return (
		<div
			className="dropdown"
			ref={ref}>
			<ul className="dropdown-menu">
				{options.map((option, index) => (
					<li
						key={index}
						onClick={() => onSelect(option)}>
						<div>
							{icons[index] && <span className="icon">{icons[index]}</span>}{" "}
							{option}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default forwardRef(Dropdown);
