import axios from "axios";

let AUTH_TOKEN = localStorage.getItem("token");

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default axios;
1;
