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
        console.log("value",value)
        this.setState({searchValue:value})
    }
    onSubmitInput=()=>{
        this.props.history.push({
            pathname:"/searchpage",
            state:{data:this.state.searchValue}
        })
    }
    // componentDidUpdate(prevProps,prevState){
    //     if(prevState!==this.state){
    //         const {searchValue,categorie}=this.state;
    //         const filteredMeals=categorie.filter(meal=>{
    //             if(meal.name){ return meal.name.toLowerCase().indexOf(searchValue.toLowerCase())!== -1 }})
    //             console.log(filteredMeals)
    //     }
    // }
    render(){
        console.log(this.state)
        const {searchValue,categorie}=this.state;
        // const filteredMeals=categorie.filter(meal=>{
        //     if(meal.name){ return meal.name.toLowerCase().indexOf(searchValue.toLowerCase())!== -1 }})
            
       
        return(
            <form onSubmit={this.onSubmitInput} action="#" >
            <input
            type="search"
            placeholder="Search recepies"
            aria-label="Search"
            value={searchValue}
            onChange={this.searchData}
            className="headerinput"
          />
            </form>
        )
    }
}
export default withRouter(Searchinput);



// filterUsers = (event) => {
//     this.setState({
//         searchInput: event.target.value,
//     })
// }



// render() {
//     const { users, searchInput } = this.state

//     const filteredUsers = users.filter((user) => {
//         if (user.name){ return user.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1} });

