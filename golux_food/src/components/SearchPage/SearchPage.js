import React from "react";
import {withRouter} from "react-router-dom";
import {FetchByName} from "../../Services/FetchRecipes"
import Card from '../Card/Card'

import "./searchpage.css"

 class SearchPage extends React.Component{
     constructor(props){
        super(props)
        this.state={
            searchResult:[],
            randomMeal:''
        }
     }

     componentDidMount=()=>{
         const data=this.props.history.location.state.data
        FetchByName(data)
        .then(response=>this.setState({searchResult:response,
        randomMeal:response[Math.floor(Math.random()*response.length-1)]}))
     }
     onCardClick=(data)=>{
         this.props.history.push({
             pathname:"/singlemeal",
             state:{id:data.id,
            category:data.category}
         })
     }
     render(){

         const {searchResult,randomMeal}=this.state
         console.log("State",randomMeal)
    return(
        <>
        {randomMeal?
        <section className="cardandsearch">
        <div  >
            <h2>{randomMeal.name}</h2>
            <p>Our recommendation</p>
            <img src={randomMeal.image} className="cardwidthrecommendationsearch" alt=""/>
            <p>{randomMeal.name}</p>
        </div>
        <div>
           <select>
               <option>category</option>
           </select>
        </div>
    </section>
        
        :
        <p>Loading...</p>
        }
       
        


        <div className="searchcontainer">
        {searchResult.map((element,index)=>{
      return(
          

          
          <Card
          type="meal"
          clickHandler={this.onCardClick}
          key={index}
          data={element}
          
          />
      )

        })

        }</div>
        </>
    )

}




}
export default withRouter(SearchPage)