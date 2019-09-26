import React from "react"
import "./HomePage/HomePage.css"

export const Button=({type,text,submithandler})=>{
    return(
        <button onClick={submithandler} className="btn" type={type} >{text}</button>
    )
}