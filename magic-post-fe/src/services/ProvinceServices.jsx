import api from "./AxiosClient"

class ProvinceService{
    getProvice(){
        return api.get("/api/province/getProvinces")
    }
}

 export default new ProvinceService