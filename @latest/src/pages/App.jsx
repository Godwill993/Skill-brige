import React from "react";
import "../styles/App.css";

import { Routes, Route} from "react-router-dom";
import {Login } from "./Login"
import { Form } from "./form"
import { LandingPage } from "../components/landigPage"
function App() {

  return (
 
  <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/form" element={<Form/>} />  
     <Route path="/landingPage"/>
   </Routes>
  

  );
};

export default App;

