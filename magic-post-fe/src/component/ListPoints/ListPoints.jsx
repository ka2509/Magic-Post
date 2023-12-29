import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";
import OrderServices from "../../services/OrderServices";
import { Pie } from 'react-chartjs-2';
import Modal from 'react-modal';
import Admin from "../../pages/AdminPage/Admin";

/**
 * Renders a list of gathering points and their details.
 * Allows the user to view statistics for each point in a modal.
 */
function ListPoints() {
  const [gatheringPoints, setGatheringPoint] = useState([]);
  const [transactionPoints, setTransactionPoint] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [north, setNorth] = useState([]);
  const [middle, setMiddle] = useState([]);
  const [south, setSouth] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [sendOrders, setSendOrders] = useState([]);
  const [receiveOrders, setReceiveOrders] = useState([]);
  const [dataPie, setDataPie] = useState({
    labels: ['Send Orders', 'Receive Orders'],
    datasets: [
      {
        data: [50, 50],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  });

  const openModal = async (point) => {
    setSelectedPoint(point);
    await fetchStatisticPoint(point);
    setIsModalOpen(true);
  };

  const fetchStatisticPoint = async (point) => {
    const data = await OrderServices.getSendOrdersByShipPoint(point.point_id);
    setSendOrders(data.data);
    const data1 = await OrderServices.getReceiveOrdersByShipPoint(point.point_id);
    setReceiveOrders(data1.data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setDataPie((prevDataPie) => ({
      ...prevDataPie,
      datasets: [
        {
          ...prevDataPie.datasets[0],
          data: [sendOrders.length, receiveOrders.length],
        },
      ],
    }));
  }, [sendOrders, receiveOrders]);

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
      } catch (err) {
        console.error("Error fetching point:" + err);
      }
    };
    fetchGatheringPoint();
  }, []);

  return (
    <div className="listPoint">
      <div className="tabnav">
        <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
          North Shipment Point
        </button>
        <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
          Middle Shipment Point
        </button>
        <button className={activeTab === 2 ? "active" : ""} onClick={() => setActiveTab(2)}>
          Southen Shipment Point
        </button>
      </div>
      {!activeTab && (
        <div className="tab">
          <div className="dtk">
            {north.map((point) => (
              <div id={point.idShipments_point} className="card">
                <h3>{point.point_name}</h3>
                <p>
                  Address: {point.point_district}, {point.point_province}
                </p>
                <button className="view-details-button" onClick={() => openModal(point)}>
                  View Details
                </button>
                {selectedPoint && (
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Pie Chart Modal"
                    style={{
                      overlay: {
                        backgroundColor: "transparent",
                      },
                      content: {
                        width: "450px",
                        height: "450px",
                        margin: "auto",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #333",
                        borderRadius: "1rem",
                      },
                    }}
                  >
                    <h1>{selectedPoint.point_name}</h1>
                    <div
                      style={{
                        width: "80%",
                        height: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Pie data={dataPie} />
                    </div>
                  </Modal>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 1 && (
        <div className="tab">
          <div className="dgd">
            {middle.map((point) => (
              <div id={point.idShipments_point} className="card">
                <h3>{point.point_name}</h3>
                <p>
                  Address: {point.point_district}, {point.point_province}
                </p>
                <button className="view-details-button" onClick={() => openModal(point)}>
                  View Details
                </button>
                {selectedPoint && (
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Pie Chart Modal"
                    style={{
                      overlay: {
                        backgroundColor: "transparent",
                      },
                      content: {
                        width: "450px",
                        height: "450px",
                        margin: "auto",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #333",
                        borderRadius: "1rem",
                      },
                    }}
                  >
                    <h1>{selectedPoint.point_name}</h1>
                    <div
                      style={{
                        width: "80%",
                        height: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Pie data={dataPie} />
                    </div>
                  </Modal>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="tab">
          <div className="dgd">
            {south.map((point) => (
              <div id={point.idShipments_point} className="card">
                <h3>{point.point_name}</h3>
                <p>
                  Address: {point.point_district}, {point.point_province}
                </p>
                <button className="view-details-button" onClick={() => openModal(point)}>
                  View Details
                </button>
                {selectedPoint && (
                  <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Pie Chart Modal"
                    style={{
                      overlay: {
                        backgroundColor: "transparent",
                      },
                      content: {
                        width: "450px",
                        height: "450px",
                        margin: "auto",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #333",
                        borderRadius: "1rem",
                      },
                    }}
                  >
                    <h1>{selectedPoint.point_name}</h1>
                    <div
                      style={{
                        width: "80%",
                        height: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Pie data={dataPie} />
                    </div>
                  </Modal>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPoints;
