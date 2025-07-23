import React from "react";
import headingimg from "./../../assets/images/pubblieimgtxt.svg";
import logouticon from "./../../assets/images/logouticon.svg"
import { AiOutlineHome } from "react-icons/ai";
import { PiSpeakerHigh } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { FaDolly } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
const SideBar = () => {
    const navigate = useNavigate();


    return (
        <>

            <div className="main w-[232px] pl-2.5 min-h-screen pr-3 flex flex-col   pb-5 ">
                <div className="workingarea w-[210px] flex flex-col h-full py-3  ">
                    <div className="headingicon mt-[25px]  pl-3 flex flex-col  w-[121px] h-[42px]">
                        <img src={headingimg} alt="" className="" />
                    </div>
                    <div className="list flex flex-col  items-between justify-between h-full   ">
                        <ul className="flex flex-col gap-[11px]    ">
                            <li className="h-full hover:cursor-pointer">
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)] "}`}
                                    onClick={() => navigate('/')}>
                                    <AiOutlineHome size={24} />
                                    Home
                                </NavLink>
                            </li>
                            <li className="h-full hover:cursor-pointer">
                                <NavLink
                                    to="/compaigns"
                                    className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)] "}`}
                                >
                                    <PiSpeakerHigh size={24} />
                                    <span className="font-inter text-sm">Campaigns</span>
                                    <IoIosArrowForward />
                                </NavLink>
                                
                            </li>
                            <li className="h-full">
                                <NavLink
                                    to="/wallet"
                                     className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)]"}`}
                                >
                                    <CiWallet size={24} />
                                    My Wallet
                                </NavLink>
                            </li>

                            <li className="h-full">
                                <NavLink
                                    to="/shipments"
                                    className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)]"}`}
                                >
                                    <FaDolly size={24} />
                                    Shipments
                                </NavLink>
                            </li>

                            <li className="h-full">
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)] "}`}
                                >
                                    <CgProfile size={24} />
                                    Profile
                                </NavLink>
                            </li>

                            <li className="h-full">
                                <NavLink
                                    to="/settings"
                                    className={({ isActive }) => `${isActive ? "text-black flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3 bg-[rgb(245,245,245)] w-full h-full" : "flex flex-row items-center gap-2.5 pl-3 pr-4.5 py-3  w-full h-full text-[rgb(158,158,158)]"}`}
                                >
                                    <IoSettingsOutline size={24} />
                                    Settings
                                </NavLink>
                            </li>
                        </ul>
                        <button className="flex gap-3 items-center  w-full py-3 pl-3 hover:cursor-pointer"> <img src={logouticon} alt="" />Logout </button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SideBar;