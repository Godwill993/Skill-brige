import React from "react";
import "../styles/App.css";

import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Main from  "../main";
import Form from "./form"
import LandingPage from "../components/landigPage"
function App() {

  return (
  <Router>
  <Routes>
     <Route path="/" element={<Main/>} />
     <Route path="/form" element={<Form/>} />  
     <Route path="/landingPage"/>
   </Routes>
  </Router> 

  );
};

export default App;

