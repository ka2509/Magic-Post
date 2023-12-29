import React, { useEffect, useState } from "react";
import OrderServices from "../../services/OrderServices";
import UserServices from "../../services/UserServices";
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function OrderStatistic() {
    const [sendOrders, setSendOrders] = useState([]);
    const [receiveOrders, setReceiveOrders] = useState([]);
    const [deliveredOrders, setDeliveredOrders] = useState([]);
    const [canceledOrders, setCanceledOrders] = useState([]);
    useEffect(() => {
        const fetchSendOrders = async () => {
            try {
                const data = await OrderServices.getDeliverdOrder();
                const data1 = await OrderServices.getSendOrder();
                setSendOrders(data1.data);
                const data2 = await OrderServices.getReceiveOrder();
                setReceiveOrders(data2.data);
                setDeliveredOrders(data.data);
                console.log(data.data);
            } catch (error) {
                console.error("Error fetching send orders:", error);
            }
        }

        fetchSendOrders();

        const fetchReceiveOrders = async () => {
            try {
                const data = await OrderServices.getCancelledOrder();
                setCanceledOrders(data.data);
                console.log(data.data);
            } catch (error) {
                console.error("Error fetching receive orders:", error);
            }
        }

        fetchReceiveOrders();
    }, []);

    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

    const pieChartData = {
        labels: ['Delivered Orders', 'Canceled Orders'],
        datasets: [{
            data: [deliveredOrders.length, canceledOrders.length],
            backgroundColor: [
                getRandomColor(),
                getRandomColor(),
            ],
        }],
    };

    const barChartData = {
        labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '5 Nearest Month\'s Monthly Order',
            data: [0, 0, 0, 0, receiveOrders.length+sendOrders.length],
            backgroundColor: getRandomColor(),
        }],
    };

    return (
        <div className="statistic">
            <div className="d1">
                <div><span> Total Order</span> <h1>{receiveOrders.length+sendOrders.length}</h1></div>
                <div><span> Receive Order:</span> <h1>{receiveOrders.length}</h1></div>
                <div><span> Send Order:</span> <h1>{sendOrders.length}</h1></div>
            </div>
            <div className="d2">
                <div className="d3">
                    <div style={{ width: '99%', display: 'inline-block' }}>
                        <h2>Bar Chart</h2>
                        <Bar data={barChartData} />
                    </div>
                </div>
                <div >
                    <div style={{ width: '99%', display: 'inline-block' }}>
                        <h2>Pie Chart</h2>
                        <Pie data={pieChartData} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default OrderStatistic;
