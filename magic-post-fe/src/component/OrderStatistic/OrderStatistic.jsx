import React, { useEffect, useState } from "react";
import OrderServices from "../../services/OrderServices";
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function OrderStatistic() {
    const [sendOrders, setSendOrders] = useState([]);
    const [receiveOrders, setReceiveOrders] = useState([]);
    // const [chartData, setChartData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    useEffect(() => {
        // setChartData
    }, []);


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
        <div className="statistic">
            <div className="d1">
                <div><span> So lieu gi do:</span> <h1>1000000</h1></div>
                <div><span> So lieu gi do:</span> <h1>2000000</h1></div>
                <div><span> So lieu gi do:</span> <h1>3000000</h1></div>
            </div>
            <div className="d2">
                <div className="d3">
                    <div style={{ width: '99%', display: 'inline-block' }}>
                        <h2>Bar Chart</h2>
                        <Bar data={barChartData} />
                    </div>
                </div>
                <div className="d4">
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
