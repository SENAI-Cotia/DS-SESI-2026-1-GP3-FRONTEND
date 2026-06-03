import axios from "axios";

export const Api = axios.create ({
    baseURL: "http://10.92.199.61:3000"
})