import api from "./AxiosClient"

class ShipmentPointService{
    getUserLocation(){
        return api.get("/api/shipments/getUserShipments")
    }
    getGatheringPoint(){
        return api.get("/api/shipments/getGatherings")
    }
}

export default new ShipmentPointService