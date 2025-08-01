import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : import.meta.env.VITE_PRODUCTION_BASE_URL,
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;
