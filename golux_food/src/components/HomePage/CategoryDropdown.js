import React from "react"
import {withRouter} from "react-router-dom"
import "./HomePage.css"


 const CategoryDropdown=({categories,select})=>{
     console.log('Select handler: ', categories);
    return(
        <>
        <select className="selectButton" onChange={(e) => {
                console.log('Event value: ', e.target.value);
                select(e.target.value)
                }}>
            <option>-</option>
            {categories.map((element,index) => <option key={index}>{element.strCategory}</option>)}
         </select>
        </>
    )
}
export default withRouter(CategoryDropdown)