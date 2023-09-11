import {axiosService} from "./axios.service";
import {urls} from "../constants";


const userService = {
    getAll: () => axiosService.get(urls.users),
    create: (user) => axiosService.post(urls.create, user)
}

export {
    userService
}