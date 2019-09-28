import React from "react"
import "./card.css"

export const Card =({clickHandler,key,data,type})=>{


    return(
        <>

        {type==="categorie"}? <div onClick={clickHandler}
            key={key}  className="cardwidth"> 
            <div className="card" >
                <img src={data.strCategoryThumb} className="" alt="..." />
                <div className="card-body">
                <p className="card-text">
                {data.strCategory}
                </p>
                </div>
            </div>
        </div>
        :
        <div onClick={clickHandler}
            key={key}  className="cardwidth"> 
            <div className="card" >
                <img src={data.image} className="" alt="..." />
                <div className="card-body">
                <p className="card-text">
                {data.name}
                </p>
                </div>
            </div>
        </div>
        </>
    )
}