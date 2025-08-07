import React from "react";
import usaflag from "./../../assets/images/usaFlag.svg";
import { AiOutlineDown } from "react-icons/ai";
import bellicon from "./../../assets/images/bellicon.svg";
import eyebalance from "./../../assets/images/eyebalance.svg";
import profilepic from "./../../assets/images/profilepic.svg";

const SubNavRight = () => {

    return (
        <>
        <div className="rightcontent flex justify-between items-center max-w-[618px]  w-full  pr-1  ">

                    <div className=" countryname flex items-center  sm:px-3 py-2 rounded-[8px] sm:border border-Dunkgrey max-w-[148px] w-full ">
                        <img src={usaflag} alt="" className="w-5 h-5 hidden sm:block" />
                        <p className="font-inter text-xs  sm:text-[14px] sm:font-medium sm:leading-[14px] sm:px-2">Eng (USA)</p>
                        <AiOutlineDown className="text-sm hover:cursor-pointer" />
                    </div>

                    <div className=" bellouter  sm:max-w-[138px] w-full flex justify-center items-center">
                        <img src={bellicon} alt="" className="hover:cursor-pointer"/>
                    </div>
                    <div className=" outerbalance  flex flex-col justify-center text-center sm:max-w-[140px] w-full">
                        <div className="content flex ga-1 items-center justify-center sm:justify-start w-full justify-center ">
                            <img src={eyebalance} alt="" className='h-6 w-4 mr-1 '/>
                            <p className="hidden sm:block">Balance</p>
                        </div>
                        <div className="balance ">
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className=" outerprofile   sm:max-w-[192px] w-full flex justify-between items-center gap-3">
                        <div className="profileimg w-[38px] h-[38px]">
                            <img src={profilepic} alt="" className="w-[38px] h-[38px]"/>
                        </div>
                        <div className="profilecontent hidden sm:block">
                            <p className='font-inter text-sm font-semibold '>Musfiq</p>
                            <p className='font-inter text-xs font-normal'>Musfiq@gmail.com </p>
                        </div>
                        <div className="icon">
                            <AiOutlineDown className='h-4 w-4 hover:cursor-pointer' />
                        </div>
                    </div>

                </div>
        </>
    );
};

export default SubNavRight;