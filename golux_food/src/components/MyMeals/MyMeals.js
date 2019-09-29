import React from "react"
import {FetchRandomMeal} from "../../Services/FetchRecipes"

class MyMeals extends React.Component{
    constructor(props){
        super(props)
        this.state={
            myRandomMeal:{}
        }
    }
    componentDidMount=()=>{
        FetchRandomMeal()
        .then(response=>this.setState({myRandomMeal:response[0]}))
    }
render(){
    console.log("my meal",this.state.myRandomMeal)
    const {myRandomMeal}=this.state
     return(
        <>
        <div>
            <h1>{myRandomMeal.name}</h1>
            <img src={myRandomMeal.image} alt="Food"/>
        </div>
        
        </>
    )
}
   
}

export default MyMeals