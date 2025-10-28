import { useState } from "react";
import {
  createBrowserRouter,
  RouterContextProvider,
  RouterProvider,
} from "react-router-dom";

// Import all your pages
import Dashboard from "./componts/Dashboard";
import Threat from "./componts/threatPage";
import DataValue from "./componts/DataValuet";
import Security from "./componts/security";
import Network from "./componts/Network";
import Theif from "./componts/AntiThef";
import Setting from "./componts/setting";
import Slide from "./componts/Slide";

import "./App.css";

function App() {
  const [isSlideVisible, setIsSlideVisible] = useState(false);

  const router = createBrowserRouter([
    //  this create...  give a wrapper fun to the linkage of the pages it like env.t
    {
      path: "/",
      element: (
        <>
          <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
          <Dashboard toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/DataValuet",
      element: (
        <>
          <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
          <DataValue toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/threat",
      element: (
        <>
          <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
          <Threat toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/DeviceSecurity",
      element: (
        <>
          <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
          <Security toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/NetworkProtection",
      element: (
        <>
          <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
          <Network toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/Anti-theft",
      element: (
        <>
          <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
          <Theif toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/Settings",
      element: (
        <>
          <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
          <Setting toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
  //    and  RouteProvider is like activator  that activate a  page connection
}

export default App;
