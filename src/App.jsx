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

// function App() {
//   const [isSlideVisible, setIsSlideVisible] = useState(false);
//   // const toggleSlide = () => setIsSlideVisible((prev) => !prev);

//   // ✅ This is your route map (your app's navigation brain)
//   const router = createBrowserRouter([
//     {
//       path: "/", // default page
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Dashboard toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/DataValuet",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <DataValue toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/threat",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Threat toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/DeviceSecurity",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Security toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/NetworkProtection",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Network toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/Anti-theft",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Theif toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/settings",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Setting toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//   ]);

//   // ✅ Return the router provider to activate the routes
//   return <RouterProvider router={router} />;
// }

// export default App;

// function App() {
//   const [isSlideVisible, setIsSlideVisible] = useState(false);
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Dashboard toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/DataValuet",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <DataValue toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/threat",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Threat toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/DeviceSecurity",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Security toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/Anti-theft",
//       element: (
//         <>
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Theif toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//     {
//       path: "/settings",
//       element: (
//         <>
//           // //{" "}
//           <Slide isVisible={isSlideVisible} setIsVisible={setIsSlideVisible} />
//           <Setting toggleSlide={() => setIsSlideVisible(!isSlideVisible)} />
//         </>
//       ),
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// export default App;

function App() {
  const [isSlideVisible, setIsSlideVisible] = useState(false);

  const router = createBrowserRouter([
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
          <Theif toggleSlide={() => !isSlideVisible} />
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
}

export default App;
