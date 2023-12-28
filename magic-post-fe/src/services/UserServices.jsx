import api from "./AxiosClient"

class UserServices{
    getAllStaff(){
        return api.get("api/users/getAllStaff");
    }
    getLeaderOfGatheringPoint(){
        return api.get("api/users/getLeadersOfGats");
    }
    getLeaderOfTransactionPoint(){
        return api.get("api/users/getLeadersOfTrans");
    }
    getCurrentUser(){
        return api.get("api/users/getCurrentUserName");
    }
}

export default new UserServices;