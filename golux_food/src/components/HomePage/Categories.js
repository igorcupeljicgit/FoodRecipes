import React from "react";
import Card from "../../components/Card/Card"
import {withRouter} from "react-router-dom"
import "./HomePage.css";

const Categories = ({categories,history} )=> {
  const categoriesArray=categories

    const onCardClick = (data)=> {
    history.push({
    pathname:"/categorypage",
    state:{detail:data.strCategory}
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
         className=""
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

