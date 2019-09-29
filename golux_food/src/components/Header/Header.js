import React from "react";
import {withRouter, Link} from 'react-router-dom';
import "./Header.css"
import SearchInput from "./SearchInput"

const Header = ({ history}) => {
  console.log('path name: ', history.location.pathname);
  const path=history.location.pathname;
  return (
    <nav className="navbar navbar-light bg-light">
        <SearchInput />
        <div >
          {(path==="/" || path==="/aboutus" || path==="/form") ?
            <a className="headerlinks" href="#"><img className="loginavatar" alt="avatar" src="https://img.icons8.com/material/100/000000/login-as-user.png"/></a>:
            <Link className="headerlinks" to={{
              pathname: '/',
              state: {
                elementId: 'home'
              }
            }}>Home</Link>

          }
       <a className="headerlinks" href="#aboutus"> About Us</a>
       <a className="headerlinks" href="#form"> Contact</a>

        </div>
      
    </nav>
  );
};

export default withRouter(Header);

