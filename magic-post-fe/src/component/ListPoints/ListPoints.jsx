import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";

function ListPoints() {
  const [gatheringPoints, setGatheringPoint] = useState([]);

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
    <div>
      <div>
        <h1>List Of Gathering Point</h1>
        <table>
          <tr>
            <td>Name</td>
          </tr>
          {gatheringPoints.map((point) => (
            <tr id={point.idShipments_point}>
              <td>{point.point_name}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <h1>List Of Transaction Point</h1>
      </div>
    </div>
  );
}

export default ListPoints;
