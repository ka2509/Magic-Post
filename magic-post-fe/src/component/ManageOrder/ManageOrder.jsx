import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";
import ProvinceServices from "../../services/ProvinceServices";
import OrderServices from "../../services/OrderServices";

/**
 * Component for managing orders.
 *
 * @component
 * @returns {JSX.Element} ManageOrder component
 */
function ManageOrder() {
    const [activeTab, setActiveTab] = useState(0);

    const [location, setLocation] = useState([]);
    const [receiveOrder, setReceiveOrder] = useState([]);
    const [sendOrder, setSendOrder] = useState([]);

    const fetchReceiveOrder = async () => {
        try {
            const data = await OrderServices.getReceiveOrder();
            setReceiveOrder(data.data);
        } catch (err) {
            console.error("Error fetching district:" + err);
        }
    };

    const fetchSendOrder = async () => {
        try {
            const data = await OrderServices.getSendOrder();
            setSendOrder(data.data);
        } catch (err) {
            console.error("Error fetching district:" + err);
        }
    };

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const data = await ShippmentPointServices.getUserLocation();
                setLocation(data.data);
                console.log(data.data);
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };

        fetchLocation();

        fetchReceiveOrder();

        fetchSendOrder();
        console.log(receiveOrder);
    }, []);

    const updateOrderStatus = async (orderId) => {
        try {
            const data = {
                idOrder: orderId,
                idPoint: location.idShipments_point,
            };
            console.log(data);
            await OrderServices.updateOrderStatus(data);
            fetchSendOrder();
            fetchReceiveOrder();
            window.open("/orderState/" + orderId);
            // await OrderServices.updateOrderStatus(event.target.value);
        } catch (error) {
            console.log(error);
        }
    };
    const updateOrderStatusFinal = async (orderId) => {
        try {
            const data = {
                idOrder: orderId,
                idPoint: location.idShipments_point,
            };
            console.log(data);
            await OrderServices.updateOrderStatus(data);
            fetchSendOrder();
            fetchReceiveOrder();
            // window.open("/orderState/"+orderId)
            // await OrderServices.updateOrderStatus(event.target.value);
        } catch (error) {
            console.log(error);
        }
    };

    const setDelivered = async (orderId) => {
        try {
            const data = {
                idOrder: orderId,
                idPoint: location.idShipments_point,
                success: 1,
            };
            console.log(data);
            await OrderServices.updateLastPointStatus(data);
            fetchSendOrder();
            fetchReceiveOrder();
            // await OrderServices.updateOrderStatus(event.target.value);
        } catch (error) {
            console.log(error);
        }
    };

    const setSentBack = async (orderId) => {
        try {
            const data = {
                idOrder: orderId,
                idPoint: location.idShipments_point,
                success: 0,
            };
            console.log(data);
            await OrderServices.updateLastPointStatus(data);
            fetchSendOrder();
            fetchReceiveOrder();
            // await OrderServices.updateOrderStatus(event.target.value);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="order-manage">
            <h1>OrderManage</h1>
            <div className="tabnav">
                <button
                    className={activeTab === 0 ? "active" : ""}
                    onClick={() => setActiveTab(0)}
                >
                    Receive Order ({receiveOrder.length})
                </button>
                <button
                    className={activeTab === 1 ? "active" : ""}
                    onClick={() => setActiveTab(1)}
                >
                    Send Order ({sendOrder.length})
                </button>
            </div>
            {!activeTab && (
                <div className="tab">
                    {receiveOrder.map((order) => (
                        <div className="ord" key={order.idOrder}>
                            <div className="info">
                                <div className="from">
                                    <label>
                                        Order Code:{" "}
                                        <span
                                            style={{
                                                color: "black",
                                                fontSize: "1.5rem",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {order.idOrder}
                                        </span>
                                    </label>
                                    <br></br>
                                    <label>From: </label>
                                    <span style={{ color: "black", fontSize: "1.2rem" }}>
                                        {order.sender_name},{" "}
                                    </span>
                                    <span style={{ color: "black", fontSize: "1.2rem" }}>
                                        {order.sender_district}, {order.sender_province}
                                    </span>
                                </div>
                                <div className="to">
                                    <label>To: </label>
                                    <span style={{ color: "black", fontSize: "1.2rem" }}>
                                        {order.receiver_name},{" "}
                                    </span>
                                    <span style={{ color: "black", fontSize: "1.2rem" }}>
                                        {order.receiver_district}, {order.receiver_province}
                                    </span>
                                </div>
                            </div>
                            {/* <div className="stateBttn">
                                                                <button>Print Order</button>
                                                                <button>Arrived Confirm</button>
                                                                <button>Arrived</button>
                                                        </div> */}
                            <div className="stateBttn">
                                <button onClick={() => window.open("/order/" + order.idOrder)}>
                                    Print Order
                                </button>
                                {order.statuses
                                    .sort((a, b) => a.no - b.no)
                                    .map((status) =>
                                        status.orderStatusKey.point_id === location.idShipments_point ? (
                                            <>
                                                {status.state === "den" &&
                                                    status.orderStatusKey.no + 1 !==
                                                        order.statuses.length && (
                                                        <button
                                                            onClick={() =>
                                                                window.open("/orderState/" + order.idOrder)
                                                            }
                                                        >
                                                            Arrived
                                                        </button>
                                                    )}
                                                {console.log(status.orderStatusKey.no)}
                                                {status.state === "dang_den" &&
                                                    status.orderStatusKey.no + 1 !==
                                                        order.statuses.length && (
                                                        <button
                                                            onClick={() => updateOrderStatus(order.idOrder)}
                                                        >
                                                            Arrived Confirm
                                                        </button>
                                                    )}
                                                {status.state === "dang_den" &&
                                                    status.orderStatusKey.no + 1 ===
                                                        order.statuses.length && (
                                                        <button
                                                            onClick={() =>
                                                                updateOrderStatusFinal(order.idOrder)
                                                            }
                                                        >
                                                            Arrived Confirm
                                                        </button>
                                                    )}
                                                {status.state === "chua_den" && (
                                                    <button>Not Arrive Yet</button>
                                                )}
                                                {status.state === "dang_den_nguoi_nhan" && (
                                                    <>
                                                        <button
                                                            onClick={() => setDelivered(order.idOrder)}
                                                        >
                                                            Delivered
                                                        </button>
                                                        <button
                                                            onClick={() => setSentBack(order.idOrder)}
                                                        >
                                                            Sent Back
                                                        </button>
                                                    </>
                                                )}
                                                {status.state === "tra_ve" && (
                                                    <button>Sent Back</button>
                                                )}
                                                {status.state === "da_den_nguoi_nhan" && (
                                                    <button>Delivered</button>
                                                )}
                                            </>
                                        ) : null
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {activeTab === 1 && (
                <div className="tab">
                    {sendOrder.map((order) => (
                        <div className="ord" key={order.idOrder}>
                            <div className="info">
                                <label>
                                    Order Code:
                                    <span
                                        style={{
                                            color: "black",
                                            fontSize: "1.5rem",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {order.idOrder}
                                    </span>
                                </label>
                                <br></br>
                                <label>From: </label>
                                <span style={{ color: "black", fontSize: "1.2rem" }}>
                                    {order.sender_name},{" "}
                                </span>
                                <span style={{ color: "black", fontSize: "1.2rem" }}>
                                    {order.sender_district}, {order.sender_province}
                                </span>
                                <br></br>
                                <label>To: </label>
                                <span style={{ color: "black", fontSize: "1.2rem" }}>
                                    {order.receiver_name},{" "}
                                </span>
                                <span style={{ color: "black", fontSize: "1.2rem" }}>
                                    {order.receiver_district}, {order.receiver_province}
                                </span>
                            </div>
                            <div className="stateBttn">
                                <button onClick={() => window.open("/order/" + order.idOrder)}>
                                    Print Order
                                </button>
                                {order.statuses
                                    .sort((a, b) => a.no - b.no)
                                    .map((status) =>
                                        status.orderStatusKey.point_id === location.idShipments_point ? (
                                            <>
                                                {status.state === "den" && (
                                                    <button
                                                        onClick={() =>
                                                            window.open("/orderState/" + order.idOrder)
                                                        }
                                                    >
                                                        Arrived
                                                    </button>
                                                )}
                                                {console.log(status.orderStatusKey.no)}
                                                {status.state === "dang_den" && (
                                                    <button
                                                        onClick={() => updateOrderStatus(order.idOrder)}
                                                    >
                                                        Arrived Confirm
                                                    </button>
                                                )}
                                                {status.state === "chua_den" && (
                                                    <button>Not Arrive Yet</button>
                                                )}
                                                {status.state === "dang_den_nguoi_nhan" && (
                                                    <div>
                                                        <button
                                                            onClick={() => setDelivered(order.idOrder)}
                                                        >
                                                            Delivered
                                                        </button>
                                                        <button
                                                            onClick={() => setSentBack(order.idOrder)}
                                                        >
                                                            Sent Back
                                                        </button>
                                                    </div>
                                                )}
                                                {status.state === "tra_ve" && (
                                                    <button>Sent Back</button>
                                                )}
                                                {status.state === "da_den_nguoi_nhan" && (
                                                    <button>Delivered</button>
                                                )}
                                            </>
                                        ) : null
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ManageOrder;