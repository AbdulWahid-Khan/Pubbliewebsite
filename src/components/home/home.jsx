import React, { useState } from "react";
import headingbg from "./../../assets/images/leftbghome.svg";
import { FaSearch } from "react-icons/fa";
import qeeficon from "./../../assets/images/bottleicon.svg";
import { CiVideoOn } from "react-icons/ci"
import { PiImageSquare } from "react-icons/pi";
import pricetag from "./../../assets/images/pricetag.svg"
import cardpic from "./.././../assets/images/homecardbg.svg"
import callendericon from "./../../assets/images/callendericon.svg"
import tiktokpic from "./../../assets/images/tiktok.svg"
import instagrampic from "./../../assets/images/instagramicon.svg"
import { BsArrowRightShort } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { Modal, Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardData = [
    {
      id: 1,
      text: "with Product",
      tiktokpic: tiktokpic,
      instagrampic: instagrampic,
    },
    {
      id: 2,
      text: "without Product",
      tiktokpic: tiktokpic,
      instagrampic: instagrampic,
    },
    {
      id: 3,
      text: "with Product",
      tiktokpic: tiktokpic,
    },
    {
      id: 4,
      text: "without Product",
      instagrampic: instagrampic,
    },
    {
      id: 5,
      text: "with Product",
      tiktokpic: tiktokpic,
    },
    {
      id: 6,
      text: "without Product",
      instagrampic: instagrampic,
    },
    {
      id: 7,
      text: "with Product",
      tiktokpic: tiktokpic,
    },
    {
      id: 8,
      text: "without Product",
      instagrampic: instagrampic,
    },
     {
      id: 9,
      text: "with Product",
      tiktokpic: tiktokpic,
      instagrampic: instagrampic,
    },
    {
      id: 10,
      text: "without Product",
      tiktokpic: tiktokpic,
      instagrampic: instagrampic,
    },
    {
      id: 11,
      text: "with Product",
      tiktokpic: tiktokpic,
    },
    {
      id: 12,
      text: "without Product",
      instagrampic: instagrampic,
    },
  ]

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="home  overflow-x-hidden ">
        <div className="relative max-w-[1740px] w-full h-[158px] mx-.5 bg-Primary ">

          <div className="relative z-10 flex items-center h-full px-6 text-center justify-center">
            <div
              className="absolute inset-0   z-0 w-[200px] h-[158px]"
              style={{ backgroundImage: `url(${headingbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            ></div>

            <div className="searchmain flex flex-col max-w-[504px] w-full">
              <h1 className="text-[26px] font-inter font-medium text-white ">
                Find the right <span className="underline font-bold">Campaign</span> for you
              </h1>
              <div className="searchmain flex items-center justify-between mt-4 bg-white rounded-[6px] ">
                <div className="flex  items-center w-fulldq">
                  <FaSearch className="pl-1.5 text-black" size={26} />
                  <input type="text" placeholder="ex:John doe" className="p-2 rounded-md outline-none w-full" />
                </div>
                <button type="primary" onClick={showModal}> <img src={qeeficon} alt="" className="max-[50px] hover:cursor-pointer" /> </button >
              </div>


            </div>



            <div
              className="absolute right-0  w-[200px] h-[158px]"
              style={{ backgroundImage: `url(${headingbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
            ></div>
          </div>
        </div>


        <div className="horizontalbar flex justify-between max-w-[1740px] w-full mx-auto ">
          <div className="p-4  flex  justify-between max-w-[500px] w-full ">
            <p className="font-inter font-bold text-lg">Recommended Campaigns</p>
            <ul className="flex gap-2.5">
              <li className="hover:cursor-pointer">
                <a
                  to="/"
                  className={({ isActive }) =>
                    `text-center hover:cursor-pointer ${isActive ? "text-primary" : "text-gray-600"}`
                  }
                >
                  All
                </a>
              </li>
              <li className="hover:cursor-pointer">
                <a
                  to="/"
                  className={({ isActive }) =>
                    `text-center hover:cursor-pointer ${isActive ? "text-primary border-bottom border-pimary border-[1px]" : "text-gray-600"}`
                  }
                >
                  Pubblic post
                </a>
              </li>
              <li className="hover:cursor-pointer">
                <a
                  to="/"
                  className={({ isActive }) =>
                    `text-center hover:cursor-pointer ${isActive ? "text-primary" : "text-gray-600"}`
                  }
                >
                  Affilated post
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 bg-gray-100 px-2 items-center">
            <button className="w-[41px] h-[30px] rounded-md border border-blue-400 flex items-center justify-center">
              <CiVideoOn className="w-[18px] h-[18px] text-blue-500" />
            </button>

            <button className="w-[41px] h-[30px] flex items-center justify-center">
              <PiImageSquare className="w-[18px] h-[18px] text-blue-500" />
            </button>
          </div>

        </div>

        {/* Cards for advertisements */}
        <div className="controlling  grid  justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-between 2xl:grid-col-4 max-w-[1740px]    mx-.5   pt-2">


          {
            cardData.map((item) => (
              <div className="main w-[284px] h-[292px] rounded-[6px]    ">
                <div className="image relative w-[284px] h-[131px] ">
                  <img src={cardpic} alt="" className="w-full h-full" />
                  <img src={pricetag} alt="" className="absolute right-0  top-0" />
                </div>
                <p className="font-inter font-bold text-base">Nitro Circus 2024</p>
                <p className="font-inter font-medium text-base text-Darkgrey">Public post <span className="text-base font-inter font-medium">-</span><span>{item.text}</span></p>


                <div className="timing flex items-center gap-2 ">
                  <p className=""><img src={callendericon} alt="" /></p>
                  <p className="flex items-center gap-2">Jan 18,25 <span> < BsArrowRightShort /></span>Jan 31,25 </p>
                </div>
                <div className="video flex items-center">
                  <CiVideoOn className="text-Navyblue " />
                  <p className="flex items-center pr-1 ml-1.5">
                    Video
                    {
                      isModalOpen ? (
                        <>
                          <img src={item.tiktokpic} alt="" className="w-[26px] h-[26px]" />
                          {isModalOpen ? <img src={item.instagrampic} alt="" className="w-[26px] h-[26px]" /> : ""}
                        </>
                      ) : (
                        <> <img src={item.tiktokpic} alt="" className="" />
                          <img src={item.instagrampic} alt="" className="" /></>

                      )
                    }



                  </p>

                </div>
                <button className="flex text-Darkgrey items-center justify-self-center pt-3 hover:text-black hover:cursor-pointer" onClick={() => navigate('nitrocircus')}>
                  View details <IoIosArrowForward />
                </button>
              </div>
            ))
          }
        </div>
      </div>

      {/* Modal */}

      <div className="homemodal ">
        <Modal
          title="Apply filters"
          // closable={{ 'aria-label': 'Custom Close Button' }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}

          closeIcon={null}
          footer={null}
          width={504}
          style={{ marginTop: "25px" }}
        >
          <div className="main ">

            <div className="category ">
              <h3 htmlFor="category" className="font-inter font-medium text-base pt-3">Campaign category</h3>
              <div className="checkbox flex pt-3.5">
                <label htmlFor="All" className="text-sm font-inter text-Darkgrey flex gap-2.5">All
                  <input type="checkbox" /></label>
                <label htmlFor="Public" className="text-sm font-inter text-Darkgrey px-4.5 flex gap-2.5">Public posts
                  <input type="checkbox" /></label>
                <label htmlFor="Affilate" className="text-sm font-inter text-Darkgrey flex gap-2.5">Affilate posts
                  <input type="checkbox" /></label>
              </div>
            </div>
            <div className="category ">
              <h3 htmlFor="category" className="font-inter font-medium text-base pt-3">Content type</h3>
              <div className="checkbox flex pt-3.5">
                <label htmlFor="All" className="text-sm font-inter text-Darkgrey flex gap-2.5">All
                  <input type="checkbox" /></label>
                <label htmlFor="video" className="text-sm font-inter text-Darkgrey px-4.5 flex gap-2.5">Video
                  <input type="checkbox" /></label>
                <label htmlFor="photo" className="text-sm font-inter text-Darkgrey flex gap-2.5">Photo
                  <input type="checkbox" /></label>
              </div>
            </div>
            <div className="category ">
              <h3 htmlFor="category" className="font-inter font-medium text-base pt-3">Social Platform</h3>
              <div className="checkbox flex pt-3.5 items-center">
                <label htmlFor="All" className="text-sm font-inter text-Darkgrey flex gap-2.5">All
                  <input type="checkbox" /></label>
                <label htmlFor="video" className="text-sm font-inter text-Darkgrey px-4.5 flex gap-2.5 items-center">
                  <img src={instagrampic} alt="" />Instagram
                  <input type="checkbox" /></label>
                <label htmlFor="photo" className="text-sm font-inter text-Darkgrey flex gap-2.5"><img src={tiktokpic} alt="" /> TikTok
                  <input type="checkbox" /></label>
              </div>
            </div>



          </div>
          <button className="text-white font-inter text-base font-medium w-full bg-black p-3.5 rounded-[6px] mt-4">Apply now</button>
        </Modal>
      </div>
      <Outlet />
    </>
  );
}

export default Home;