import React from "react";
import  Header from "./components/Header";
import './App.css';
import { Fragment } from "react";
import Todo from './components/Todo'

const App = () =>{
  
  return (
    <Fragment>
      <Header/>
      <Todo/>
    </Fragment>
    )
}

export default App;
