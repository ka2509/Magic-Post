import React, { useEffect, useState } from "react";
import ShippmentPointServices from "../../services/ShippmentPointServices";
import UserServices from "../../services/UserServices";

function ListLeaderAccount() {
  const [leaderOfGatheringPoint, setLeaderOfGatheringPoint] = useState([]);
  const [getLeaderOfTransactionPoint, setLeaderOfTransactionPoint] = useState(
    []
  );
  const [showLeaderOfGatheringPoint, setShowLeaderOfGatheringPoint] =
    useState(false);

  useEffect(() => {
    // Fetch leader of gathering point
    const fetchLeaderOfGatheringPoint = async () => {
      try {
        const data = await UserServices.getLeaderOfGatheringPoint();
        setLeaderOfGatheringPoint(data.data);
        console.log(data.data);
      } catch (err) {
        console.error("Error fetching district:" + err);
      }
    };
    fetchLeaderOfGatheringPoint();

    // Fetch leader of transaction point
    const fetchLeaderOfTransactionPoint = async () => {
      try {
        const data = await UserServices.getLeaderOfTransactionPoint();
        setLeaderOfTransactionPoint(data.data);
        console.log(data.data);
      } catch (err) {
        console.error("Error fetching district:" + err);
      }
    };
    fetchLeaderOfTransactionPoint();
  }, []);

  const toggleLeaderOfGatheringPoint = () => {
    setShowLeaderOfGatheringPoint(!showLeaderOfGatheringPoint);
  };

  const [showLeaderOfTransactionPoint, setShowLeaderOfTransactionPoint] = useState(false);

  const toggleLeaderOfTransactionPoint = () => {
      setShowLeaderOfTransactionPoint(!showLeaderOfTransactionPoint);
  };
  return (
    <div>
      <h1>List Of Leader Account</h1>
      <button onClick={toggleLeaderOfGatheringPoint}>
        {showLeaderOfGatheringPoint
          ? "Hide Leader Of Gathering Point"
          : "Show Leader Of Gathering Point"}
      </button>
      {showLeaderOfGatheringPoint && (
        <div>
          <h2>Leader Of Gathering Point</h2>
          <div>
            <table>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>DoB</td>
                <td>Work At</td>
              </tr>
              {leaderOfGatheringPoint.map((leader) => (
                <tr id={leader.idUser}>
                  <td>{leader.fullname}</td>
                  <td>{leader.email}</td>
                  <td>{leader.dob}</td>
                  <td>{leader.workSpace}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}

        <div>
            <button onClick={toggleLeaderOfTransactionPoint}>
                {showLeaderOfTransactionPoint
                    ? "Hide Leader Of Transaction Point"
                    : "Show Leader Of Transaction Point"}
            </button>
            {showLeaderOfTransactionPoint && (
                <div>
                    <h2>Leader Of Transaction Point</h2>
                    <div>
                        <table>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>DoB</td>
                                <td>Work At</td>
                            </tr>
                            {getLeaderOfTransactionPoint.map((leader) => (
                                <tr id={leader.idUser}>
                                    <td>{leader.fullname}</td>
                                    <td>{leader.email}</td>
                                    <td>{leader.dob}</td>
                                    <td>{leader.workSpace}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
}

export default ListLeaderAccount;
