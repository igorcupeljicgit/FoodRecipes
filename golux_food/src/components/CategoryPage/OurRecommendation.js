import React from "react"
import SearchInput from "../Header/SearchInput"

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
                {/* <SearchInput categorie={categorie} /> */}
            </div>
        </section>
        

        </>
    )
}