import api  from "./AxiosClient";

class DistrictService{
    getDistrictFromProvice(provinceCode){
        return api.get("/api/district/getDistricts?province="+provinceCode)
    }
}

export default new DistrictService