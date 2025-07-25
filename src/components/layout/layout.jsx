
import React from "react";
import SideBar from "../asidebar/sideBar";
import SabNavbar from "../subNavbar/sabNavbar";
import { Outlet } from  "react-router-dom";



const Layout = () => {

    return (
        <>
      <div className="main flex  max-w-[1920px] w-full ">
      <div className="sidebar flex w-full ">
        <SideBar />
        <div className="dashboard  max-w-[1760px] w-full ">
          <SabNavbar />
          <Outlet /> 
        </div>
      </div>
    </div>
        </>
    )
}

export default Layout;