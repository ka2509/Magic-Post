import api from "./AxiosClient"

/**
 * Class representing user services.
 */
class UserServices {
    login(user) {
        return api.post("/api/auth/authenticate",user)
    }
}

export default new UserServices