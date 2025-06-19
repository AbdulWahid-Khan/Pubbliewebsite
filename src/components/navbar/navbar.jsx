import React, { useState } from "react";
import Pubblieicon from "./../../assets/images/pubblieicon.png";
import publietexticon from "./../../assets/images/pubblietexticon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main px-5 xl:px-[60px] py-4 flex justify-between items-center bg-white absolute w-full z-40">
        <div className="lefticon flex gap-2.5">
          <img src={Pubblieicon} alt="" className="w-[29px] h-[34px]" />
          <img src={publietexticon} alt="" className="w-[76px] h-[26px]" />
        </div>

        <div className="middlepart hidden xl:flex max-w-[380px] w-full">
          <ul className="flex justify-between w-full">
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

        <div className="rightpart hidden xl:flex max-w-[411px] w-full items-center justify-between">
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

     
        <div
          className="hamburg hover:bg-Grey rounded-[10px] p-2.5 block xl:hidden"
          onClick={toggleMenu}
        >
          {
            isOpen ? <RxCross2 className="h-8 w-8" /> : <GiHamburgerMenu className="h-8 w-8" />
          }
        </div>
      </div>

    
      {isOpen && (
        <div className="px-5 vertical block xl:hidden bg-linear-to-bl from-violet-500 to-fuchsia-500 absolute top-[60px] w-full h-full z-30">
          <div className="middle flex flex-col gap-4">
            <ul className="flex flex-col justify-between w-full gap-6">
              <li className="text-md text-Grey font-inter font-large">
                <a href="#" onClick={toggleMenu}> About</a>
              </li>
              <li className="text-md text-Grey font-inter font-large">
                <a href="#" onClick={toggleMenu}>Features</a>
              </li>
              <li className="text-md text-Grey font-inter font-large">
                <a href="#" onClick={toggleMenu}>How it works</a>
              </li>
              <li className="text-md text-Grey font-inter font-large">
                <a href="#" onClick={toggleMenu}> Contact us</a>
              </li>
            </ul>
          </div>
          <div className="rightpart flex flex-col max-w-[411px] w-full items-start py-4 justify-between">
            <p
              className="text-md text-Grey font-inter font-large cursor-pointer py-4"
              onClick={toggleMenu}
            >
              Become a Creator
            </p>
            <div className="buttons flex flex-col gap-4 w-full">
              <button
                onClick={toggleMenu}
                className="max-w-[160px] w-full px-4.5 pt-[7px] pb-2.5 text-sm bg-black rounded-full text-white font-inter font-normal cursor-pointer"
              >
                Log in as a Brand
              </button>
              <button
                onClick={toggleMenu}
                className="px-[22px] py-2.5 bg-Navyblue rounded-full text-sm text-white max-w-[113px] w-full font-inter text-center cursor-pointer"
              >
                Sign up →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
