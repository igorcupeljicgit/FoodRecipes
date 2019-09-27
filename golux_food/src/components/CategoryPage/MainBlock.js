import React from "react"
import {Link} from "react-router-dom"
import "./category.css"

export const MainBlok = ({categorie} )=> {
  
   
    console.log("categorija u bloku",categorie)
  
    
    if(categorie.length===0){
        return <p>Loading</p>
        }
      return(

     <>

       
         {categorie.map(element => {
         return(
             <Link to={{
               pathname: "/singlemeal",
              state: { id: element.id }
             }}
             key={element.id}  className=" cardwidth"> 
             <div className="card " >
             <img src={element.image} className="card-img-top" alt="..." />
             <div className="card-body">
               <p className="card-text">
                 {element.name}
               </p>
             </div>
           </div>
           </Link>
         )  ;
         })}
      </>
     )
};
   