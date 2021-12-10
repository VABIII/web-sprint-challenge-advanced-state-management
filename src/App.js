import React, { Component, useEffect } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { connect } from "react-redux";
import {getSmurfs} from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import axios from "axios";

const App = props => {


    useEffect(() => {
        props.getSmurfs();
    },[])






  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

export default connect(null, {getSmurfs})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.