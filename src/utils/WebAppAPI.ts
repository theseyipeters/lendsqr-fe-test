import axios, { AxiosInstance } from "axios";

let headers: Record<string, string> = {};

const baseURL = import.meta.env.VITE_ACCESS_CODE_URL as string | undefined;

const WebAppAPI = (): AxiosInstance => {
	// Check if baseURL is defined to avoid runtime errors
	if (!baseURL) {
		throw new Error("Base URL is not defined");
	}

	const axiosInstance: AxiosInstance = axios.create({
		baseURL: baseURL,
		timeout: 30000,
		headers,
	});

	return axiosInstance;
};

export default WebAppAPI;
