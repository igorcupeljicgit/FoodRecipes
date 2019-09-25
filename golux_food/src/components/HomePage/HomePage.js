import React from "react";
import { FetchRandomMeal, FetchCategories } from "../../Services/FetchRecipes";
import { Header } from "../Header/Header";
import { HomePageHeader } from "./HomePageHeader";
import { Categories } from "./Categories";
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
    FetchCategories().then(response => {
      return this.setState({ categories: response.categories });
    });
  }

  render() {
    return (
      <>
        <Header sectionOneText="#aboutus" sectionTwoText="#form"  />
        <HomePageHeader />
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
