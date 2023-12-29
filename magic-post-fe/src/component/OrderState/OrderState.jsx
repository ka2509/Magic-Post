import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";
import OrderServices from "../../services/OrderServices";
import { useParams } from "react-router-dom";

/**
 * Renders the OrderState component.
 * This component displays the details of an order, including sender and receiver information, points of origin and destination, and order details.
 * @returns {JSX.Element} The rendered OrderState component.
 */
function OrderState() {
    const { orderId } = useParams();
    const [location, setLocation] = useState({});
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const data = await ShippmentPointServices.getUserLocation();
                setLocation(data.data);
                // console.log(data.data);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };

        fetchLocation();
    }, []);

    useEffect(() => {
        const fetchOrderData = async () => {
            try {
                const data1 = {
                    idOrder: orderId,
                    idPoint: location.idShipments_point + ""
                };
                const data = await OrderServices.getOrderState(data1);
                setOrderData(data.data);
                console.log(data.data);
            } catch (err) {
                console.error("Error fetching order:", err);
            }
        };

        fetchOrderData();
    }, [location]);

    function formatDate(dateString) {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div className="orderState">
            <h1>Order State</h1>
            <table border="1px solid">
                <tr>
                    <td colSpan="2">
                        <div>
                            <h2>Sender</h2>
                            <p>Name: {orderData.sender_name}</p>
                            <p>Address: {orderData.sender_address}</p>
                            <p>Telephone: {orderData.sender_tel}</p>
                            <p>Postal Code: {orderData.sender_pos}</p>
                        </div>
                    </td>
                    <td colSpan={2}>
                        <div>
                            <h2>Receiver</h2>
                            <p>Name: {orderData.receiver_name}</p>
                            <p>Address: {orderData.receiver_address}</p>
                            <p>Telephone: {orderData.receiver_tel}</p>
                            <p>Postal Code: {orderData.receiver_pos}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <h2>From Points:</h2>
                        <p>Name: {orderData.sendPoint_name}</p>
                        <p>Address: {orderData.sendPoint_address}</p>
                    </td>
                    <td colSpan="2">
                        <h2>To Points:</h2>
                        <p>Name: {orderData.receivePoint_name}</p>
                        <p>Address:{orderData.receivePoint_address}</p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="4">
                        <h2>Order Details:</h2>
                        <p>Code: {orderData.idOrder}</p>
                        <p>Sent At: {formatDate(orderData.sentAt)}</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default OrderState;