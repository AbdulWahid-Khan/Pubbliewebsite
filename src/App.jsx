import { Routes, Route, BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import About from "./components/about/about";
import SideBar from "./components/asidebar/sideBar";
import Carddetails from "./components/cards/Carddetails";
import Faqsection from "./components/Faq/faqsection";
import Formsection from "./components/formsection/formsection";
import Herosection from "./components/hero/herosection";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Pubblieworks from "./components/pubblieworks/pubblieworks";
import SabNavbar from "./components/subNavbar/sabNavbar";
import Layout from "./components/layout/layout";
import NitroCircuspage from "./components/NitroCircus/NitroCircuspage";
import Applynow from "./components/applynow/applynow";
import Shipments from "./components/shipments/shipments";
import Wallet from "./components/wallet/wallet";
import Profile from "./components/profile/profile";
import Settings from "./components/setting/settings";
import Compaigns from "./components/compaing/compaigns";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [

        {
          index: true, // <-- This loads Home by default
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path:'compaigns',
          element:<Compaigns/>,
        },
        {
          path: "nitrocircus",
          element: <NitroCircuspage />,

        },

        {
          path: "nitrocircus/applynow",
          element: <Applynow />
        },
        
           {
          path: "shipments",
          element: <Shipments />
        },
        {
          path:"wallet",
          element:<Wallet/>
        },
        {
          path:"profile",
          element:<Profile />
        },
        {
          path:'/settings',
          element:<Settings />
        },

     
      ],

    },
  ]);

  return (
    <>


      <RouterProvider router={router} />


    </>
  );
}

export default App;




