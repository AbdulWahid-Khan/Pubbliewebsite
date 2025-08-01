
import React from "react";
import headingimg from "./../../assets/images/pubblieimgtxt.svg";
import logouticon from "./../../assets/images/logouticon.svg";
import { AiOutlineHome } from "react-icons/ai";
import { PiSpeakerHigh } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { FaDolly } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({  setsidebar }) => {
  // Handle sidebar toggle for mobile screens
  const handleClick = () => {
    if (window.innerWidth < 640) {
      setsidebar(false); // Use setsidebar directly
      
      
    }
  };

  return (
    <div className="main max-w-[768px] w-full md:w-[232px] pl-2.5 pr-3 flex flex-col pb-5 overflow- flex items-between h-screen">
      <div className="workingarea max-w-[768px] w-full sm:w-[210px] flex flex-col h-full py-3 ">
        <div className="headingicon mt-[25px] pl-3 flex flex-col w-[121px] h-[42px]">
          <img src={headingimg} alt="Logo" />
        </div>
        <div className="list flex flex-col justify-between h-full">
          <ul className="flex flex-col gap-[11px]">
            <li className="h-full hover:cursor-pointer"  onClick={handleClick}>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 w-full h-full ${
                    isActive ? "text-black bg-[rgb(245,245,245)]" : "text-[rgb(158,158,158)]"
                  }`
                }
               
              >
                <AiOutlineHome size={24} />
                Home
              </NavLink>
            </li>
            <li className="h-full hover:cursor-pointer"  onClick={handleClick}>
              <NavLink
                to="/compaigns"
                className={({ isActive }) =>
                  `flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 w-full h-full ${
                    isActive ? "text-black bg-[rgb(245,245,245)]" : "text-[rgb(158,158,158)]"
                  }`
                }
                onClick={handleClick}
              >
                <PiSpeakerHigh size={24} />
                <span className="font-inter text-sm">Campaigns</span>
                <IoIosArrowForward />
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink
                to="/wallet"
                className={({ isActive }) =>
                  `flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 w-full h-full ${
                    isActive ? "text-black bg-[rgb(245,245,245)]" : "text-[rgb(158,158,158)]"
                  }`
                }
                onClick={handleClick}
              >
                <CiWallet size={24} />
                My Wallet
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink
                to="/shipments"
                className={({ isActive }) =>
                  `flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 w-full h-full ${
                    isActive ? "text-black bg-[rgb(245,245,245)]" : "text-[rgb(158,158,158)]"
                  }`
                }
                onClick={handleClick}
              >
                <FaDolly size={24} />
                Shipments
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 w-full h-full ${
                    isActive ? "text-black bg-[rgb(245,245,245)]" : "text-[rgb(158,158,158)]"
                  }`
                }
                onClick={handleClick}
              >
                <CgProfile size={24} />
                Profile
              </NavLink>
            </li>
            <li className="h-full">
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  `flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 w-full h-full ${
                    isActive ? "text-black bg-[rgb(245,245,245)]" : "text-[rgb(158,158,158)]"
                  }`
                }
                onClick={handleClick}
              >
                <IoSettingsOutline size={24} />
                Settings
              </NavLink>
            </li>
          </ul>
          
        </div>
      </div>
      <button className="flex gap-3 items-center w-full py-3 pl-3 hover:cursor-pointer">
            <img src={logouticon} alt="Logout" />
            Logout
          </button>
    </div>
  );
};

export default SideBar;






// import React, { useState } from "react";
// import headingimg from "./../../assets/images/pubblieimgtxt.svg";
// import logouticon from "./../../assets/images/logouticon.svg"
// import { AiOutlineHome } from "react-icons/ai";
// import { PiSpeakerHigh } from "react-icons/pi";
// import { IoIosArrowForward } from "react-icons/io";
// import { CiWallet } from "react-icons/ci";
// import { FaDolly } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
// import { IoSettingsOutline } from "react-icons/io5";
// import { Link, NavLink, useNavigate } from "react-router-dom";

// const SideBar = ({ aside, setsidebar }) => {
//     const navigate = useNavigate();


//     const handleClick = () => {
//         if (window.innerWidth < 640) {
//             props.setsidebar(false)
//         }
//     };


//     return (
//         <>

//             <div className=" main max-w-[768px]  w-full md:w-[232px] pl-2.5  pr-3 flex flex-col   pb-5 overflow-hidden">
//                 <div className="workingarea max-w-[768px]  w-full sm:w-[210px] flex flex-col h-full py-3 bg-green-100  ">
//                     <div className="headingicon mt-[25px]  pl-3 flex flex-col  w-[121px] h-[42px]">
//                         <img src={headingimg} alt="" className="" />
//                     </div>
//                     <div className="list flex flex-col  items-between justify-between h-full  ">
//                         <ul className="flex flex-col gap-[11px] ">
//                             <li className="h-full hover:cursor-pointer">
//                                 <Link
//                                     to="/home"
//                                     className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full " : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)] "}`}
//                                     onClick={() => handleClick()}
//                                 >
//                                     <AiOutlineHome size={24} />
//                                     Home 
//                                 </Link>
//                             </li>
//                             <li className="h-full hover:cursor-pointer">
//                                 <Link
//                                     to="/compaigns"
//                                     className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)] "}`}
//                                     onClick={() => handleClick()}

//                                 >
//                                     <PiSpeakerHigh size={24} />
//                                     <span className="font-inter text-sm">Campaigns</span>
//                                     <IoIosArrowForward />
//                                 </Link>

//                             </li>
//                             <li className="h-full">
//                                 <NavLink
//                                     to="/wallet"
//                                     className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)]"}`}
//                                     onClick={() => handleClick()}

//                                 >
//                                     <CiWallet size={24} />
//                                     My Wallet
//                                 </NavLink>
//                             </li>

//                             <li className="h-full">
//                                 <NavLink
//                                     to="/shipments"
//                                     className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)]"}`}
//                                     onClick={() => handleClick()}

//                                 >
//                                     <FaDolly size={24} />
//                                     Shipments
//                                 </NavLink>
//                             </li>

//                             <li className="h-full">
//                                 <NavLink
//                                     to="/profile"
//                                     className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)] "}`}
//                                     onClick={() => handleClick()}

//                                 >
//                                     <CgProfile size={24} />
//                                     Profile
//                                 </NavLink>
//                             </li>

//                             <li className="h-full">
//                                 <NavLink
//                                     to="/settings"
//                                     className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)]"}`}
//                                     onClick={() => handleClick()}
//                                 >
//                                     <IoSettingsOutline size={24} />
//                                     Settings
//                                 </NavLink>
//                             </li>
//                         </ul>
//                         <button className="flex gap-3 items-center  w-full py-3 pl-3 hover:cursor-pointer"> <img src={logouticon} alt="" />Logout </button>
//                     </div>

//                 </div>




//             </div>
//         </>
//     )
// }

// export default SideBar;