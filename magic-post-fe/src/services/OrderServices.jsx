import api from "./AxiosClient"

class OrderService {
    getOrder(orderId){
        return api.get("/api/Orders/view/"+orderId)
    }
    getReceiveOrder(){
        return api.get("/api/Orders/getReceiveOrders")
    }
    getSendOrder(){
        return api.get("/api/Orders/getSendOrders")
    }
}
export default new OrderService