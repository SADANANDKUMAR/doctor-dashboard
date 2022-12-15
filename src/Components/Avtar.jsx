import React from "react";
import avtar from "./avtar.png";
import "./avtar.css";
import { useState } from "react";

const Avtar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <>
    
      <div className="menu-container1">
        <div className="menu-trigger1">
          <img src={avtar} onClick={() => setOpenProfile((prev) => !prev)} />
        </div>
        <div>
          <ul>{openProfile && <DropdownItem />}</ul>
        </div>
      </div>
    </>
  );
};

const DropdownItem = () => {
  return (
    <div className="dropdown-menu1">
      <ul>

        <a href="">My Profile</a>
      </ul>
      <ul>
        <a href="">Logout</a>
      </ul>
    </div>
  );
};

export default Avtar;
