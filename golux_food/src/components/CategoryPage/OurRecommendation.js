import React from "react"
import SearchInput from "../Header/SearchInput"
import "./category.css"



export const OurRecommendation=({categoryName,randomMeal})=>{

    
    
    console.log("ju slucajno",randomMeal.name)
    
    return (
        <>

        <section className="cardandsearch">
            <div >
                <h2>{categoryName}</h2>
                <p>Our recommendation</p>
                <img src={randomMeal.image} alt=""/>
                <p>{randomMeal.name}</p>
            </div>
            <div>
                <SearchInput/>
            </div>
        </section>
        

        </>
    )
}