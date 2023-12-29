import React, { useState } from "react";
import OrderServices from "../../services/OrderServices";
import { PersonOutline, LocationOutline, DocumentTextOutline } from 'react-ionicons';
import "./viewOrder.css";
import orderBG from "../../assets/food-delivery-green-poster-oi97lp6ogs4prjzx.jpg";

/**
 * Renders the ViewOrder component.
 * This component allows users to look up an order by entering an order ID.
 * If the order is found, it displays the order details.
 * @returns {JSX.Element} The ViewOrder component.
 */
function ViewOrder() {
    const [orderId, setOrderId] = useState("");
    const [viewOrder, setViewOrder] = useState(false);
    const [orderInformation, setOrderInformation] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await OrderServices.getOrder(orderId);
            setOrderInformation(response.data);
            console.log(orderInformation);
            setViewOrder(orderInformation !== null);
        } catch (error) {
            setViewOrder(false);
            console.log(error);
        }
    };

    return (
        <div className="viewOrder">
            <div className="viewOrder--bg">
                <div className="darken"></div>
                <img src={orderBG} alt="Order Background" />
            </div>
            <div className="inputSection">
                <h1>Magic Post</h1>
                <h2>Look up your order</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="orderId"
                        required
                        onChange={(event) => setOrderId(event.target.value)}
                    />
                    <button className="button" type="submit" value="search">
                        Search
                    </button>
                </form>
                {viewOrder ? (
                    <div className="orderDetails">
                        <div className="left">
                            <div>
                                <h3>
                                    OrderId:{" "}
                                    <span style={{ color: "black" }}>
                                        {orderInformation.idOrder}
                                    </span>
                                </h3>
                                <h4>Sender:</h4>
                                <div className="sr-info">
                                    <PersonOutline
                                        color={"#00000"}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Name: {orderInformation.sender_name}</span>
                                </div>
                                <div className="sr-info">
                                    <LocationOutline
                                        color={"#00000"}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>
                                        Address: {orderInformation.sender_district},{" "}
                                        {orderInformation.sender_province}
                                    </span>
                                </div>
                                <div className="sr-info">
                                    <DocumentTextOutline
                                        color={"#00000"}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Phone Number: {orderInformation.sender_tel}</span>
                                </div>
                            </div>
                            <div>
                                <h4>Receiver:</h4>
                                <div className="sr-info">
                                    <PersonOutline
                                        color={"#00000"}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Name: {orderInformation.receiver_name}</span>
                                </div>
                                <div className="sr-info">
                                    <LocationOutline
                                        color={"#00000"}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>
                                        Address: {orderInformation.receiver_district},{" "}
                                        {orderInformation.receiver_province}
                                    </span>
                                </div>
                                <div className="sr-info">
                                    <DocumentTextOutline
                                        color={"#00000"}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Phone Number: {orderInformation.receiver_tel}</span>
                                </div>
                            </div>
                        </div>
                        <div className="mid1">
                            <h3>Status:</h3>
                            <ul>
                                {orderInformation.statuses
                                    .sort((a, b) => a.orderStatusKey.no - b.orderStatusKey.no)
                                    .map((status) => (
                                        <>
                                            {status.orderStatusKey.no + 1 !==
                                                orderInformation.statuses.length && (
                                                <li key={status.no}>
                                                    {status.shipmentsPoints.point_name}
                                                    {status.state === "den" && <p>Arrived</p>}
                                                    {status.state === "dang_den" && <p>Transporting</p>}
                                                    {status.state === "chua_den" && (
                                                        <p>Not Arrive Yet</p>
                                                    )}
                                                    {status.state === "dang_den_nguoi_nhan" && (
                                                        <p>Delivering</p>
                                                    )}
                                                    {status.state === "da_den_nguoi_nhan" && (
                                                        <p>Delivered</p>
                                                    )}
                                                    {status.state === "tra_ve" && <p>Cancelled</p>}
                                                </li>
                                            )}
                                        </>
                                    ))}
                            </ul>
                        </div>
                        <div className="mid2">
                            <h3>Receive Date: {orderInformation.receive_date}</h3>
                            <h4>Type Order: {orderInformation.type_order}</h4>
                            <h4>Order Instruction: {orderInformation.order_instruction}</h4>
                            <h4>Business Note: {orderInformation.business_note}</h4>
                            <h4>Special Services: {orderInformation.special_services}</h4>
                        </div>
                        <div className="righ">
                            <h3>Bill:</h3>
                            <h4>Weight: {orderInformation.order_weight}</h4>
                            <h4>Main Charge: {orderInformation.main_charge}</h4>
                            <h4>Extra Charge: {orderInformation.extra_charge}</h4>
                            <h4>Other Fees: {orderInformation.other_fees}</h4>
                            <h4>COD: {orderInformation.cod}</h4>
                            <h4>GTGT Charge: {orderInformation.gtgt_charge}</h4>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default ViewOrder;