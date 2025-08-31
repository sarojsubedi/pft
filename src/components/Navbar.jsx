import React from "react";
import logo from "../assets/logo.svg";
import notificationbell from "../assets/notificationbell.svg";
import useravatar from "../assets/useravatar.svg";
const Navbar = () => {
  return (
    <>
      <div className="flex items-center border-b border-gray-200">
        <div className="flex flex-grow flex-row justify-start-safe gap-4 p-4">
          <img className="scale-100" src={logo} alt="logo" />
          <h1>
            <strong>Personal Finance Tracker</strong>
          </h1>
        </div>
        <div className="hidden sm:flex sm:flex-row">
          <ul className="flex flex-row justify-end-safe gap-4 p-4">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="#">Transactions</a>
            </li>
            <li>
              <a href="#">Budgets</a>
            </li>
            <li>
              <a href="#">Goals</a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
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
