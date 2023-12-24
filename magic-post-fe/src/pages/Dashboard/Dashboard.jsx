import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <nav>
                <h1>Order</h1>
                <ul>
                    <li>
                        <Link to="/dashboard/create-order">Create New Order</Link>
                    </li>
                    <li>
                        <Link to="/dashboard/order">Order Management</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <h1>Manager Function</h1>
                <ul>
                    <li>
                        <Link to="/manager">Manager Funtion</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Dashboard;
