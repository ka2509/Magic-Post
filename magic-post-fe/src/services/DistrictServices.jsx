import api  from "./AxiosClient";

class DistrictService{
    getDistrictFromProvice(provinceCode){
        return api.get("/api/district/getDistricts?provinceCode="+provinceCode)
    }
}

export default new DistrictService