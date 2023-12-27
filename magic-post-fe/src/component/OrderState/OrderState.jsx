import React from "react";

function OrderState() {
    return (
        <div>
            <h1>Order State</h1>
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
                        <h2>From Points:</h2>
                        <p>Name:</p>
                        <p>Code:</p>
                    </td>
                    <td colSpan="2">
                        <h2>To Points:</h2>
                        <p>Name:</p>
                        <p>Code:</p>
                    </td>
                </tr>
                <tr>
                    <td colSpan="4">
                        <h2>Order Details:</h2>
                        <p>Code: </p>
                        <p>Sent At:</p>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default OrderState;