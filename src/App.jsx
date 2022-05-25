import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent2 from "./MainContent2";
import Table from './Table'
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Table />
        {/* <MainContent2 /> */}
        
      </React.Fragment>
    );
  }
}
