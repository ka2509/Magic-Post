import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProvinceServices from "../../services/ProvinceServices";

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
        <div>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/order">Find Order</Link>
                    </li>
                    <li>
                        <Link to="/login">Login For Employee</Link>
                    </li>
                    <li>
                        <Link to="/page3">Page 3</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div>
                    <select>
                        {provinces.map((province) => (
                            <option key={province.code} value={province.code}>
                                {province.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default LandingPage