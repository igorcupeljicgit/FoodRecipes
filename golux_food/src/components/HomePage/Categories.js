import React from "react";
import "./HomePage.css";

export const Categories = ({categories} )=> {
 const categoriesArray=categories


const onCardClick = f => f;



if(categoriesArray.length===0){
return <p>Loading</p>
}
 
  return (
     
    <>
    
      {categoriesArray.map((element, index) => {
      return(
         <Card 
          imagePlacement='top'
          clickHandler={onCardClick}
          key={index}
          data={element}
         />
      )  ;
      })}
    </>
  );
};


{/* <div onClick={clickHandler}
key={key}  className="cardwidth"
> 
<div className="card" >
<img src={data.strCategoryThumb} className={imageClassName} alt="..." />
<div className="card-body">
  <p className="card-text">
    {data.strCategory}
  </p>
</div>
</div>
</div> */}
