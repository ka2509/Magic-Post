import React, { useState } from "react";
import OrderServices from "../../services/OrderServices";
function ViewOrder(){
    const [orderId, setOrderId] = useState("")
    const [viewOrder,setViewOrder] = useState(false)
    const [orderInformation,setOrderInformation] = useState(null)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            setOrderInformation((await OrderServices.getOrder(orderId)).data)
            console.log(orderInformation)
            if(orderInformation!=null){
                setViewOrder(true)
            }else{
                setViewOrder(false)
            }
        } catch (error) {
            setViewOrder(false)
            console.log(error)
        }
    }

    return (
        <div>
            <h1>View Order</h1>
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
            <div>
                <h1>Order Details</h1>
                <div>
                    <h2>Sender:</h2>
                    <p>Name: {orderInformation.sender_name}</p>
                    <p>Address: {orderInformation.sender_district}, {orderInformation.sender_province}</p>
                    <p>Phone Nummber: {orderInformation.sender_tel}</p>
                </div>
                <div>
                    <h2>Receiver:</h2>
                    <p>Name: {orderInformation.receiver_name}</p>
                    <p>Address: {orderInformation.receiver_district}, {orderInformation.receiver_province}</p>
                    <p>Phone Nummber: {orderInformation.receiver_tel}</p>
                </div>
            </div>:
            <div></div>}
        </div>
    )
    
}

export default ViewOrder;