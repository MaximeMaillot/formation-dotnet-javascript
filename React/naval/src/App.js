import "./App.css"
import React, { Component } from "react"
import ContainerComponent from "./Component/ContainerComponent.js";
import FooterComponent from "./Component/FooterComponent";
import HeaderComponent from "./Component/HeaderComponent";

class App extends Component {
  render() {
    return (
      <div className="app">
        <HeaderComponent />
        <ContainerComponent />
        <FooterComponent />
      </div>
    );
  }
}

export default App;
