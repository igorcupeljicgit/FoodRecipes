import React from "react";

import {Button} from "../Button";

import "./HomePage.css"

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      firstname:"",
      lastname:"",
      email:"",
      message:""
    }
  }

handleForm=(event)=>{
  event.preventDefault()
  const element=event.target.name;
  const elementValue=event.target.value
switch(element){
  case "firstname":
    this.setState({firstname:elementValue})
  break;
  case "lastname":
    this.setState({lastname:elementValue})
  break;
  case "email":
    
    this.setState({email:elementValue})
    break;
    case "message":
      this.setState({message:elementValue})
      break;
  default :
  console.log("Default case")
  }
}


handleSubmit=()=>{
  localStorage.setItem("User Info",JSON.stringify(this.state))
  alert(`${this.state.firstname} your message is successfully sent.`)
document.querySelector(".myform").reset();
}


  render() {
   
    return (
      <form className="myform">
        <h3 className="aboutUs">Contact</h3>
        <input type="text" name="firstname" onChange={this.handleForm} placeholder="First Name" />
        <input type="text" name="lastname" onChange={this.handleForm} placeholder="Last Name" />
        <input type="email" name="email" onChange={this.handleForm} placeholder="Email" />
        <textarea  placeholder="Message" onChange={this.handleForm} name="message" />
        <Button submithandler={this.handleSubmit}  type="button"text="Send"></Button>
      </form>
    );
  }
}
export default MyForm;
