import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

import CreateOrder from "../../component/CreateOrder/CreateOrder";
import ManageOrder from "../../component/ManageOrder/ManageOrder";
import "./Dashboard.css"

function Dashboard() {
    const [active, setActive] = useState(0);
    const setActiveMode = (active) => setActive(active);

    return (
        <div className="dashboard">
            <Navbar></Navbar>
            <div className="sideBar">
                <nav>
                    <h1>Order</h1>
                    <ul>
                        <li onClick={() => setActiveMode(1)}>
                            {/* <Link to="/dashboard/create-order">Create New Order</Link> */}
                            create order
                        </li>
                        <li onClick={() => setActiveMode(2)}>
                            {/* <Link to="/dashboard/order">Order Management</Link> */}
                            order management
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h1>Leader Function</h1>
                    <ul>
                        <li>
                            <Link to="/leader">Leader Funtion</Link>
                        </li>
                    </ul>

                </nav>
                <nav>
                    <h1>Manager Function</h1>
                    <ul>
                        <li>
                            <Link to="/manager">Manager Function</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="main-content">
                {active === 0 ? <></> : <></>}
                {active === 1 ? <CreateOrder></CreateOrder> : <></>}
                {active === 2 ? <ManageOrder></ManageOrder> : <></>}
            </div>
        </div>
    );
}

export default Dashboard;
