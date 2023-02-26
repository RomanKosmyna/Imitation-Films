import {movieBaseURL} from "../configs";
import {apiToken} from "../configs";

import axios from "axios";

const apiService = axios.create({baseURL: movieBaseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${apiToken}`
    return config
});

export {apiService};