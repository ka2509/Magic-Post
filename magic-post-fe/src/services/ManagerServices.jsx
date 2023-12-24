import api from "./AxiosClient";

class ManagerServices {
    createStaffAccount(accountInformation){
        return api.post("api/users/admin/createAccount",accountInformation)
    }
}

export default new ManagerServices