import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

function navbar() {
    return (
        <nav className="navbar">
            <div className="brand">
                <Link to="/">Magic Post</Link>
            </div>
            <div className="menu">
                <input type="text" placeholder="Search..."/>
                <button type="submit">Search</button>
            </div>

        </nav>
    );
}

export default navbar;
