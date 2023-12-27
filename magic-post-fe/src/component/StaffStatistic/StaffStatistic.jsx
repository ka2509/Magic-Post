import React, { useState, useEffect, useRef } from "react";
import { Chart } from "chart.js";
import OrderServices from "../../services/OrderServices";

function StaffStatistic() {
    const [deliveredOrder, setDeliveredOrder] = useState([]);
    const [cancelledOrder, setCancelledOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const chartRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const deliveredData = await OrderServices.getDeliveredOrder();
                setDeliveredOrder(deliveredData.data);

                const cancelledData = await OrderServices.getCancelledOrder();
                setCancelledOrder(cancelledData.data);

                setLoading(false);
            } catch (err) {
                console.error("Error fetching orders:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    return (
        <div>
            <h1>Staff Statistic</h1>
            <div>
               //draw chart here
            </div>
        </div>
    );
}

export default StaffStatistic;
