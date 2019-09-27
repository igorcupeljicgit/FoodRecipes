import React from "react";
import "./Header.css"
import SearchInput from "./SearchInput"

export const Header = ({sectionOneText,sectionTwoText}) => {
  return (
    <nav className="navbar navbar-light bg-light">
        <SearchInput />
        <div >
          {document.location.pathname==="/"?
            <a className="headerlinks" href="#aboutus"><img className="loginavatar" alt="avatar" src="https://img.icons8.com/material/100/000000/login-as-user.png"/></a>:
            <a className="headerlinks" href={this.props.history.push("/")}>Home</a>

          }
       <a className="headerlinks" href={sectionOneText}> About Us</a>
       <a className="headerlinks" href={sectionTwoText}> Contact</a>

        </div>
      
    </nav>
  );
};

