import React from "react"
import "./HomePage/HomePage.css"

export const Button=({type,text})=>{
    return(
        <button className="btn" type={type} >{text}</button>
    )
}