import api from "./AxiosClient"

class OrderService {
    getOrder(orderId){
        return api.get("/api/orders/view/"+orderId)
    }
    getReceiveOrder(){
        return api.get("/api/orders/getReceiveOrders")
    }
    getSendOrder(){
        return api.get("/api/orders/getSendOrders")
    }
    createOrder(orderData){
        return api.post("/api/orders/createOrder",orderData)
    }
}
export default new OrderService