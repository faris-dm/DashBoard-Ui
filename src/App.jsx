import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

  // ✅ This is your route map (your app's navigation brain)
  const router = createBrowserRouter([
    {
      path: "/", // default page
      element: (
        <>
          <Slide isVisible={isSlideVisible} />
          <Dashboard toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/data-value",
      element: (
        <>
          <Slide isVisible={isSlideVisible} />
          <DataValue toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/threat",
      element: (
        <>
          <Slide isVisible={isSlideVisible} />
          <Threat toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/security",
      element: (
        <>
          <Slide isVisible={isSlideVisible} />
          <Security toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/network",
      element: (
        <>
          <Slide isVisible={isSlideVisible} />
          <Network toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/anti-theft",
      element: (
        <>
          <Slide isVisible={isSlideVisible} />
          <Theif toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
    {
      path: "/settings",
      element: (
        <>
          <Slide isVisible={isSlideVisible} />
          <Setting toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
        </>
      ),
    },
  ]);

  // ✅ Return the router provider to activate the routes
  return <RouterProvider router={router} />;
}

export default App;
