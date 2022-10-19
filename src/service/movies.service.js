import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const moviesService = {
    getAll: (page) => axiosService.get(urls.movies + page)
}

export {
    moviesService
}