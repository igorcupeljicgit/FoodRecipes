import React from "react";
import { Switch, Route } from "react-router-dom";

import { HomePage } from "../components/HomePage/HomePage";
import  SearchPage  from "../components/SearchPage/SearchPage";
import  SingleMeal  from "../components/SingleMealPage/SingleMeal";
import  CategoryPage  from "../components/CategoryPage/CategoryPage";
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/categorypage" component={CategoryPage} />
        <Route path="/searchpage" component={SearchPage} />
        <Route path="/singlemeal" component={SingleMeal} />
        <Route path="/" component={HomePage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
