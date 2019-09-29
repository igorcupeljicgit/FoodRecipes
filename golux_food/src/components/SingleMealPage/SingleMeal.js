import React from "react"
import {withRouter} from "react-router-dom"

import Card from "../Card/Card"
import {FetchMealById,FetchSingleCategory} from "../../Services/FetchRecipes"
import SingleMealItem from "./SingleMealItem"
import RandomMeal from "../RandomMeal/RandomMeal"
import "./singlemeal.css"

class SingleMeal extends React.Component{
        constructor(props){
            super(props)
        }
    
    state={
        wantedMeal:[],
        radnomMeals:[]
    }

  componentDidMount=()=>{
      const id=this.props.history.location.state.id
      const categ=this.props.history.location.state.category
      FetchMealById(id).then(response=>this.setState({wantedMeal:response}));
      FetchSingleCategory(categ).then(response=>{
        const reducedArray=response.slice(0,3);
        this.setState({radnomMeals:reducedArray})})
  }
  
  componentDidUpdate=(prevProps,prevState)=>{
    const id=this.props.history.location.state.id

    if(prevProps==this.props.history.location.state.id){
      FetchMealById(id).then(response=>this.setState({wantedMeal:response}));

  }
}
  onCardClick=(data)=>{
    const categ=this.props.history.location.state.category
    this.props.history.push({
      pathname:"/singlemeal",
      state:{id:data.id ,
            category:categ}})
  
  }
  

render(){ 
    const categ=this.props.history.location.state.category

    return(
    <>
    <SingleMealItem mealItem={this.state.wantedMeal}/>
    <h3>Similar Meals</h3>
    {
    this.state.radnomMeals ?
    <div className="similarContainer">{this.state.radnomMeals.map((element,index)=>{
    return (
    <Card
    className="similarcards"
    categorySearch={categ}
    type="meal"
    clickHandler={this.onCardClick}
    key={index}
    data={element}  /> 
    )})
    }</div>:
    <p>Loading...</p>
  }
    </>
)

}




}
export default withRouter(SingleMeal)