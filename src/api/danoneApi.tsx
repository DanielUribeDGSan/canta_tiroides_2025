import axios from "axios";

const danoneApi = axios.create({
  baseURL: "https://apicantatiroides.capitaldevs.com/api",
});

export default danoneApi;
