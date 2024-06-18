import styled from "styled-components";

interface StatusPillProps {
	status: string;
}

const StatusPill = styled.span<StatusPillProps>`
	display: inline-block;
	padding: 7px 18px;
	border-radius: 4px;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: center;
	text-transform: capitalize;
	border-radius: 100px;

	background-color: ${(props) => {
		switch (props.status) {
			case "active":
				return "rgba(57, 205, 98, 0.06)";
			case "inactive":
				return "rgba(84, 95, 125, 0.06)";
			case "blacklisted":
				return "rgba(228, 3, 59, 0.06)";
			case "pending":
				return "rgba(233, 178, 0, 0.06)";
			default:
				return "";
		}
	}};

	color: ${(props) => {
		switch (props.status) {
			case "active":
				return "rgba(57, 205, 98, 1)";

			case "inactive":
				return "rgba(84, 95, 125, 1)";

			case "blacklisted":
				return "rgba(228, 3, 59, 1)";
			case "pending":
				return "rgba(233, 178, 0, 1)";
			default:
				return "";
		}
	}};
`;

export default StatusPill;
