import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
export default axiosInstance;
