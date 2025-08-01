
import React, { useEffect, useState } from "react";
import SideBar from "../asidebar/sideBar";
import SabNavbar from "../subNavbar/sabNavbar";
import { Outlet } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Layout = () => {
  const [aside, setsidebar] = useState(false)
  const [icon, setIcon] = useState()





  return (
    <>
      <div
        className={`sm:hidden fixed top-0 left-0 z-[999] bg-red-300 w-full h-full overflow-hidden ${aside ? "block" : "hidden"
          }`}
      >
        <SideBar aside={aside} setsidebar={setsidebar} />
      </div>
      <div className="main flex sm:max-w-[1920px] w-full sm:justify-between  relative ">

        <div className="sidebar hidden  sm:flex sm:w-[232px]  sm:fixed sm:top-0 sm:left-0 ">
          <SideBar aside={aside} setsidebar={setsidebar} />
        </div>




        <div className="dashboard w-full sm:ml-[232px]  sm:w-[calc(100%-232px)]">
          <SabNavbar aside={aside} setsidebar={setsidebar} />
          <Outlet />
        
        </div>
      </div>
    </>
  )
}

export default Layout;