import React, { useState } from "react";
import CreateStaffAccount from "../../component/CreateStaffAccount/CreateStaffAccount";
import OrderStatistic from "../../component/OrderStatistic/OrderStatistic";
import ListStaff from "../../component/ListStaff/ListStaff";

function Manager(){
    const [active, setActive] = useState(0);

    const setActiveMode = (active) => setActive(active);

    return(
        <div>
            <div>
                <ul>
                    
                </ul>
                <li
                    onClick={() => setActiveMode(1)}
                >
                    Manage Order
                </li>
                <li
                    onClick={() => setActiveMode(2)}
                >
                    Create New Staff Account
                </li>
                <li
                    onClick={()=> setActiveMode(3)}
                >
                    Manage Staff Account
                </li>
            </div>
            <div className="main-content">
                {active === 0 ? <></>:<></>}
                {active === 1 ? <OrderStatistic></OrderStatistic>:<></>}
                {active === 2 ? <CreateStaffAccount></CreateStaffAccount>:<></>}
                {active === 3 ? <ListStaff></ListStaff>:<></>}
            </div>
        </div>
    )
}

export default Manager;