import React from "react"

import "./Header.css"

class LogInForm extends React.Component{
constructor(props){
super(props)
    this.state={
        email:'',
        password:''
    }
}
colectInfo=(event)=>{
    
if(event.target.name==="email"){
    this.setState({email:event.target.value})
}
else{
    this.setState({password:event.target.value})
}
}
onClickHandler=()=>{
localStorage.setItem("LogIn",JSON.stringify(this.state))

}
logOutHandler=()=>{
    localStorage.removeItem("LogIn")
}
render(){
    const {email,password}=this.state
    const checkIfLogedIn=localStorage.getItem("LogIn")
     return(
            checkIfLogedIn?
            <form className="loginform">
                <h4>Allready loged in.</h4>
               <button type='submit' onClick={this.logOutHandler} className="btn">Logout</button>
            </form>
            :
            <form className="loginform">
                <input type="text" name="email" value={email} onChange={this.colectInfo} className="logininput" placeholder="Email"/>
               <input type="text" name="password" value={password} onChange={this.colectInfo}className="logininput" placeholder="Password"/>
               <button type='submit' onClick={this.onClickHandler} className="btn">Login</button>
            </form>
       
    )
}
   
}

export default LogInForm
