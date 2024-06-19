import React from "react";
import "../../styles/pages/Users.scss";

interface DetailProps {
	title: string;
	item: string;
}

const Detail: React.FC<DetailProps> = ({ title, item }) => {
	return (
		<div className="detail">
			<p className="detail-title">{title}</p>
			<p className="detail-item">{item}</p>
		</div>
	);
};

export default Detail;
