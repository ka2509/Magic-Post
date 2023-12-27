import React, { useEffect, useState } from "react";
import OrderServices from "../../services/OrderServices";
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function OrderStatistic() {
    const [sendOrders, setSendOrders] = useState([]);
    const [receiveOrders, setReceiveOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const sendOrdersData = await OrderServices.getSendOrder();
            const receiveOrdersData = await OrderServices.getReceiveOrder();
            setSendOrders(sendOrdersData.data);
            setReceiveOrders(receiveOrdersData.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

    const pieChartData = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
                getRandomColor(),
            ],
        }],
    };

    const barChartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Monthly Sales',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: getRandomColor(),
        }],
    };

    return (
        <div>
            {sendOrders.length > 0 && receiveOrders.length > 0 && (
                <div>
                    <div style={{ width: '50%', display: 'inline-block' }}>
                        <h2>Pie Chart</h2>
                        <Pie data={pieChartData} />
                    </div>

                    <div style={{ width: '50%', display: 'inline-block' }}>
                        <h2>Bar Chart</h2>
                        <Bar data={barChartData} />
                    </div>
                </div>
            )}

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
