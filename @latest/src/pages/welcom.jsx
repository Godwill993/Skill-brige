import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "../components/navi.jsx";
import LandingPage from "../components/landigPage.jsx";
import "../index.css";
import  App  from "./pages/App";
 function  Welcome () {
  return (
  <>
    <Nav></Nav>
    <LandingPage></LandingPage>
 </>
  );
}
export default Welcome;