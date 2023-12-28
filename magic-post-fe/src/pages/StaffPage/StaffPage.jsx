import React, { useState } from "react";
import StaffStatistic from "../../component/StaffStatistic/StaffStatistic";
import CreateOrder from "../../component/CreateOrder/CreateOrder";
import ManageOrder from "../../component/ManageOrder/ManageOrder";
import "./StaffPage.css"
import Navbar from "../../components/navbar/navbar";
import OrderStatistic from "../../component/OrderStatistic/OrderStatistic";

import UserPortrait from "../../components/userInfo/UserPortrait";

function StaffPage() {
  const [active, setActive] = useState(2);

  const setActiveMode = (active) => setActive(active);
  return (
    <>
      <Navbar></Navbar>
      <div className="staff">
        <div className="staff-sidebar">
          <button className="newOrderBttn" onClick={() => setActiveMode(1)}>+ New Order</button>
          <ul>
            <li className={active === 2 ? 'active' : ''} onClick={() => setActiveMode(2)}>Order Management</li>
            <li className={active === 3 ? 'active' : ''} onClick={() => setActiveMode(3)}>Order Statistic</li>
            <UserPortrait></UserPortrait>

          </ul>
        </div>
        <div className="main-content">
          {active === 0 ? <></> : <></>}
          {active === 1 ? <CreateOrder></CreateOrder> : <></>}
          {active === 2 ? <ManageOrder></ManageOrder> : <></>}
          {active === 3 ? <OrderStatistic></OrderStatistic> : <></>}
        </div>
      </div>
    </>
  );
}

export default StaffPage;
