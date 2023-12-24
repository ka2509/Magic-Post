import api from "./AxiosClient"

class OrderService {
    getOrder(orderId){
        return api.get("/api/Orders/view/"+orderId)
    }
}
export default new OrderService