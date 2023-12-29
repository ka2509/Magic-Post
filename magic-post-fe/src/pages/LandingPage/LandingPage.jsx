import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProvinceServices from "../../services/ProvinceServices";
import Navbar from "../../components/navbar/navbar";
import "./LandingPage.css";
import landingBG from "../../assets/deliveryMan.png";
import vnMap from "../../assets/47f24d49376753.58b346965a50a.png"
import ShippmentPointServices from "../../services/ShippmentPointServices";
import { LocationOutline } from 'react-ionicons'

function LandingPage() {
    const [provinces, setProvinces] = useState([]); // State to store the provinces
    const [province, setProvince] = useState("01");
    const [points, setPoints] = useState([]);
    useEffect(() => {
        // Fetch the provinces from provinceServices
        const fetchProvinces = async () => {
            try {
                const data = await ProvinceServices.getProvice();
                setProvinces(data.data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching provinces:", error);
            }
        };

        fetchProvinces();
    }, []);

    const handleProvinceChange = (e) => {
        setProvince(e.target.value);
    }

    const getPoint = async () => {
        try {
            const data = await ShippmentPointServices.getShipmentPointFromProvince(province)
            setPoints(data.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="landing">
            <Navbar></Navbar>
            <div className="firstSection">
                <div>
                    <img src={landingBG}></img>
                </div>
                <div className="sidebar">
                    <ul>
                        <li>
                            <Link to="/order">Find Order</Link>
                        </li>
                        <li>
                            <Link to="/login">Login For Employee</Link>
                        </li>
                        <li>
                            <a href="https://giaohangtietkiem.vn/gioi-thieu">About Us</a>
                        </li>
                        <li>
                            <a href="https://s.giaohangtietkiem.vn/files/templates/Bieuphi_Giaohangtietkiem.pdf">Price Table</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="secondSection">
                <div>
                    <img src={vnMap}></img>
                </div>
                <div className="locateInput">
                    <div>
                        <h1>Find Your Shippment Point</h1>
                    </div>
                    <div className="selectDiv">

                        <select name="district" onChange={handleProvinceChange}>
                            {provinces.map((province) => (
                                <option key={province.code} value={province.code}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                        <button onClick={() => getPoint()}> Find </button>
                    </div>
                    <div className="listpoint">
                        {points.map((point) => (
                            <div className="card">
                                <LocationOutline
                                    color={'#00000'}
                                    height="25px"
                                    width="25px"
                                />
                                <div>
                                    <h3>{point.point_name}</h3>
                                    <p>{point.point_province}, {point.point_district}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
}

export default LandingPage