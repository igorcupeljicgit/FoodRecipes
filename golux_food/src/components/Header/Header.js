import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export const Header = ({sectionOneText,sectionTwoText}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <form >
       
          <input
            type="search"
            placeholder="Search"
        aria-label="Search"
          />
          </form>
          
        
        <div >
       <a href={sectionOneText}> About Us</a>
       <a href={sectionTwoText}> Contact</a>

        </div>
      
    </nav>
  );
};

// Header.PropTypes = {
//     className: PropTypes.string,
//     text: PropTypes.string,
// };

// Header.defaultProps = {
//     className: '',
//     text: "This is button"
// }
