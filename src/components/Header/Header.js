import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-bar-header-text">Accounts App</Link>
            <div className="nav-bar-items">
                <NavLink to="/" exact className="nav-bar-items-text">Accounts</NavLink>
                <NavLink to="/add" className="nav-bar-items-text">Add Account</NavLink>
                <NavLink to="/edit-delete" className="nav-bar-items-text">Edit/Delete</NavLink>
            </div>
        </nav>
    )
}

export default Header;