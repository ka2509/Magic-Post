import api from "./AxiosClient";

/**
 * Represents a service for managing orders.
 */
class OrderService {
    getOrder(orderId) {
        return api.get("/api/orders/view/" + orderId);
    }
    getReceiveOrder() {
        return api.get("/api/orders/getReceiveOrders");
    }
    getSendOrder() {
        return api.get("/api/orders/getSendOrders");
    }
    createOrder(orderData) {
        return api.post("/api/orders/createOrder", orderData);
    }
    updateOrderStatus(orderData) {
        return api.post("/api/orderStatus/updateStatus", orderData);
    }
    updateLastPointStatus(orderData) {
        return api.post("/api/orderStatus/lastStatusOfOrder", orderData);
    }
    getDeliverdOrder() {
        return api.get("/api/orders/getDeliveredOrders");
    }
    getCancelledOrder() {
        return api.get("/api/orders/getCanceledOrders");
    }
    getOrderById(orderId) {
        return api.get("/api/orders/view/" + orderId);
    }
    getOrderState(orderData) {
        // console.log(orderData)
        return api.post("/api/orderStatus/printOrderState", orderData);
    }
    getSendOrdersByShipPoint(id) {
        return api.get("/api/orders/getSendOrders/" + id);
    }
    getReceiveOrdersByShipPoint(id) {
        return api.get("/api/orders/getReceiveOrders/" + id);
    }
}
export default new OrderService();
