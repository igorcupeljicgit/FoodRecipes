import React from "react"
import {withRouter} from "react-router-dom"

import "./HomePage.css"


 const CategoryDropdown=({categories,select})=>{
    return(
        <>
        <select className="btn" onChange={(e) => {
                
                select(e.target.value)
                }}>
            <option>Category Select</option>
            {categories.map((element,index) => <option key={index}>{element.strCategory}</option>)}
         </select>
        </>
    )
}
export default withRouter(CategoryDropdown)