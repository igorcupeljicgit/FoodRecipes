import React from "react";

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

