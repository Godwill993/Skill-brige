import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navi from "./navi.jsx";
import LandingPage from "./landigPage.jsx";
import FeaturesSection from "./card/cardprop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navi />
    <LandingPage />
    <FeaturesSection />
  </StrictMode>
);
