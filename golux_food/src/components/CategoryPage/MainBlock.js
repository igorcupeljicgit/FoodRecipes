import React from "react"
import Card from "../Card/Card"
import {withRouter} from "react-router-dom"
import "./category.css"

const MainBlok = ({categorie,history,categorySearch} )=> {
 
const onCardClick=(data)=>{
  history.push({
    pathname:"/singlemeal",
    state:{id:data.id ,
          category:categorySearch}})

}



  if(categorie.length===0){
        return <p>Loading</p>
        }
      return(

     <>

       
         {categorie.map((element,index) => {
         return(
          
          <Card 
         
          type="meal"
          clickHandler={onCardClick}
          key={index}
          data={element}
          />
         )})}

      </>
     )
};

export default withRouter(MainBlok)
   