import axios from "axios";
const localURL_LINK = "http://localhost:10000/v1";
const BASE_URL = "https://medeasedev.onrender.com/v1";

export default axios.create({
  baseURL: BASE_URL,
});
