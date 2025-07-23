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
import CompaignDetails from "./components/compaigndetails/compaignDetails";
import AudienceBarChart from "./components/chart/BarChart";
import AffilationPost from "./components/affilation/affilationPost";
import CommisionDetails from "./components/commisiondetails/commisionDetails";
import CampaignPageNine from "./components/compaign9/compaignpagenine";
import CampaignWithoutProduct from "./components/campaignwithoutproduct/campaignWithoutProduct";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [

        {
          index: true,
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,

        },
        {
          path: "nitrocircus",
          element: <NitroCircuspage />,
        },

        {
  path: 'compaigns',
  element: <Compaigns />,
  children: [
    {
      path: "campaignwithoutproduct",
      element: <CampaignWithoutProduct />,
    },
  ]
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
          path: "wallet",
          element: <Wallet />
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: '/settings',
          element: <Settings />
        },


      ],

    },
    {
      path: "/compaigndetails",
      element: <CompaignDetails />,
    },
    {
      path: "/affilationpost",
      element: <AffilationPost />,
    },
    {
      path: "/commisiondetails",
      element: <CommisionDetails />,
    },
    {
      path: "/compaignnine",
      element: <CampaignPageNine />,
    },
    {
      path: "/campaignwithoutproduct",
      element: <CampaignWithoutProduct />,
    }


  ]);

  return (
    <>


      <RouterProvider router={router} />


    </>
  );
}

export default App;




