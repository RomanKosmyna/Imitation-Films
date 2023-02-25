import axios from "axios";
import {movieBaseURL} from "../configs/urls";
import {apiToken} from "../configs";

const apiService = axios.create({baseURL: movieBaseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${apiToken}`
    return config
});

export {apiService};