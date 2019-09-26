import React from "react";
import HEADER from "../../asset/Images/HEADER.png";
import "./HomePage.css"

export const HomePageHeader = ({categories}) => {
  if(categories.length===0){
    return <p>Loading</p>
    }
    
  return (
    <>
      <section className="headercontainer">
        <div className="col-6">
          <h1>Food recipes</h1>
          <p className="textSize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <select className="selectButton">
            {categories.map((element,index)=>{
              return <option key={index}>{element.strCategory}</option>
            })

            }
              
          </select>
        </div>
        <div className="col-6">
          <img className="headerImage" src={HEADER} alt="food" />
        </div>
      </section>
    </>
  );
};
