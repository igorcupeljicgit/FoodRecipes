import React from "react"
import "./singlemeal.css"

export const MesureTable=({mealItem})=>{

    const specialMeal=mealItem[0]
    return(
        <>
        <div  className="mesurecontainer">
            <div className="mesurecolumn">
               <b> Ingredients </b>
            {specialMeal.ingredients.map((ing,index)=><p key={index}>{ing}</p>)

            }
            </div>
            <div className="mesurecolumn"> 
                <b>Mesure</b>
            {specialMeal.mesures.map((mes,index)=><p key={index}>{mes}</p>)

            }
            </div>
        </div>
         </>
    )
}