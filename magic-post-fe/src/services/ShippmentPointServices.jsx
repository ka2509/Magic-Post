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
    getNorthShipmentPoint(){
        return api.get("/api/shipments/getNorthShipmentPoint")
    }
    getMiddleShipmentPoint(){
        return api.get("/api/shipments/getMiddleShipmentPoint")
    }
    getSouthShipmentPoint(){
        return api.get("/api/shipments/getSouthShipmentPoint")
    }
    getReceiveOrderAtNorth(){
        return api.get("/api/orders/getReceiveOrdersAtNorth")
    }
    getReceiveOrderAtMiddle(){
        return api.get("/api/orders/getReceiveOrdersAtMiddle")
    }
    getReceiveOrderAtSouth(){
        return api.get("/api/orders/getReceiveOrdersAtSouth")
    }
    getSendOrderAtNorth(){
        return api.get("/api/orders/getSendOrdersAtNorth")
    }
    getSendOrderAtMiddle(){
        return api.get("/api/orders/getSendOrdersAtMiddle")
    }
    getSendOrderAtSouth(){
        return api.get("/api/orders/getSendOrdersAtSouth")
    }
    getTransactionPoint(){
        return api.get("/api/shipments/getTransactions")
    }
}

export default new ShipmentPointService