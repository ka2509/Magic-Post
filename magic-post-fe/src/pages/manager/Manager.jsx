import React, { useEffect, useState } from "react";
import CreateStaffAccount from "../../component/CreateStaffAccount/CreateStaffAccount";
import OrderStatistic from "../../component/OrderStatistic/OrderStatistic";
import ListStaff from "../../component/ListStaff/ListStaff";
import Navbar from "../../components/navbar/navbar";
import UserPortrait from "../../components/userInfo/UserPortrait";
import UserServices from '../../services/UserServices';
import { StatsChartOutline, DocumentTextOutline, AccessibilityOutline } from 'react-ionicons'
import OrderStatisticGat from "../../component/OrderStatisticGat/OrderStatisticGat";

/**
 * Renders the Manager component.
 * 
 * @returns {JSX.Element} The rendered Manager component.
 */
function Manager() {
    const [active, setActive] = useState(3);
    const [user, setUser] = useState({});

    useEffect(() => {
        const getUser = async () => {
            const response = await UserServices.getCurrentUser();
            setUser(response.data);
        }
        getUser();
    }, []);

    const setActiveMode = (active) => setActive(active);

    return (
        <>
            <Navbar></Navbar>
            <div className="leader">
                <div className="sidebar">
                    <ul>
                        <li
                            className={active === 1 ? 'active' : ''}
                            onClick={() => {
                                if (user.shipmentsPoints.idShipments_point <= 3) {
                                    setActiveMode(0);
                                } else {
                                    setActiveMode(1);
                                }
                            }}
                        >
                            <StatsChartOutline
                                color={'#00000'}
                                height="24px"
                                width="24px"
                            />
                            Order Statistic
                        </li>
                        <li
                            className={active === 2 ? 'active' : ''}
                            onClick={() => setActiveMode(2)}
                        >
                            <AccessibilityOutline
                                color={'#00000'}
                                height="24px"
                                width="24px"
                            />
                            Create New Staff Account
                        </li>
                        <li
                            className={active === 3 ? 'active' : ''}
                            onClick={() => setActiveMode(3)}
                        >
                            <DocumentTextOutline
                                color={'#00000'}
                                height="24px"
                                width="24px"
                            />
                            Manage Staff Account
                        </li>
                        <UserPortrait></UserPortrait>
                    </ul>
                </div>
                <div className="main-content">
                    {active === 0 ? <OrderStatisticGat></OrderStatisticGat> : <></>}
                    {active === 1 ? <OrderStatistic></OrderStatistic> : <></>}
                    {active === 2 ? <CreateStaffAccount></CreateStaffAccount> : <></>}
                    {active === 3 ? <ListStaff></ListStaff> : <></>}
                </div>
            </div>
        </>
    )
}

export default Manager;