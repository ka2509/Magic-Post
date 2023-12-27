import React, { useState } from "react";
import StaffStatistic from "../../component/StaffStatistic/StaffStatistic";
import CreateOrder from "../../component/CreateOrder/CreateOrder";
import ManageOrder from "../../component/ManageOrder/ManageOrder";

function StaffPage() {
  const [active, setActive] = useState(0);

  const setActiveMode = (active) => setActive(active);
  return (
    <div>
      <div>
        <ul></ul>
        <li onClick={() => setActiveMode(1)}>Create New Order</li>
        <li onClick={() => setActiveMode(2)}>Order Management</li>
        <li onClick={() => setActiveMode(3)}>Order Statistic</li>
      </div>
      <div className="main-content">
        {active === 0 ? <></> : <></>}
        {active === 1 ? <CreateOrder></CreateOrder> : <></>}
        {active === 2 ? <ManageOrder></ManageOrder> : <></>}
        {active === 3 ? <StaffStatistic></StaffStatistic> : <></>}
      </div>
    </div>
  );
}

export default StaffPage;
