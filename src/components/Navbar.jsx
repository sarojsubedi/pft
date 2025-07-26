import React from "react";
import logo from "../assets/logo.svg";
import notificationbell from "../assets/notificationbell.svg";
import useravatar from "../assets/useravatar.svg";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="flex flex-grow flex-row justify-start-safe gap-4 p-4">
          <img className="scale-100" src={logo} alt="logo" />
          <strong>Personal Finance Tracker</strong>
        </div>
        <div className="flex-grow flex-row">
          <ul className="flex flex-row justify-end-safe gap-4 p-4">
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Budgets</li>
            <li>Goals</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className="flex items-center gap-4 p-4">
          <img
            className="h-8 w-8"
            src={notificationbell}
            alt="notification-bell"
          />
          <img className="h-8 w-8" src={useravatar} alt="user-avatar" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
