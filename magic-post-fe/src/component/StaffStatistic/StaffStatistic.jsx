import React, { useEffect, useState } from "react";
import OrderServices from "../../services/OrderServices";
import { Pie, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import ShippmentPointServices from "../../services/ShippmentPointServices";

function ManagerStatistic() {
    const [sendOrders, setSendOrders] = useState([]);
    const [northReceiveOrders, setNorthReceiveOrders] = useState([]);
    const [middleReceiveOrders, setMiddleReceiveOrders] = useState([]);
    const [southReceiveOrders, setSouthReceiveOrders] = useState([]);
    const [northSendOrders, setNorthSendOrders] = useState([]);
    const [middleSendOrders, setMiddleSendOrders] = useState([]);
    const [southSendOrders, setSouthSendOrders] = useState([]);
    const [gatheringPoints, setGatheringPoint] = useState([]);
    const [transactionPoints, setTransactionPoint] = useState([]);
    useEffect(() => {
        const fetchSendOrders = async () => {
            try {
                const data = await ShippmentPointServices.getReceiveOrderAtNorth();
                setNorthReceiveOrders(data.data);
                const data1 = await ShippmentPointServices.getReceiveOrderAtMiddle();
                setMiddleReceiveOrders(data1.data);
                const data2 = await ShippmentPointServices.getReceiveOrderAtSouth();
                setSouthReceiveOrders(data2.data);
                const data3 = await ShippmentPointServices.getSendOrderAtNorth();
                setNorthSendOrders(data3.data);
                const data4 = await ShippmentPointServices.getSendOrderAtMiddle();
                setMiddleSendOrders(data4.data);
                const data5 = await ShippmentPointServices.getSendOrderAtSouth();
                setSouthSendOrders(data5.data);
                const data6 = await ShippmentPointServices.getGatheringPoint();
                setGatheringPoint(data6.data);
                const data7 = await ShippmentPointServices.getTransactionPoint();
                setTransactionPoint(data7.data);
                console.log(data.data);
            } catch (error) {
                console.error("Error fetching send orders:", error);
            }
        }

        fetchSendOrders();

        // const fetchReceiveOrders = async () => {
        //     try {
        //         const data = await OrderServices.getCancelledOrder();
        //         setCanceledOrders(data.data);
        //         console.log(data.data);
        //     } catch (error) {
        //         console.error("Error fetching receive orders:", error);
        //     }
        // }

        // fetchReceiveOrders();
    }, []);

    const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

    const northPieChartData = {
        labels: ['North Receive Orders', 'Middle Receive Orders', 'South Receive Orders'],
        datasets: [{
            data: [northReceiveOrders.length, middleReceiveOrders.length, southReceiveOrders.length],
            backgroundColor: [
                '#ffc0cb',
                '#85bdde',
                '#F7F68E',
            ],
        }],
    };

    const middlePieChartData = {
        labels: ['North Send Orders', 'Middle Send Orders', 'South Send Orders'],
        datasets: [{
            data: [northSendOrders.length, middleSendOrders.length, southSendOrders.length],
            backgroundColor: [
                '#F7F68E',
                '#85bdde',
                '#ffc0cb',
            ],
        }],
    };

    const southPieChartData = {
        labels: ['Receive Orders', 'Send Orders'],
        datasets: [{
            data: [southReceiveOrders.length, southSendOrders.length],
            backgroundColor: [
                getRandomColor(),
                getRandomColor(),
            ],
        }],
    };


    return (
        <div className="statistic">
            <div className="d1">
                <div><span> Total Order:</span> <h1>{northReceiveOrders.length + middleReceiveOrders.length + southReceiveOrders.length}</h1></div>
                <div><span> Number Of Gathering Point:</span> <h1>{gatheringPoints.length}</h1></div>
                <div><span> Number Of Transaction Point:</span> <h1>{transactionPoints.length}</h1></div>
            </div>
            <div className="d4">
                <div className="d11">
                    <div style={{ width: '69%', display: 'inline-block' }}>
                        <h2>Receive Order Chart</h2>
                        <Pie data={northPieChartData} />
                    </div>
                </div>
                <div className="d11">
                    <div style={{ width: '69%', display: 'inline-block' }}>
                        <h2>Send Order Chart</h2>
                        <Pie data={middlePieChartData} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ManagerStatistic;
