import React from "react"
import SearchInput from "../Header/SearchInput"
import "./category.css"



export const OurRecommendation=({categoryName,randomMeal})=>{

    
    
    console.log("ju slucajno",randomMeal)
    
    return (
        <>

        <section className="cardandsearch">
            <div >
                <h2>{categoryName}</h2>
                <p>Our recommendation</p>
                <img src="" alt=""/>
                <p>{""}</p>
            </div>
            <div>
                <SearchInput/>
            </div>
        </section>
        

        </>
    )
}