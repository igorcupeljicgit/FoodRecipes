
import React from "react";

import { FetchRandomMeal, FetchCategories } from "../../Services/FetchRecipes";
import  HomePageHeader  from "./HomePageHeader";
import  Categories  from "./Categories";
import { AboutUs } from "./AbouUs";
import MyForm from "./Form"

import "./HomePage.css";


export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomMeal: {},
      categories: []
    };
  }

  componentDidMount() {
    FetchRandomMeal().then(response => {
      return this.setState({ randomMeal: response });
    });
    FetchCategories()
    .then(categories => {
       return this.setState({categories:categories.categories});
    });
  }

  render() {
    return (
      <>
        <HomePageHeader categories={this.state.categories} />
         
        <div className="categoriesContainer">
        <Categories categories={this.state.categories} />
        </div>
       
        <div id="aboutus">
          <AboutUs />
        </div>
        <div id="form" >
        <MyForm />
         </div>
       
      </>
    );
  }
}
