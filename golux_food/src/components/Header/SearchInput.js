import React from "react"
import {withRouter} from "react-router-dom"

import "./Header.css"

class Searchinput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchValue:'',
            categorie:[]
        }
    }
    componentDidMount=()=>{
        this.setState({categorie:this.props.categorie})
    }
    searchData=(event)=>{
        let value=event.target.value
        this.setState({searchValue:value})
    }
    onSubmitInput=()=>{
        this.props.history.push({
            pathname:"/searchpage",
            state:{data:this.state.searchValue}
        })
    }
    render(){
        const {searchValue,categorie}=this.state;
       
       
        return(
           <span>
            <input
            type="search"
            placeholder="Search recepies"
            aria-label="Search"
            value={searchValue}
            onChange={this.searchData}
            className="headerinput"
          />
          <img className="searchicon"  onClick={this.onSubmitInput} src="https://img.icons8.com/metro/35/000000/search.png"/>
            </span>
        )
    }
}
export default withRouter(Searchinput);



