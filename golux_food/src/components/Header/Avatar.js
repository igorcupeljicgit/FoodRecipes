import React from "react"
import LogInForm from "./LogInForm"
import "./Header.css"


class Avatar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isVisible:false
        }
    }
    
     onClickHandler=()=>{
        const {isVisible}=this.state
        this.setState({isVisible:!isVisible})
    
    }
    componentDidMount=()=>{
        console.log("Mount")
    }
    render(){
        
        return(
        <>
        <p className="headerlinks" onClick={this.onClickHandler}  href="#">
        <img className="loginavatar"  alt="avatar" src="https://img.icons8.com/material/100/000000/login-as-user.png"/>
        </p>
        {this.state.isVisible ? 
        <LogInForm  />
        :
        null
        }
        </>
    )
    }
    
}
export default Avatar