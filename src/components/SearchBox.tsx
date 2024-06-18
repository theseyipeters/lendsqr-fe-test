import SearchIcon from "../icons/SearchIcon";
import "../styles/components/SearchBox.scss";

const SearchBox = ({ placeholder }: any) => {
	return (
		<div className="search-box">
			<input
				className="search-input"
				placeholder={placeholder}
				type={"text"}
			/>

			<button className="search-btn">
				<SearchIcon />
			</button>
		</div>
	);
};

export default SearchBox;
