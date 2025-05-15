import React from "react";
import herotopspring from "./../../assets/images/herotopspring.svg";
import herobottomspring from "./../../assets/images/herobottonspring.svg";
import firstimg from "./../../assets/images/firstimage.svg";
import secondimg from "./../../assets/images/secondimg.svg";
import thirdimg from "./../../assets/images/thirdimage.svg";
import fourthimg from "./../../assets/images/fourthimage.svg";
import arrowicon from "./../../assets/images/arrowicon.svg";
import firsttext from "./../../assets/images/bottomtext1.svg";
import secondtext from "./../../assets/images/bottomtext2.svg";
import thirdtext from "./../../assets/images/bottomtext3.svg";
import fourthtext from "./../../assets/images/bottomtext4.svg";
import fifthtext from "./../../assets/images/bottomtext5.svg";
import Cicon from "./../../assets/images/Cicon.svg";
import paymenticon from "./../../assets/images/walleticon.svg";
import profileicon from "./../../assets/images/profileicon.svg";
import { MdArrowOutward } from "react-icons/md";

const Herosection = () => {
  return (
    <>
      <div className="outer">
        <div className="main w-full relative h-[920px]">
          <div className="main flex h-full w-full relative">
            <img
              src={herotopspring}
              alt=""
              className=" absolute top-0 right-0 z-0    "
            />
            <img
              src={herotopspring}
              alt=""
              className=" absolute bottom-0 -left-30 z-20  w-[253px] h-[253px]  "
            />

            <div className=" absolute bg-Navyblue  opacity-70px blur-[200px] elipse w-[832px] h-[124px] rounded-[50%] left-1/2 -translate-x-1/2 top-0 z-30 "></div>
            <div className="maintext  absolute top-[124px] left-1/2 -translate-x-1/2 max-w-[817px] w-full max-h-[101px] h-full ">
              <p className="text-[54px] font-bold font-inter text-Black tracking-[1.08px] text-center  z-40 leading-[114%]">
                Transform Your Campaigns with{" "}
                <span className="text-Primary">Pubblie</span>
              </p>
            </div>
            <div className="w-full h-[130px] elipse  rounded-[50%] absolute top-[245px] left-1/2 -translate-x-1/2 z-20  bg-white"></div>
            <div className="absolute top-[310px] images flex w-full justify-between gap-[80px] z-0 ">
              <img src={firstimg} alt="" />
              <img src={secondimg} alt="" />
              <img src={thirdimg} alt="" />
              <img src={fourthimg} alt="" />
            </div>
            <div className="w-full h-[131px] elipse  rounded-[50%] absolute top-[530px] left-1/2 -translate-x-1/2 z-20  bg-white"></div>
            <p className="text-lg font-inter text-Grey absolute top-[561px] left-1/2 -translate-x-1/2 max-w-[800px] w-full text-center z-20">
              Connecting Advertisers and Influencers for Seamless Campaign
              Success.
            </p>
            <div className="button flex justify-center w-full absolute  top-[695px] left-1/2 -translate-x-1/2 ">
              <div className="button relative flex justify-between items-center  w-[320px] h-full">
                <button className="absolute left-0 bg-Primary max-w-[268px] h-[52px] w-full  rounded-full text-lg text-white font-Dmsans">
                  Create Account Now
                </button>
                <div className="w-[27px] h-[22px] bg-Primary absolute right-[42px]"></div>
                <button className="bg-Primary group group-hover:bg-white  absolute right-0 flex justify-center items-center  rounded-full text-lg text-white font-Dmsans w-[52px] h-[52px] cursor-pointer">
                  <MdArrowOutward
                    alt=""
                    className=" duration-1000 group-hover:rotate-45 "
                  />
                </button>
              </div>
            </div>
            <div className="bottomtextimages  flex justify-around absolute top-[725px] left-1/2 -translate-x-1/2 w-full pl-4 ">
              <div className="text ">
                <p className="font-inter text-[22px] font-semiblod ">22,000+</p>
                <p className="font-inter text-[14px] font-semiblod">
                  happy clients
                </p>
              </div>
              <img src={firsttext} alt="" className="w-[159px] h-[50px] " />
              <img src={secondtext} alt="" className="w-[159px] h-[50px] " />
              <img src={thirdtext} alt="" className="w-[159px] h-[50px] " />
              <img src={fourthtext} alt="" className="w-[159px] h-[50px] " />
              <img src={fifthtext} alt="" className="w-[159px] h-[50px] " />
            </div>

            <div className="z-30 absolute top-[850px] bottom w-full bg-linear-to-r from-[#3579F6] to-[#1F4790] h-[70px]">
              <div className="content flex items-center justify-between max-w-[840px] w-full h-full  mx-auto">
                <div className="leftcontent flex items-center gap-1.5">
                  <img src={Cicon} alt="" className="" />
                  <p className="text-base font-inter font-medium text-white">
                    Exclusive content rights
                  </p>
                </div>
                <div className="middlecontent flex gap-1.5 items-center">
                  <img src={paymenticon} alt="" />
                  <p className="text-base font-inter font-medium text-white">
                    Payment handling
                  </p>
                </div>
                <div className="lastcontent flex gap-1.5 items-center">
                  <img src={profileicon} alt="" />
                  <p className="text-base font-inter font-medium text-white">
                    Access 100,000+ creators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
