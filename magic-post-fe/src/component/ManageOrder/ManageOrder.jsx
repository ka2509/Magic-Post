import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";
import ProvinceServices from "../../services/ProvinceServices";
import OrderServices from "../../services/OrderServices";

function ManageOrder() {
    const [location, setLocation] = useState([]);
    const [receiveOrder,setReceiveOrder] = useState([]);
    const [sendOrder,setSendOrder] = useState([]);

    const fetchReceiveOrder = async () => {
        try {
            const data = await OrderServices.getReceiveOrder();
            setReceiveOrder(data.data);
        } catch (err){
            console.error("Error fetching district:"+err )
        }
    }

    const fetchSendOrder = async () => {
        try {
            const data = await OrderServices.getSendOrder();
            setSendOrder(data.data);
        } catch (err){
            console.error("Error fetching district:"+err )
        }
    }
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
                idPoint: location.idShipments_point
            }
            console.log(data)
            await OrderServices.updateOrderStatus(data);
            fetchSendOrder();
            fetchReceiveOrder();
            // await OrderServices.updateOrderStatus(event.target.value);
        } catch (error) {
            console.log(error)
        }
    }

    const setDelivered = async (orderId) => {
        try {
            const data = {
                idOrder: orderId,
                idPoint: location.idShipments_point,
                success: 1
            }
            console.log(data)
            await OrderServices.updateLastPointStatus(data);
            fetchSendOrder();
            fetchReceiveOrder();
            // await OrderServices.updateOrderStatus(event.target.value);
        } catch (error) {
            console.log(error)
        }
    }

    const setSentBack = async (orderId) => {
        try {
            const data = {
                idOrder: orderId,
                idPoint: location.idShipments_point,
                success: 0
            }
            console.log(data)
            await OrderServices.updateLastPointStatus(data);
            fetchSendOrder();
            fetchReceiveOrder();
            // await OrderServices.updateOrderStatus(event.target.value);
        } catch (error) {
            console.log(error)
        }
    }

    
    return (
        <div>
            <h1>Manage Order</h1>
            <div>
                <h2>Receive Order ({receiveOrder.length})</h2>
                {receiveOrder.map((order)  => (
                    <div key={order.idOrder}>
                        <p>{order.idOrder}</p>
                        <label>From</label>
                        <p>{order.sender_name}</p>
                        <p>{order.sender_district}, {order.sender_province}</p>
                        <label>To</label>
                        <p>{order.receiver_name}</p>
                        <p>{order.receiver_district}, {order.receiver_province}</p>
                        {order.statuses.sort((a, b) => a.no - b.no).map((status) => (
                            status.orderStatusKey.point_id === location.idShipments_point ? (
                                <div key={status.id}>
                                    <p>
                                        {(status.state === "den" && status.orderStatusKey.no+1!=order.statuses.length) && <p>Arrived</p>}
                                        {console.log(status.orderStatusKey.no)}
                                        {status.state === "dang_den" && <button onClick={() => updateOrderStatus(order.idOrder)}>Update Order</button>}
                                        {status.state === "chua_den" && <p>Not Arrive Yet</p>}
                                        {status.state === "dang_den_nguoi_nhan" && <div>
                                            <button onClick={() => setDelivered(order.idOrder)}>Delivered</button>   
                                            <button onClick={() => setSentBack(order.idOrder)}>Sent Back</button>
                                        </div>}
                                        {status.state === "tra_ve" && <p>Sent Back</p>}
                                        {status.state === "da_den_nguoi_nhan" && <p>Delivered</p>}
                                    </p>
                                </div>
                            ) : null
                        ))}
                    </div>
                ))}
            </div>
            <div>
                <h2>Send Order ({sendOrder.length})</h2>
                {sendOrder.map((order)  => (    
                    <div key={order.idOrder}>
                        <p>{order.idOrder}</p>
                        <label>From</label>
                        <p>{order.sender_name}</p>
                        <p>{order.sender_district}, {order.sender_province}</p>
                        <label>To</label>
                        <p>{order.receiver_name}</p>
                        <p>{order.receiver_district}, {order.receiver_province}</p>
                        {order.statuses.sort((a, b) => a.no - b.no).map((status) => (
                            status.orderStatusKey.point_id === location.idShipments_point ? (
                                <div key={status.id}>
                                    <p>
                                        {(status.state === "den" && status.orderStatusKey.no+1!=order.statuses.length) && <p>Arrived</p>}
                                        {console.log(status.orderStatusKey.no)}
                                        {status.state === "dang_den" && <button onClick={() => updateOrderStatus(order.idOrder)}>Update Order</button>}
                                        {status.state === "chua_den" && <p>Not Arrive Yet</p>}
                                        {status.state === "dang_den_nguoi_nhan" && <div>
                                            <button onClick={() => setDelivered(order.idOrder)}>Delivered</button>   
                                            <button onClick={() => setSentBack(order.idOrder)}>Sent Back</button>
                                        </div>}
                                        {status.state === "tra_ve" && <p>Sent Back</p>}
                                        {status.state === "da_den_nguoi_nhan" && <p>Delivered</p>}
                                    </p>
                                </div>
                            ) : null
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ManageOrder;