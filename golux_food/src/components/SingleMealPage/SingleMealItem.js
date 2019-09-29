import React from "react";

import {MesureTable} from "./MesureTable";

import "./singlemeal.css";

const SingleMealItem=({mealItem})=>{
    const meal=mealItem[0]
    return(
        
      mealItem[0] 
        ?
        <>
      <div className="singlebox">
            <div className="cardwidthsingle">
            <h1>{meal.name}</h1>
            <img src={meal.image} className="singlemealimage" alt="FOOD"/>

            </div>
            <div className="cardwidthsingle">
                {meal.tags ? <p><b>#{meal.tags.split(",").join("#") }</b></p>: <p>No tags,sorry.</p>}
                <p><b> Category: </b>{meal.category}</p>
                <p><b>Contry:</b>{meal.area}</p>
                <p className="textsize">{meal.instuctions}</p>
            </div>
        </div>
            <MesureTable mealItem={mealItem}/> </>
            :
            
            <h2>Loading...</h2>
          
   
    )
}
export default SingleMealItem