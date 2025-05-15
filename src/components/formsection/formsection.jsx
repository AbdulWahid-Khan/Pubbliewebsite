import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import lefttopballoon from "./../../assets/images/topballoon.svg";
import righttopballoon from "./../../assets/images/bottomballoon.svg";
import personpic from "./../../assets/images/personpic.svg";
import { IoCallOutline } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import bgblue from "./../../assets/images/bgblueimg.svg";
import facebook from "./../../assets/images/facebookiocn.svg";
import linkdin from "./../../assets/images/linkedinicon.svg";
import instragram from "./../../assets/images/instagramicon.svg";
import Pubblieicon from "./../../assets/images/pubblieicon.png";
import publietexticon from "./../../assets/images/pubblietexticon.png";
import youtubeicon from "./../../assets/images/youtube.svg";
import facebookicon from "./../../assets/images/facebook.svg";
import instagramicon from "./../../assets/images/instagram.svg";
import linkedicon from "./../../assets/images/linkedin.svg";
import pubbliewhite from "./../../assets/images/pubbliewhite.svg";

const Formsection = () => {
  return (
    <>
      <div className="main px-[60px]  gap-[21px]  flex bg-[#f7f7f7] justify-center">
        <div className="leftcontent w-[689px] pt-[31px] px-[30px] pb-[20px] bg-white rounded-[22px]">
          <div className="header ">
            <p className="text-Primary text-lg font-bold font-inter ">
              Get in touch
            </p>
            <h3 className="text-[32px] font-bold font-inter">
              Let's Chat , Reach Out to Us
            </h3>
          </div>

          <p className="text-base font-inter w-[604px] font-normal pt-[42px]">
            have questions or feedback? we’re here to help. Send us a message ,
            and we’ll respond within 24 hours.
          </p>
          <div className="input flex gap-5 pt-[42px] ">
            <label htmlFor="firstname text-sm font-medium">
              First name
              <input
                type="text"
                className="pl-3 py-4 w-full outline-none text-sm font-inter bg-[#FAFAFA]"
                placeholder="Enter first name"
              />
            </label>
            <label
              htmlFor="firstname "
              className="font-inter text-sm font-medium"
            >
              Last name
              <input
                type="text"
                className="pl-3 py-4 w-full outline-none text-sm font-inter "
                placeholder="Enter first name"
              />
            </label>
          </div>
          <div className="email">
            <label htmlFor="email" className="text-sm font-inter font-medium">
              Email
              <input
                type="email"
                className="pl-3 py-4  outline-none w-full text-sm font-inter "
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className="textarea">
            <label
              htmlFor="textarea"
              className="text-sm font-inter font-medium ]"
            >
              Message
              <textarea
                type="textarea"
                className="pl-3 py-4  outline-none w-full text-sm font-inter min-h-[170px]"
                placeholder="Enter your message"
              />
            </label>
          </div>
          <div className="radio button">
            <label htmlFor="radio" className="flex">
              {" "}
              <input type="radio" className=" pr-4" />{" "}
              <p className="pl-4">
                {" "}
                I agree to our friendly{" "}
                <span className="underline">privacy policy</span>{" "}
              </p>
            </label>
          </div>
          <div className="buttoncontrolls flex justify-end items-center pt-[42px]">
            <div className="button relative flex justify-between items-center  w-[173px] h-full">
              <button className="absolute left-0 bg-Primary max-w-[120px] h-[52px] w-full  rounded-full text-lg text-white font-Dmsans">
                Submit
              </button>
              <div className="w-[27px] h-[22px] bg-Primary absolute right-[42px]"></div>
              <button className="bg-Primary absolute right-0 flex justify-center items-center  rounded-full text-lg text-white font-Dmsans w-[52px] h-[52px] ">
                <BsFillSendFill className="w-[20px] h-[20px] hover:rotate-45 duration-800 " />
              </button>
            </div>
          </div>
        </div>

        <div className="rightcontentent w-[610px] h-[710px]	bg-[#FDFDFD]  pb-[26px]">
          <div className="images relative w-[610px] h-[397px] overflow-hidden rounded-[22px]">
            <div className="bgcolor bg-[#006EFF] blur-[200px] w-[484px] h-[242px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "></div>

            <img
              src={lefttopballoon}
              alt=""
              className="absolute left-0 top-0 w-[176px] h-[176px]"
            />
            <img
              src={personpic}
              alt=""
              className="w-[472px] h-[397px] absolute top-0 left-1/2 -translate-x-1/2 "
            />
            <img
              src={righttopballoon}
              alt=""
              className="absolute right-0 bottom-0 w-[176px] h-[176px]"
            />
          </div>
          <div className="contactpart pl-5">
            <div className="mailcontent flex  gap-6 items-center pt-[42px] ">
              <div className="mail w-[60px] h-[60px] p-3.5 bg-[rgba(50,139,255,0.16)] rounded-full">
                <FaRegEnvelope className="text-Primary w-[32px] h-[32px] " />
              </div>
              <div className="maintext flex flex-col gap-1.5">
                <p className="text-base font-medium font-inter ">Email</p>
                <p className="text-base font-normal font-inter text-Darkgrey ">
                  pubblie@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="mailcontent flex  gap-6 items-center pt-3 pl-5">
            <div className="mail w-[60px] h-[60px] p-3.5 bg-[rgba(50,139,255,0.16)] rounded-full">
              <IoCallOutline className="text-Primary w-[32px] h-[32px]" />
            </div>
            <div className="maintext flex flex-col gap-1.5">
              <p className="text-base font-medium font-inter ">Phone</p>
              <p className="text-base font-normal font-inter text-Darkgrey ">
                (02520)43568901
              </p>
            </div>
          </div>
          <div className="iocns flex justify-center gap-6 items-center pt-[35px] ">
            <img src={facebook} alt="" />
            <img src={linkdin} alt="" />
            <img src={instragram} alt="" />
          </div>
        </div>
      </div>
      <div className="bottom bg-[#010C1B] pb-6  overflow-hidden flex flex-col relative justify-center items-center bg-grey pt-[30px] px-[60px]  ">
        <div className="pubblieiocn flex gap-4 pb-3.5">
          <img src={Pubblieicon} alt="" className="w-[29px] h-[34px]" />
          <img src={pubbliewhite} alt="" className="w-[75px] h-[26px] " />
        </div>
        <div className="flex  h-[1px] bg-[#C1C7CD] w-full"></div>

        <div className="lower flex pt-4 items-center text-center justify-between w-full  ">
          <p className="text-sm font-inter text-white ">
            pubblie @ 202X. All rights reserved.
          </p>
          <div className="flex gap-2 items-center">
            <img src={youtubeicon} alt="" className="w-[24px] h-[24px]" />
            <img src={facebookicon} alt="" className="w-[24px] h-[24px]" />
            <img src={instagramicon} alt="" className="w-[24px] h-[24px]" />
            <img src={linkedicon} alt="" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <div className="bg  w-[1000px] h-[124px] bg-Primary  blur-[200px] absolute top-0 left-1/2 -translate-x-1/2 rounded-[50%] "></div>
      </div>
    </>
  );
};

export default Formsection;
