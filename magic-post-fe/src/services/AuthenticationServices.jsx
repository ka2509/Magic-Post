import api from "./AxiosClient"

class UserServices {
    login(user) {
        return api.post("/api/auth/authenticate",user)
    }
}   

export default new UserServices