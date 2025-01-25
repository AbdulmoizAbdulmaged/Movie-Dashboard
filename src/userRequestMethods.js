import axios from "axios";

const BASE_URL = "https://www.jsondataai.com/api/guK8Sdo";

export const publicRequest = axios.create(
  {
    baseURL:BASE_URL,
  }
);