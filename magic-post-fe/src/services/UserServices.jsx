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
    deleteUser(id){
        return api.delete("api/users/delete/"+id);
    }
    activeUser(id){
        return api.get("api/users/activate/"+id);
    }
    unactiveUser(id){
        console.log(id);
        return api.get("api/users/unActivate/"+id);
    }
}

export default new UserServices;