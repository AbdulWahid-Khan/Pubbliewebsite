import React from "react";
import usaflag from "./../../assets/images/usaflag.svg";
import { AiOutlineDown } from "react-icons/ai";
import bellicon from "./../../assets/images/bellicon.svg";
import eyebalance from "./../../assets/images/eyebalance.svg";
import profilepic from "./../../assets/images/profilepic.svg";

const SubNavRight = () => {

    return (
        <>
        <div className="rightcontent flex justify-between items-center w-[618px]  ">


                    <div className="countryname flex items-center  px-3 py-2 rounded-[8px] border border-Dunkgrey max-w-[148px] w-full ">
                        <img src={usaflag} alt="" className="w-5 h-5" />
                        <p className="font-inter text-[14px] font-medium leading-[14px] px-2">Eng (USA)</p>
                        <AiOutlineDown className="text-sm" />
                    </div>

                    <div className="bellouter max-w-[138px] w-full flex justify-center items-center">
                        <img src={bellicon} alt="" />
                    </div>
                    <div className="outerbalance max-w-[140px] w-full">
                        <div className="content flex ga-1 items-center justify-start">
                            <img src={eyebalance} alt="" className='h-3 w-2'/>
                            <p>Balance</p>
                        </div>
                        <div className="balance">
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className="outerprofile w-[138px] w-full flex justify-between items-center gap-3">
                        <div className="profileimg">
                            <img src={profilepic} alt="" />
                        </div>
                        <div className="profilecontent">
                            <p className='font-inter text-sm font-semibold '>Musfiq</p>
                            <p className='font-inter text-sm font-normal'>Musfiq@gmail.com </p>
                        </div>
                        <div className="icon">
                            <AiOutlineDown className='h-4 w-4' />
                        </div>
                    </div>

                </div>
        </>
    );
};

export default SubNavRight;