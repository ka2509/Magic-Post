import React, { useState } from "react";
import { useParams } from "react-router-dom";

function OrderDetails() {
    const { orderId } = useParams();
    const [orderData, setOrderData] = useState({ type: "" });

    const handleTypeChange = (event) => {
        setOrderData({ ...orderData, type: event.target.value });
    };

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
                            <p>Name</p>
                            <p>Address</p>
                            <p>Tel</p>
                            <p>Postal Code:</p>
                        </div>
                    </td>
                    <td colSpan={2}>
                        <div>
                            <h2>Receiver</h2>
                            <p>Name</p>
                            <p>Address</p>
                            <p>Tel</p>
                            <p>Postal Code:</p>
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
                            checked={orderData.type === "documents"}
                            onChange={handleTypeChange}
                        />{" "}
                        Documents
                        <input
                            type="checkbox"
                            name="order_type"
                            value="2"
                            checked={orderData.type === "goods"}
                            onChange={handleTypeChange}
                        />{" "}
                        Goods
                    </td>
                    <td>
                        <h2>Fees</h2>
                        <p>Main charge: </p>
                        <p>Sub-charge: </p>
                        <p>GTGT fee: </p>
                        <p>Others fee: </p>
                        <p>Total charge (With VAT): </p>
                    </td>
                    <td>
                        <h2>Weight</h2>
                        <p>Real Weight: </p>
                        <p>Converted Weight: </p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <h2>Special Services:</h2>
                        <p></p>
                        <p>EMSC/PPA Contract Code</p>
                    </td>
                    <td colSpan="2">
                        <h2>Receiver Charge</h2>
                        <p>COD: </p>
                        <p>Others: </p>
                        <p>Totals: </p>
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
                                checked={orderData.typeOrder === "cancel"}
                                onChange={handleTypeChange}
                            />{" "}
                            Cancel
                            <input
                                type="checkbox"
                                name="order_type"
                                value="2"
                                checked={orderData.typeOrder === "send_back_immediately"}
                                onChange={handleTypeChange}
                            />{" "}
                            Send Back Immediately
                            <input
                                type="checkbox"
                                name="order_type"
                                value="2"
                                checked={orderData.typeOrder === "send_back_inday"}
                                onChange={handleTypeChange}
                            />{" "}
                            Send Back Within The Same Day
                            <input
                                    type="checkbox"
                                    name="order_type"
                                    value="2"
                                    checked={orderData.typeOrder === "call_sender"}
                                    onChange={handleTypeChange}
                                />{" "}
                            Call The Sender
                            <input
                                type="checkbox"
                                name="order_type"
                                value="2"
                                checked={orderData.typeOrder === "send_back_expired"}
                                onChange={handleTypeChange}
                            /> Send Back When Expired
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <h2>Sender Promise</h2>
                        <p>I  accept the terms on the back of the shipping receipt and certify that this shipment does not contain any prohibited dangerous items. In the event of non-delivery, please follow the instructions; I will pay for the return shipping.</p>
                        <p>Send At:</p>
                        <p>Sender Signature</p>
                    </td>
                    <td colSpan="2">
                        <h2>Accepted Gathering Points</h2>
                        <p>Accepted At:</p>
                        <p>Signature</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default OrderDetails;
