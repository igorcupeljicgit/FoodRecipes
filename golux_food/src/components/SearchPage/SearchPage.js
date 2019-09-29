import React from "react";
import {withRouter} from "react-router-dom"

 class SearchPage extends React.Component{
     constructor(props){
        super(props)
     }
     render(){
         console.log(this.props.location)
         
    return(
        <>
        <p>
           Hello
        </p>
        </>
    )

}




}
export default withRouter(SearchPage)