import React, { useEffect, useState } from "react";
import OrderServices from "../../services/OrderServices";

function OrderStatistic() {
    const [sendOrders, setSendOrders] = useState([]);
    const [receiveOrders, setReceiveOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const sendOrders = await OrderServices.getSendOrder();
            const receiveOrders = await OrderServices.getReceiveOrder();
            setSendOrders(sendOrders.data);
            setReceiveOrders(receiveOrders.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    return (
        <div>
            <h2>Send Orders ({sendOrders.length})</h2>
            <ul>
                {sendOrders.map((order) => (
                    <li key={order.id}>{order.name}</li>
                ))}
            </ul>

            <h2>Receive Orders ({receiveOrders.length})</h2>
            <ul>
                {receiveOrders.map((order) => (
                    <div key={order.idOrder}>
                        <p>{order.idOrder}</p>
                        <label>From</label>
                        <p>{order.sender_name}</p>
                        <p>{order.sender_district}, {order.sender_province}</p>
                        <label>To</label>
                        <p>{order.receiver_name}</p>
                        <p>{order.receiver_district}, {order.receiver_province}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default OrderStatistic;