import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProvinceServices from "../../services/ProvinceServices";
import Navbar from "../../components/navbar/navbar";
import "./LandingPage.css";
import landingBG from "../../assets/deliveryMan.png";
import vnMap from "../../assets/47f24d49376753.58b346965a50a.png"

function LandingPage() {
    const [provinces, setProvinces] = useState([]); // State to store the provinces

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
                            <Link to="/dashboard">dashboard</Link>
                        </li>
                        <li>
                            <Link to="/page3">Page 3</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="secondSection">
                <div>
                    <img src={vnMap}></img>
                </div>
                <div className="locateInput">
                    <select>
                        {provinces.map((province) => (
                            <option key={province.code} value={province.code}>
                                {province.name}
                            </option>
                        ))}
                    </select>
                    <button> chon dia diem </button>
                </div>

            </div>

            <div className="thirdSection">

                3rd section

            </div>

            <div className="contact">

                contact in4

            </div>
        </div>
    );
}

export default LandingPage