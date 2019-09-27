import React from "react";
import { withRouter } from "react-router-dom"

import LOGO from "../../asset/Images/LOGO.png";
import FB from "../../asset/Icons/FB.png";
import INSTA from "../../asset/Icons/INSTA.png";

import "./footer.css";

const Footer = (props) => {
 


  return (
    <>
      <div className="footer">
        <img className="logosize" src={LOGO} alt="logo" />

        <div>
          <a href="https://www.facebook.com">
            <img className="imagesize" src={FB} alt="facebook" />
          
          </a>
        <a href="https://www.instagram.com/?hl=en">
          <img className="imagesize" src={INSTA} alt="instagram" />

        </a>
        </div>
      </div>
    </>
  );
};

export default withRouter(Footer)