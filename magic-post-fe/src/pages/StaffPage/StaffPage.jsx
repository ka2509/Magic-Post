import React, { useEffect, useState } from "react";
import CreateOrder from "../../component/CreateOrder/CreateOrder";
import ManageOrder from "../../component/ManageOrder/ManageOrder";
import "./StaffPage.css";
import Navbar from "../../components/navbar/navbar";
import OrderStatistic from "../../component/OrderStatistic/OrderStatistic";
import { StatsChartOutline, DocumentTextOutline } from 'react-ionicons';
import UserServices from "../../services/UserServices";
import UserPortrait from "../../components/userInfo/UserPortrait";
import OrderStatisticGat from "../../component/OrderStatisticGat/OrderStatisticGat";

/**
 * Renders the StaffPage component.
 * 
 * @returns {JSX.Element} The StaffPage component.
 */
function StaffPage() {
  const [active, setActive] = useState(2);
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
      <div className="staff">
        <div className="staff-sidebar">
          <button className="newOrderBttn" onClick={() => setActiveMode(1)}>+ New Order</button>
          <ul>
            <li className={active === 2 ? 'active' : ''} onClick={() => setActiveMode(2)}>
              <DocumentTextOutline
                color={'#00000'}
                height="24px"
                width="24px"
              />
              Order Management
            </li>
            <li className={active === 3 ? 'active' : ''} onClick={() => {
              if (user.shipmentsPoints.idShipments_point <= 3) {
                setActiveMode(0);
              } else {
                setActiveMode(3);
              }
            }}>
              <StatsChartOutline
                color={'#00000'}
                height="24px"
                width="24px"
              />
              Order Statistic
            </li>
            <UserPortrait></UserPortrait>
          </ul>
        </div>
        <div className="main-content">
          {active === 0 ? <OrderStatisticGat></OrderStatisticGat> : <></>}
          {active === 1 ? <CreateOrder></CreateOrder> : <></>}
          {active === 2 ? <ManageOrder></ManageOrder> : <></>}
          {active === 3 ? <OrderStatistic></OrderStatistic> : <></>}
        </div>
      </div>
    </>
  );
}

export default StaffPage;
