import React, { useState } from "react";
import ListPoints from "../../component/ListPoints/ListPoints";
import OrderStatistic from "../../component/OrderStatistic/OrderStatistic";
import Navbar from "../../components/navbar/navbar";
import UserPortrait from "../../components/userInfo/UserPortrait";
import ListLeaderAccount from "../../component/ListLeaderAccount/ListLeaderAccount";
import ManagerStatistic from "../../component/StaffStatistic/StaffStatistic";
import { StatsChartOutline, LocationOutline, PeopleCircleOutline } from 'react-ionicons';

/**
 * Renders the Admin page component.
 *
 * @returns {JSX.Element} The rendered Admin page component.
 */
function Admin() {
    const [active, setActive] = useState(2);

    const setActiveMode = (active) => setActive(active);

    return (
        <div className="admin">
            <Navbar></Navbar>
            <div className="sidebar">
                <div>
                    <ul>
                        <li
                            className={active === 2 ? 'active' : ''}
                            onClick={() => setActiveMode(2)}
                        >
                            <PeopleCircleOutline
                                color={'#00000'}
                                height="24px"
                                width="24px"
                            />
                            <span> Manage Leader Account</span>
                        </li>
                        <li
                            className={active === 1 ? 'active' : ''}
                            onClick={() => setActiveMode(1)}
                        >
                            <LocationOutline
                                color={'#00000'}
                                height="24px"
                                width="24px"
                            />
                            <span> View Shipment Points</span>
                        </li>
                        <li
                            className={active === 3 ? 'active' : ''}
                            onClick={() => setActiveMode(3)}
                        >
                            <StatsChartOutline
                                color={'#00000'}
                                height="24px"
                                width="24px"
                            />
                            <span>Statistic</span>
                        </li>
                        <UserPortrait></UserPortrait>
                    </ul>
                </div>
                <div></div>
            </div>
            <div className="main-content">
                {active === 0 ? <></> : <></>}
                {active === 1 ? <ListPoints></ListPoints> : <></>}
                {active === 2 ? <ListLeaderAccount></ListLeaderAccount> : <></>}
                {active === 3 ? <ManagerStatistic></ManagerStatistic> : <></>}
            </div>
        </div>
    );
}

export default Admin;