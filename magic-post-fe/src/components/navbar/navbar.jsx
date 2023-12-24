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
                <a href='#'>placeholder</a>
                <a href='#'>placeholder</a>
                <a href='#'>placeholder</a>
                <a href='#'>placeholder</a>
                <a href='#'>placeholder</a>
            </div>
        </nav>
    );
}

export default navbar;
