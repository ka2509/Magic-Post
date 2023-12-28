import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";

function ListPoints() {
  const [gatheringPoints, setGatheringPoint] = useState([]);
  const [transactionPoints, setTransactionPoint] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [north, setNorth] = useState([]);
  const [middle, setMiddle] = useState([]);
  const [south, setSouth] = useState([]);
  useEffect(() => {
    const fetchGatheringPoint = async () => {
      try {
        const data = await ShippmentPointServices.getGatheringPoint();
        const data1 = await ShippmentPointServices.getNorthShipmentPoint();
        setNorth(data1.data);
        const data2 = await ShippmentPointServices.getMiddleShipmentPoint();
        setMiddle(data2.data);
        const data3 = await ShippmentPointServices.getSouthShipmentPoint();
        setSouth(data3.data);
        setGatheringPoint(data.data);
        console.log(gatheringPoints);
      } catch (err) {
        console.error("Error fetching staff:" + err);
      }
    };

    fetchGatheringPoint();
  }, []);
  return (
    <div className="listPoint">
      <div className="tabnav">
        <button className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>North Shipment Point </button>
        <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>Middle Shipment Point</button>
        <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>Southen Shipment Point</button>
      </div>
      {
        !activeTab &&
        <div className="tab">
          <div className="dtk">

            {north.map((point) => (
              <div id={point.idShipments_point} className="card">
                <h3>{point.point_name}</h3>
                <p>Address: {point.point_district}, {point.point_province}</p>
              </div>
            ))}
          </div>
        </div>
      }
      {
        activeTab === 1 &&
        <div className="tab">
          <div className="dgd">
            {middle.map((point) => (
              <div id={point.idShipments_point} className="card">
                <h3>{point.point_name}</h3>
                <p>Address: {point.point_district}, {point.point_province}</p>
              </div>
            ))}
          </div>
        </div>
      }
      {
        activeTab === 2 &&
        <div className="tab">
          <div className="dgd">
            {south.map((point) => (
              <div id={point.idShipments_point} className="card">
                <h3>{point.point_name}</h3>
                <p>Address: {point.point_district}, {point.point_province}</p>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
}

export default ListPoints;
