import axios from "axios";
import { ACCESS_KEY } from "../config";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + ACCESS_KEY
  }
});

