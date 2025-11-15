import React from "react";
import "../styles/App.css";

import { Routes, Route} from "react-router-dom";
import { Form } from "./form.jsx"
import { LandingPage } from "../components/landigPage.jsx"
function App() {

  return (
 
  <Routes>
     <Route path="/" element={<Form/>} />
     <Route path="/form" element={<Form/>} />  
     <Route path="/landingPage"/>
   </Routes>
  

  );
};

export default App;

