import api from "./AxiosClient";

/**
 * Class representing Manager Services.
 */
class ManagerServices {
    createStaffAccount(accountInformation) {
        return api.post("api/users/admin/createAccount", accountInformation);
    }

    updateLeader(idUser, leaderInformation) {
        return api.post("api/users/updateLeader/" + idUser, leaderInformation);
    }
}

export default new ManagerServices();
