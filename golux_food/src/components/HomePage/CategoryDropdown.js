import React from "react"
import {withRouter} from "react-router-dom"
import {Link} from "react-router-dom"
import "./HomePage.css"


 const CategoryDropdown=({categories,select})=>{
     

    return(
        <>
        <select className="selectButton">
         {categories.map((element,index)=>{
              return(
               
                    <option onClick={select}  key={index}>{element.strCategory}</option>

            )}

         )}</select>
        </>
    )
}
export default withRouter(CategoryDropdown)