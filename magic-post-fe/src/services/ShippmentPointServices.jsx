import api from "./AxiosClient"

class ShipmentPointService{
    getUserLocation(){
        return api.get("/api/shipments/getUserShipments")
    }
    getGatheringPoint(){
        return api.get("/api/shipments/getGatherings")
    }
    getShipmentPointFromProvince(provinceCode){
        return api.get("/api/shipments/getShipmentsByProvince?code="+provinceCode)
    }
}

export default new ShipmentPointService