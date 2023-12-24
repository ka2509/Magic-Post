import api from "./AxiosClient";

class ManagerServices {
    createStaffAccount(accountInformation){
        return api.post("api/Users/admin/create_account",accountInformation)
    }
}

export default new ManagerServices