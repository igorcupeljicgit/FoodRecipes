import React from "react";
import HEADER from "../../asset/Images/HEADER.png";
import { withRouter} from 'react-router-dom'

import CategoryDropdown from "./CategoryDropdown";

import "./HomePage.css"

const HomePageHeader = ({categories, history}) => {

 const selectcategory=(wantedCategory)=>{
  //  const wantedCategory=event.target.strCategory
  console.log('option is clicked!', wantedCategory);
    history.push({
      pathname:"/categorypage",
      state:{detail: wantedCategory}
    });
  }

  if(!categories.length){
    return <p>Loading</p>
    }
    
  return (
    <>
      <section className="headercontainer" id='home'>
        <div className="col-md-6">
          <h1>Food recipes</h1>
          <p className="textSize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          
           <CategoryDropdown categories={categories} select={selectcategory}/>
         
        </div>
        <div className="col-md-6">
          <img className="headerImage" src={HEADER} alt="food" />
        </div>
      </section>
    </>
  );
};
export default withRouter(HomePageHeader)



