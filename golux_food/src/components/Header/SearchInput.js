import React from "react"
import {withRouter} from "react-router-dom"

class Searchinput extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchValue:''
        }
    }
    searchData=(event)=>{
        let value=event.target.value
        console.log("value",value)
        this.setState({searchValue:value})
    }
    onSubmitInput=()=>{
        this.props.history.push({
            pathname:"/searchpage",
            state:{data:this.state.searchValue}
        })
    }
    render(){
        return(
            <form onSubmit={this.onSubmitInput} action="#" >
            <input
            type="search"
            placeholder="Search recepies"
            aria-label="Search"
            onChange={this.searchData}
            className="headerinput"
          />
            </form>
        )
    }
}
export default withRouter(Searchinput);