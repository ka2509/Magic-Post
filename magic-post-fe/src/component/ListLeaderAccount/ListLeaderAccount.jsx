import React, { useEffect, useState } from "react";
import UserServices from "../../services/UserServices";
import Modal from 'react-modal';
import ManagerServices from "../../services/ManagerServices";

function ListLeaderAccount() {
  const [activeTab, setActiveTab] = useState(0);
  const [leaderOfGatheringPoint, setLeaderOfGatheringPoint] = useState([]);
  const [LeaderOfTransactionPoint, setLeaderOfTransactionPoint] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [leaderUpdate, setLeaderUpdate] = useState({});
  const [birthday, setBirthday] = useState("");
  useEffect(() => {
    // Fetch leader of gathering point
    const fetchLeaderOfGatheringPoint = async () => {
      try {
        const data = await UserServices.getLeaderOfGatheringPoint();
        setLeaderOfGatheringPoint(data.data);
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



  const handleActive = async (idUser) => {
    try {
      await UserServices.activeUser(idUser);
      window.location.reload();
    } catch (err) {
      console.error("Error active user:" + err);
    }
  };

  const handleUnactive = async (idUser) => {
    try {
      await UserServices.unactiveUser(idUser);
      window.location.reload();
    } catch (err) {
      console.error("Error unactive user:" + err);
    }
  };

  const handleUpdate = (leader) => {
    setLeaderUpdate(leader);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const leaderInfo = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      birthday: birthday,
    };
    try {
      ManagerServices.updateLeader(leaderUpdate.idUser, leaderInfo);
    } catch (err) {
      console.error("Error update leader:" + err);
    }
    setShowModal(false);
    window.location.reload();
  };
  function formatDate(dateString) {
    if(dateString != null) {    
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    } else {
        return "";
    }
}
  return (
    <div className="listleader">
      <div className="tabnav">
        <button className={activeTab === 0 ? "active" : ""} onClick={() => setActiveTab(0)}>
          Leader Of Transaction Point
        </button>
        <button className={activeTab === 1 ? "active" : ""} onClick={() => setActiveTab(1)}>
          Leader Of Gathering Point
        </button>
      </div>
      {activeTab === 1 && (
        <div className="tab">
          <div>
            <table>
              <tr>
                <td>Name</td>
                <td>Email</td>
                <td>DoB</td>
                <td>Work At</td>
                <td>Action</td>
              </tr>
              {leaderOfGatheringPoint.map((leader) => (
                <tr id={leader.idUser}>
                  <td>{leader.fullname}</td>
                  <td>{leader.email}</td>
                  <td>{leader.dob}</td>
                  <td>{leader.workSpace}</td>
                  <td>
                    {leader.isVerified ? (
                      <>
                        <button className="action-butt" onClick={() => handleUnactive(leader.idUser)}>
                          Unactive
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="action-activate-butt" onClick={() => handleActive(leader.idUser)}>
                          Active
                        </button>
                        <button className="action-activate-butt" onClick={() => handleUpdate(leader)}>
                          Update
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}

      <div>
        {!activeTab && (
          <div className="tab">
            <div>
              <table>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>DoB</td>
                  <td>Work At</td>
                  <td>Action</td>
                </tr>
                {LeaderOfTransactionPoint.map((leader) => (
                  <tr id={leader.idUser}>
                    <td>{leader.fullname}</td>
                    <td>{leader.email}</td>
                    <td>{formatDate(leader.dob)}</td>
                    <td>{leader.workSpace}</td>
                    <td>
                      {leader.isVerified ? (
                        <>
                          <button className="action-butt" onClick={() => handleUnactive(leader.idUser)}>
                            Unactive
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="action-activate-butt" onClick={() => handleActive(leader.idUser)}>
                            Active
                          </button>
                          <button className="action-activate-butt" onClick={() => handleUpdate(leader)}>
                            Update
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <Modal 
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            backgroundColor: 'transparent',
          },
          content: {
            width: '450px',
            height: '350px',
            margin: 'auto',
            padding: '20px',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #333',
            borderRadius: '1rem',
          },
        }}>
          <h1>Update Information</h1>
          <form  onSubmit={handleSubmit} className="updateLeaderForm">
            <div className="formInput">
            <label>
              First Name:
            </label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label>
              Last Name:
            </label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <label>
              Email:
            </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label for="birthday">
                    Birthday:
                </label>
                <input 
                    type="date"
                    value={birthday} 
                    name="birthday"
                    id="birthday"
                    onChange={(e) => setBirthday(e.target.value)}
                />
            <p></p>
                <button type="submit">Submit</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default ListLeaderAccount;
