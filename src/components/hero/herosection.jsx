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
        <div className="">
        <div className="main relative w-full  xl:min-h-[933px] h-full">
          <img
              src={herotopspring}
              alt=""
              className=" absolute -top-10 -right-0 z-0  w-[253px] h-[253px] hidden lg:block  "
            />
            <img
              src={herotopspring}
              alt=""
              className=" absolute bottom-0 -left-30   w-[253px] h-[253px] hidden lg:block "
            />
         <div className=" justify-self-center bg-Navyblue  opacity-[68%] w-[320px] blur-[100px] lg:blur-[200px] elipse lg:w-[832px] h-[124px] rounded-[50%] z-20 absolute top-[0px] left-1/2 -translate-x-1/2  "></div>
          <div className="main flex h-full w-full relative ">
            
            


            <div className="maintext  mt-3 sm:mt-[124px] relative flex items-center justify-center mx-auto  max-w-[817px] w-full">
              <p className=" text-[35px] font-bold font-inter z-20  leading-[114%] sm:text-[54px] sm:font-bold font-inter text-Black tracking-[1.08px] text-center leading-[114%] absolute top-1  ">
                Transform Your Campaigns with{" "}
                <span className="text-Primary">Pubblie</span>
              </p>
            </div>
           <div className="hidden xl:block w-full h-[131px] elipse  rounded-[50%] absolute top-[164px] left-1/2 -translate-x-1/2 z-10  bg-white"></div>
            <div className=" absolute top-[180px] sm:top-[228px] images flex w-full justify-center sm:justify-between gap-[40px] 2xl:gap-[80px] z-0 ">
              <img src={firstimg} alt="" className="hidden sm:block"/>
              <img src={secondimg} alt="" className="hidden lg:block"/>
              <img src={thirdimg} alt="" className="hidden xl:block" />
              <img src={firstimg} alt="" className="hidden sm:block"/>
              <img src={fourthimg} alt="" className=""/>

            </div>
            <div className=" hidden sm:block  w-full h-[131px] elipse  rounded-[50%] absolute sm:top-[445px] left-1/2 -translate-x-1/2 z-10  bg-white"></div>
            <p className="text-sm sm:text-lg font-inter text-Grey absolute top-[513px] left-1/2 -translate-x-1/2 max-w-[800px] w-full text-center z-20 ">
              Connecting Advertisers and Influencers for Seamless Campaign
              Success.
            </p>
            <div className="button  flex justify-center w-full absolute top-[580px] sm:top-[560px] left-1/2 -translate-x-1/2 z-20">
              <div className="button relative  flex justify-between items-center  w-[320px] h-full  rounded-full bg-white ">
                <button className=" left-0 bg-Primary max-w-[268px] h-[52px] w-full  rounded-full text-lg text-white font-Dmsans  shadow-[0px_26px_26px_rgba(53,121,246,0.62)]">
                  Create Account Now
                </button>
                <div className="w-[27px] h-[22px] bg-Primary absolute right-[42px]"></div>
                <button className="bg-Primary group group-hover:bg-white  absolute right-0 flex justify-center items-center  rounded-full text-lg text-white font-Dmsans w-[52px] h-[52px] cursor-pointer shadow-[0px_20px_26px_rgba(53,121,246,0.62)]">
                  <MdArrowOutward
                    alt=""
                    className=" duration-1000 group-hover:rotate-45 "
                  />
                </button>
              </div>
            </div>
            

           
          </div>
          <div className="bottomtextimages  flex mt-[615px] md:mt-[603px]  max-w-[1800px] mx-auto  justify-between items-center w-full justify-between px-4">
              <div className="text flex flex-col text-center ">
                <p className="font-inter text-[22px] font-semiblod ">22,000+</p>
                <p className="font-inter text-[14px] font-semiblod leading-[20px]">
                  happy clients
                </p>
              </div>
              <img src={firsttext} alt="" className="w-[130px] h-[140px] sm:w-[159px] hidden sm:h-[50px] " />
              <img src={secondtext} alt="" className="w-[130px] h-[140px] sm:w-[159px] sm:h-[50px] hidden sm:block " />
              <img src={thirdtext} alt="" className="w-[130px] h-[140px] sm:w-[159px] sm:h-[50px] " />
              <img src={fourthtext} alt="" className="w-[130px] h-[140px] sm:w-[159px] sm:h-[50px] hidden md:block" />
              <img src={fifthtext} alt="" className="w-[130px] h-[140px] sm:w-[159px] sm:h-[50px] hidden md:block" />
            </div>
        <div className="z-30 absolute px-1  lg:top-[867px] w-full bg-linear-to-r from-[#3579F6] to-[#1F4790] h-[70px]">
              <div className="content flex items-center justify-between max-w-[840px] w-full h-full  mx-auto">
                <div className="leftcontent flex items-center gap-1.5">
                  <img src={Cicon} alt="" className="hidden sm:block" />
                  <p className="text-sm sm:text-base font-inter font-medium text-white">
                    Exclusive content rights
                  </p>
                </div>
                <div className="middlecontent flex gap-1.5 items-center">
                  <img src={paymenticon} alt="" className="hidden sm:block"/>
                  <p className="text-sm sm:text-sm sm:text-base  font-inter font-medium text-white">
                    Payment handling
                  </p>
                </div>
                <div className="lastcontent flex gap-1.5 items-center">
                  <img src={profileicon} alt="" className="hidden sm:block"/>
                  <p className="text-sm sm:text-base font-inter font-medium text-white">
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
