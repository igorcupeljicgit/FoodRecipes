import React from "react"
import {withRouter} from "react-router-dom" 
import "./card.css"

const Card =({clickHandler,key,data,type})=>{


    return(
        <>

        {(type==="categorie") ? 
        <div onClick={()=>clickHandler(data)}
            key={key}  className="cardwidth"> 
            <div className="card" >
                <img src={data.strCategoryThumb} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">
                {data.strCategory}
                </p>
                </div>
            </div>
        </div>
        :
        <div onClick={()=>clickHandler(data)}
            key={key}  className="cardwidth"> 
            <div className="card" >
                <img src={data.image} className="card-img-top" alt="..." />
                <div className="card-body">
                <p className="card-text">
                {data.name}
                </p>
                </div>
            </div>
        </div>}
        </>
    )
}

export default withRouter(Card)