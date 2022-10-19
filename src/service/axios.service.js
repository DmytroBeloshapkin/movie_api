import axios from "axios";

import {baseURL} from "../config/urls";
import {token} from "../config/token";

const axiosService  = axios.create({
    baseURL,
    headers:{
        Authorization: `Bearer ${token}`
    }
})

export {
    axiosService
}