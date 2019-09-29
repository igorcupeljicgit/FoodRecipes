import React from "react";

import ABOUTUS from "../../asset/Images/ABOUTUS.jpg";

import "../HomePage/HomePage.css";

export const AboutUs = () => {
  return (
    <div className="headercontainer">
      <div className="aboutDiv">
        <h3 className="aboutUs">About Us</h3>
        <p className="abouUsP"> 
          The gutters between columns in our predefined grid classes can be
          removed with .no-gutters. This removes the negative margins from .row
          and the horizontal padding from all immediate children columns. Here’s
          the source code for creating these styles. Note that column overrides
          are scoped to only the first children columns and are targeted via
          attribute selector.
        </p>
      </div>
      <div className="aboutDiv">
        <img className="headerImage" src={ABOUTUS} alt="Team" />
      </div>
    </div>
  );
};
