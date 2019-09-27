import React from "react";
import {Link} from "react-router-dom"
import "./HomePage.css";

export const Categories = ({categories} )=> {
 const categoriesArray=categories






if(categoriesArray.length===0){
return <p>Loading</p>
}
 
  return (
     
    <>
    
      {categoriesArray.map(element => {
      return(
          <Link to={{
            pathname: "/categorypage",
           state: { detail: element.strCategory }
          }}
          key={element.idCategory}  className=" cardwidth"> 
          <div className="card " >
          <img src={element.strCategoryThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              {element.strCategory}
            </p>
          </div>
        </div>
        </Link>
      )  ;
      })}
    </>
  );
};
