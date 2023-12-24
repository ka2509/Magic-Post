import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
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
                {/* Render the content of the selected page */}
            </div>
        </div>
    );
}

export default LandingPage