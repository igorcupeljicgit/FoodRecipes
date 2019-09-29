import React from "react"

import "./category.css"

export const OurRecommendation=({categoryName,randomMeal,categorie})=>{

    
    return (
        <>

        <section className="cardandsearch">
            <div  >
                <h2>{categoryName}</h2>
                <p>Our recommendation</p>
                <img src={randomMeal.image} className="cardwidthrecommendation" alt=""/>
                <p>{randomMeal.name}</p>
            </div>
            <div>
                <input className="inputsearch" placeholder="Search in this categ" type="text" />
            </div>
        </section>
        

        </>
    )
}