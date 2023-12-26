import React, { useState } from "react";
import ListPoints from "../../component/ListPoints/ListPoints";
import OrderStatistic from "../../component/OrderStatistic/OrderStatistic";

function Admin() {
    const [active, setActive] = useState(0);

    const setActiveMode = (active) => setActive(active);

    return (
        <div>
            <div>
                <ul>

                </ul>
                <li
                    onClick={() => setActiveMode(1)}
                >
                    View Shipment Points
                </li>
                <li
                    onClick={() => setActiveMode(2)}
                >
                    Manage Leader Account
                </li>
                <li
                    onClick={() => setActiveMode(3)}
                >
                    Statistic
                </li>
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