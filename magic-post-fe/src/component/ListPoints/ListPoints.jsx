import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";

function ListPoints() {
  const [gatheringPoints, setGatheringPoint] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchGatheringPoint = async () => {
      try {
        const data = await ShippmentPointServices.getGatheringPoint();
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
        <button className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>Gathering Point </button>
        <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>Transaction Point</button>
      </div>
      {
        !activeTab &&
        <div className="tab">
          <div className="dtk">

            {gatheringPoints.map((point) => (
              <div id={point.idShipments_point} className="card">
                <h3>{point.point_name}</h3>
              </div>
            ))}
          </div>
        </div>
      }
      {
        activeTab === 1 &&
        <div className="tab">
          <div className="dgd">
            //loop o day voi div className="card" la tu co css
          </div>
        </div>
      }
    </div>
  );
}

export default ListPoints;
