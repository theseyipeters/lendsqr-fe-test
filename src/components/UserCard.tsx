import "../styles/components/UserCard.scss";

const UserCard = ({ icon, cardname, cardnumber }: any) => {
	return (
		<div className="users-card">
			{icon}

			<p className="users-card-name">{cardname}</p>

			<h4 className="users-card-number">{cardnumber}</h4>
		</div>
	);
};

export default UserCard;
