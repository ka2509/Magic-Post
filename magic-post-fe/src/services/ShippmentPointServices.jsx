import api from "./AxiosClient"

class ShipmentPointService{
    getUserLocation(){
        return api.get("/api/shipments/getUserShipments")
    }
}

export default new ShipmentPointService