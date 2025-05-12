import axios from "axios";

const danoneApi = axios.create({
  baseURL: "https://apimaster.capitaldevs.com/api",
});

export default danoneApi;
