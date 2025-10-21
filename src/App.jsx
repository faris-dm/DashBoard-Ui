import { useState } from "react";
import Dashboard from "./componts/Dashboard";
import Threat from "./componts/threatPage";
import DataValue from "./componts/DataValuet";
import Security from "./componts/security";
import Network from "./componts/Network";
import Theif from "./componts/AntiThef";
import Setting from "./componts/setting";
import Slide from "./componts/Slide";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  const [isSlideVisible, setIsSlideVisible] = useState(false);

  return (
    <>
      <Slide isVisible={isSlideVisible} />
      <Dashboard toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
      {/* <Threat toggleSlide={() => setIsSlideVisible(!isSlideVisible)} /> */}
      {/* <DataValue toggleSlide={() => setIsSlideVisible(!isSlideVisible)} /> */}
      {/* <Security toggleSlide={() => setIsSlideVisible(!isSlideVisible)} /> */}
      {/* <Network toggleSlide={() => setIsSlideVisible(!isSlideVisible)} /> */}
      {/*  network has a problem with the  fixed nav bar */}
      {/* <Theif toggleSlide={() => setIsSlideVisible(!isSlideVisible)} /> */}
      {/* <Setting toggleSlide={() => setIsSlideVisible(!isSlideVisible)} /> */}
    </>
  );
}

export default App;
