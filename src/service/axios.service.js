import axios from "axios";

import {baseURL, token} from "../config";


const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use((config) => {
    const accessToken = token
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

export {axiosService}