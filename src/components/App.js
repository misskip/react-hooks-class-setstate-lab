import React, { Component, useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isDarkMode: false,
    }
  }

  render() {
  
console.log(this.state);
 
  
toggleLight = () =>
this.setState((prevState) => {
  return {
    isDarkMode: !prevState.isDarkMode
  }},)}
 
render () {

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={this.toggleLight}>
          Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
  }}

export default App;
