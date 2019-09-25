import React from "react";
import {Button} from "../Button"

class MyForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="myform">
        <h3 className="aboutUs">Contact</h3>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <textarea  placeholder="Message" />
        <Button  type="submit"text="Send"></Button>
      </div>
    );
  }
}
export default MyForm;
