import React, { useState } from "react";
import OrderServices from "../../services/OrderServices";
import { PersonOutline, LocationOutline, DocumentTextOutline } from 'react-ionicons'
// import Navbar from "../../components/navbar/navbar";
import "./viewOrder.css"
import orderBG from "../../assets/food-delivery-green-poster-oi97lp6ogs4prjzx.jpg"


function ViewOrder() {
    const [orderId, setOrderId] = useState("")
    const [viewOrder, setViewOrder] = useState(false)
    const [orderInformation, setOrderInformation] = useState(null)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setOrderInformation((await OrderServices.getOrder(orderId)).data)
            console.log(orderInformation)
            if (orderInformation != null) {
                setViewOrder(true)
            } else {
                setViewOrder(false)
            }
        } catch (error) {
            setViewOrder(false)
            console.log(error)
        }
    }

    return (
        <div className="viewOrder">
            <div className="viewOrder--bg">
                <div className="darken"></div>
                <img src={orderBG}></img>
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
                    >
                    </input>
                    <button className="button" type="submit" value="seacrh">Search</button>
                </form>
                {viewOrder ?
                    <div className="orderDetails">
                        <div className="left">
                            <div>
                                <h3>OrderId: <span style={{ color: "black" }}>{orderInformation.idOrder}</span></h3>
                                <h4>Sender:</h4>
                                <div className="sr-info">
                                    <PersonOutline
                                        color={'#00000'}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Name: {orderInformation.sender_name}</span>
                                </div>
                                <div className="sr-info">
                                    <LocationOutline
                                        color={'#00000'}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Address: {orderInformation.sender_district}, {orderInformation.sender_province}</span>
                                </div>
                                <div className="sr-info">
                                    <DocumentTextOutline
                                        color={'#00000'}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Phone Nummber: {orderInformation.sender_tel}</span>
                                </div>
                            </div>
                            <div>
                                <h4>Receiver:</h4>
                                <div className="sr-info">
                                    <PersonOutline
                                        color={'#00000'}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Name: {orderInformation.receiver_name}</span>
                                </div>
                                <div className="sr-info">
                                    <LocationOutline
                                        color={'#00000'}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Address: {orderInformation.receiver_district}, {orderInformation.receiver_province}</span>
                                </div>
                                <div className="sr-info">
                                    <DocumentTextOutline
                                        color={'#00000'}
                                        height="25px"
                                        width="25px"
                                    />
                                    <span>Phone Nummber: {orderInformation.receiver_tel}</span>
                                </div>

                            </div>
                            <div>
<<<<<<< HEAD

=======
                                <h2>Order Status</h2>
>>>>>>> ef64126 (mpfe)
                                {orderInformation.statuses.sort((a, b) => a.no - b.no).map((status) => (
                                    <div id={status.no}>
                                        <p>
                                            {status.shipmentsPoints.point_name}
                                        </p>
                                        <p>
                                            {status.state === "den" && <p>Arrived</p>}
                                            {status.state === "dang_den" && <p>Transporting</p>}
                                            {status.state === "chua_den" && <p>Not Arrive Yet</p>}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mid1">
<<<<<<< HEAD
                            <h2>Order Status</h2>
=======
                            <h2>mid</h2>
>>>>>>> ef64126 (mpfe)
                        </div>
                        <div className="mid2">
                            <h3>receive_date: {orderInformation.receive_date}</h3>
                            <h4>type_order: {orderInformation.type_order}</h4>
                            <h4>Weight: {orderInformation.order_weight}</h4>
                            <h4>order_instruction: {orderInformation.order_instruction}</h4>
                            <h4>business_note: {orderInformation.business_note}</h4>
                        </div>
                        <div className="righ">
                            <h4>main_charge: {orderInformation.main_charge}</h4>
                            <h4>extra_charge: {orderInformation.extra_charge}</h4>
                            <h4>other_fees: {orderInformation.other_fees}</h4>
                            <h4>cod: {orderInformation.cod}</h4>
                        </div>


                    </div> :
                    <div></div>}
            </div>
        </div >
    )

}

export default ViewOrder;