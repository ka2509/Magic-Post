import React, { useState } from "react";
import ListPoints from "../../component/ListPoints/ListPoints";
import OrderStatistic from "../../component/OrderStatistic/OrderStatistic";
import Navbar from "../../components/navbar/navbar";
import UserPortrait from "../../components/userInfo/UserPortrait";

function Admin() {
    const [active, setActive] = useState(0);

    const setActiveMode = (active) => setActive(active);

    return (
        <div className="admin">
            <Navbar></Navbar>
            <div className="sidebar">
                <div>

                    <ul>
                        <li
                            className={active === 1 ? 'active' : ''}
                            onClick={() => setActiveMode(1)}
                        >
                            View Shipment Points
                        </li>
                        <li
                            className={active === 2 ? 'active' : ''}
                            onClick={() => setActiveMode(2)}
                        >
                            Manage Leader Account
                        </li>
                        <li
                            className={active === 3 ? 'active' : ''}
                            onClick={() => setActiveMode(3)}
                        >
                            Statistic
                        </li>
                        <UserPortrait></UserPortrait>
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <div className="main-content">
                {active === 0 ? <></> : <></>}
                {active === 1 ? <ListPoints ></ListPoints> : <></>}
                {active === 3 ? <OrderStatistic></OrderStatistic> : <></>}
            </div>
        </div>
    )
}

export default Admin;