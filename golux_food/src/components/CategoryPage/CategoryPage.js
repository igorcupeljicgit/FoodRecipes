import React from "react";
import {OurRecommendation} from "./OurRecommendation"
import {Header} from "../../components/Header/Header"
import {FetchSingleCategory} from "../../Services/FetchRecipes"
import {MainBlok} from "./MainBlock"
import Footer from "../Footer/Footer"


import "./category.css"



 class CategoryPage extends React.Component{
   constructor(props){
    super(props)
    this.state={
      categorie:[],
      randomMeal:{}
    }
   }

   componentDidMount=()=>{
    const data=this.props.location.state.detail
    FetchSingleCategory(data)
    .then(response=>{
      return this.setState({categorie:response})

    })
   }
   componentDidUpdate(prevProps,prevState){
     if(prevState!==this.state){
  console.log("promena")     }
   }
 render(){
   const catName=this.props.location.state.detail
    const cat=this.state.categorie
    console.log("category state",this.state.categorie)
    const randomMealConst=cat[parseInt(Math.random()*cat.length)]
  return (
    <>
    <Header/>
    <OurRecommendation randomMeal={randomMealConst} categoryName={catName}/>
    <hr/>
    <div className="categoriesContainer"> 
    <MainBlok categorie={cat} />

    </div>
    <Footer/>
    </>
  );
 }
   
};

export default CategoryPage