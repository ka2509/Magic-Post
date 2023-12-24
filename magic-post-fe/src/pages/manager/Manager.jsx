import React, { useState } from "react";
import CreateStaffAccount from "../../component/CreateStaffAccount/CreateStaffAccount";

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
                {active === 2 ? <CreateStaffAccount></CreateStaffAccount>:<></>}
            </div>
        </div>
    )
}

export default Manager;