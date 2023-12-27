import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderServices from "../../services/OrderServices";
import "./OrderDetails.css";
function OrderDetails() {
    const { orderId } = useParams();
    const [orderData, setOrderData] = useState({ type: "" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await OrderServices.getOrderById(orderId);
                setOrderData(data.data);
                console.log(data.data);
            } catch (err) {
                console.error("Error fetching order:", err);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div>
                <h1>Magic Post</h1>
                <p>{orderId}</p>
            </div>
            <table border="1px solid">
                <tr>
                    <td colSpan="2">
                        <div>
                            <h2>Sender</h2>
                            <p>Name: {orderData.sender_name}</p>
                            <p>Address: {orderData.sender_district}, {orderData.sender_province}</p>
                            <p>Telephone: {orderData.sender_tel}</p>
                            <p>Postal Code: {orderData.sender_pos}</p>
                        </div>
                    </td>
                    <td colSpan={2}>
                        <div>
                            <h2>Receiver</h2>
                            <p>Name: {orderData.receiver_name}</p>
                            <p>Address: {orderData.receiver_district}, {orderData.receiver_province}</p>
                            <p>Telephone: {orderData.receiver_tel}</p>
                            <p>Postal Code: {orderData.receiver_pos}</p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <h2>Order Type</h2>
                        <input
                            type="checkbox"
                            name="order_type"
                            value="1"
                            checked={orderData.type_order === "documents"}
                        />{" "}
                        Documents
                        <input
                            type="checkbox"
                            name="order_type"
                            value="2"
                            checked={orderData.type_order === "goods"}
                        />{" "}
                        Goods
                    </td>
                    <td>
                        <h2>Fees</h2>
                        <p>Main charge: {orderData.main_charge}</p>
                        <p>Sub-charge: 0</p>
                        <p>GTGT charge: {orderData.gtgt_charge}</p>
                        <p>Others fee: {orderData.other_fees}</p>
                        <p>Total charge (With VAT): {orderData.main_charge+orderData.gtgt_charge+orderData.other_fees}</p>
                    </td>
                    <td>
                        <h2>Weight</h2>
                        <p>Real Weight: {orderData.order_weight}</p>
                        <p>Converted Weight: {orderData.order_weight}</p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <h2>Special Services:</h2>
                        <p>{orderData.special_services}</p>
                        <p>EMSC/PPA Contract Code:</p>
                    </td>
                    <td colSpan="2">
                        <h2>Receiver Charge</h2>
                        <p>COD: {orderData.cod}</p>
                        <p>Others: 0</p>
                        <p>Totals: {orderData.order_weight}</p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="4">
                        <h2>Sender Instruction When Order Got Cancelled</h2>
                        <div>
                            <input
                                type="checkbox"
                                name="order_type"
                                value="1"
                                checked={orderData.order_instruction === "cancel"}
                            />{" "}
                            Cancel
                            <input
                                type="checkbox"
                                name="order_type"
                                value="2"
                                checked={orderData.order_instruction === "send_back_immediately"}
                            />{" "}
                            Send Back Immediately
                            <input
                                type="checkbox"
                                name="order_type"
                                value="2"
                                checked={orderData.order_instruction === "send_back_inday"}
                            />{" "}
                            Send Back Within The Same Day
                            <input
                                    type="checkbox"
                                    name="order_type"
                                    value="2"
                                    checked={orderData.order_instruction === "call_sender"}
                                />{" "}
                            Call The Sender
                            <input
                                type="checkbox"
                                name="order_type"
                                value="2"
                                checked={orderData.order_instruction === "send_back_expired"}
                            /> Send Back When Expired
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <h2>Sender Promise</h2>
                        <p>I  accept the terms on the back of the shipping receipt and certify that this shipment does not contain any prohibited dangerous items. In the event of non-delivery, please follow the instructions; I will pay for the return shipping.</p>
                        <p>Send At: </p>
                        <p>Sender Signature</p>
                    </td>
                    <td colSpan="2">
                        <h2>Accepted Gathering Points</h2>
                        <p>Accepted At: </p>
                        <p>Signature</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default OrderDetails;
