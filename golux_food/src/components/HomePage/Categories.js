import React from "react";
import {Card} from "react"
import {withRouter} from "react-router-dom"
import "./HomePage.css";

export const Categories = ({categories} )=> {
 const categoriesArray=categories
console.log("categories",categories)

const onCardClick = ()=> {
  this.props.history.push({
    pathname:"/categorypage",
    state:{detail:"dss"}
  })
};

if(categoriesArray.length===0){
return <p>Loading</p>
}
 
  return (
     
    <>
    
      {categoriesArray.map((element, index) => {
      return(
         <Card 
         type="categorie"
          clickHandler={onCardClick}
          key={index}
          data={element}
         />
      )  ;
      })}
    </>
  );
};

export default withRouter(Categories)

