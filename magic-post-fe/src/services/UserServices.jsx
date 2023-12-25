import api from "./AxiosClient"

class UserServices{
    getAllStaff(){
        return api.get("api/users/getAllStaff");
    }
}

export default new UserServices;