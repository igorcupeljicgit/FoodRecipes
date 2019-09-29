import React from "react";
import {withRouter, Link} from 'react-router-dom';
import "./Header.css"
import SearchInput from "./SearchInput"
import Avatar from "./Avatar";

const Header = ({ history}) => {
  console.log('path name: ', history.location.pathname);
  const path=history.location.pathname;
  const checkLog=localStorage.getItem("LogIn")

  return (
    <nav className="navbar navbar-light bg-light">
        <SearchInput />
        <div >
          {(path==="/" || path==="/aboutus" || path==="/form") ?
        <Avatar />:
        <Link className="headerlinks" to={{
              pathname: '/',
              state: {
                elementId: 'home'
              }
            }}>Home</Link>

          }
       <a className="headerlinks" href="#aboutus"> About Us</a>
       <a className="headerlinks" href="#form"> Contact</a>
       {checkLog ? 
       <Link to="/mymeals">My</Link>
       :null}

        </div>
      
    </nav>
  );
};

export default withRouter(Header);

