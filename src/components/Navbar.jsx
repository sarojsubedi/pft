import React from "react";
import logo from "../assets/logo.svg";
import notificationbell from "../assets/notificationbell.svg";

const Navbar = () => {
  return (
    <>
      <div>
        <img src={logo} alt="logo" />
        <span>
          <strong>Personal Finance Tracker</strong>
        </span>
      </div>
      <div>
        <ul>
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Budgets</li>
          <li>Goals</li>
          <li>Reports</li>
        </ul>
        <img src={notificationbell} alt="notification-bell" />
        <img src="null" alt="user-avatar" />
      </div>
    </>
  );
};

export default Navbar;
