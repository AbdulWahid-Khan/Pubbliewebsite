import React from "react";
import Pubblieicon from "./../../assets/images/pubblieicon.png";
import publietexticon from "./../../assets/images/pubblietexticon.png";

const Navbar = () => {
  return (
    <>
      <div className="main px-[60px] py-4 flex justify-between items-center bg-white absolute w-full z-40">
        <div className="lefticon  flex gap-2.5">
          <img src={Pubblieicon} alt="" className="w-[29px] h-[34px]" />
          <img src={publietexticon} alt="" className="w-[76px] h-[26px]" />
        </div>
        <div className="middlepart flex max-w-[380px] w-full ">
          <ul className="flex justify-between w-full ">
            <li className="text-sm text-Grey font-inter font-medium">
              <a href="#"> About</a>
            </li>
            <li className="text-sm text-Grey font-inter font-medium">
              <a href="#">Features</a>
            </li>
            <li className="text-sm text-Grey font-inter font-medium">
              <a href="#">How it works</a>
            </li>
            <li className="text-sm text-Grey font-inter font-medium">
              <a href="#"> Contact us</a>
            </li>
          </ul>
        </div>
        <div className="rightpart flex max-w-[411px] w-full items-center justify-between ">
          <p className="text-sm text-black font-inter cursor-pointer">
            Become a Creator
          </p>
          <button className="max-w-[160px] w-full px-4.5 pt-[7px] pb-2.5 text-sm bg-black rounded-full text-white font-inter font-normal cursor-pointer">
            Log in as a Brand
          </button>
          <button className="px-[22px] py-2.5 bg-Navyblue rounded-full text-sm text-white max-w-[113px] w-full font-inter text-center cursor-pointer">
            Sign up →
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
