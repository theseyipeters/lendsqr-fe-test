import WebAppAPI from "../utils/WebAppAPI";

const WebAppService = {
	getUsers: async () => {
		try {
			const response = await WebAppAPI().get("/");
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};

export default WebAppService;
