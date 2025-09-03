import React from "react";
import logo from "../assets/logo.svg";
import notificationbell from "../assets/notificationbell.svg";
import useravatar from "../assets/useravatar.svg";
const Navbar = () => {
  const navItems = [
    { id: 1, name: "Dashboard", link: "/" },
    { id: 2, name: "Transactions", link: "/Transactions" },
    { id: 3, name: "Budget", link: "/Budget" },
    { id: 4, name: "Goals", link: "/Goals" },
    { id: 5, name: "Reports", link: "Reports" },
  ];
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
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
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
