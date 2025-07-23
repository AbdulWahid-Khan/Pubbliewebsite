import React from 'react'
import Nitrocardbg from "./../../assets/images/nitrocardmain.svg"
import pricebg from "./../../assets/images/ratebg.svg"
import nitropiceandflag from "./../../assets/images/nitrocardflag.svg"
import callendericon from "./../../assets/images/callendericon.svg"
import { BsArrowRightShort } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci"
import instagrampic from "./../../assets/images/instagramicon.svg"
import instagram2 from "./../../assets/images/instagram2.svg"
import kawai from "./../../assets/images/kawaipic.svg"
import { GoDotFill } from "react-icons/go";
import videopic from "./../../assets/images/videopic.svg"
import countryicon from "./../../assets/images/countryicon.svg"
import stateicon from "./../../assets/images/star.svg";
import cityicon from "./../../assets/images/city.svg";
import gendericon from "./../../assets/images/genderimg.svg";
import ageicon from "./../../assets/images/ageimg.svg";
import ethnicityicon from "./../../assets/images/ethnicity.svg"
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function NitroCircuspage(className) {
    const pathname = useLocation().pathname;
    const navigate =useNavigate();
    return (
        <> 
            <div className={`card ${className} `}>
                <div className="card flex flex-col lg:flex gap-4 ">
                    <div className="img">
                        <img src={Nitrocardbg} alt="" className='w-[212px] h-[212px]' />
                    </div>
                    <div className="rightcontent">
                        <p className='font-inter text-lg font-bold lg:flex'>Nitro Circus 2024 <span className='px-2.5 pt-[6px] pb-[7px] bg-[#E9FEE7] text-[#2E9300] rounded-[18px] hidden lg:block' >Active</span></p>
                        <p className='font-inter text-sm text-Primary font-medium mt-2'>Public post</p>
                        <div className='relative mt-3'>
                            <img src={pricebg} alt="" />
                            <p className='absolute top-0 left-3 text-white'>R$ 25.00</p>
                        </div>
                        <div className="timing flex items-center gap-2 text-Darkgrey items-center mt-4.5">
                            <p className=""><img src={callendericon} alt="" /></p>
                            <p className="flex items-center gap-2 text-xs lg:text-sm ">Jan 18,25 <span> < BsArrowRightShort /></span>Jan 31,25 </p>
                        </div>
                        <p className='font-inter text=sm leading-[128%] max-w-[903px] w-full text-Darkgrey mt-2.5 text-xs lg:text-sm w-[300px] lg:w-[660px]'>Promote our Spring Collection through Instagram Reels and Stories. Highlight discounts and limited-time offers. Showcase the product in a lively outdoor setting with natural lighting. </p>
                    </div>
                </div>

                <div className="centra">
                    <div className= {`bodyarea flex gap-4  w-full max-w-[1920px] flex  
                    ${pathname ==="/nitrocircus" ? "flex-col lg:flex-row" : "flex-col "} `}>
                        <div className="content pl-[15px] pr-[22px] pt-[13px] py-[28px] gap-[23px] mt-[41px] max-w-[860px] w-full  ">
                            <p className='text-base font-bold font-inter'>Content Requirements</p>
                            <div className="deatilcontnet flex flex-col gap-4 pt-7 ">
                                <div className="firstrow flex items-center justify-between">
                                    <p className='font-inter text-sm font-medium '>Content</p>
                                    <p className='text-xs flex  gap-3  px-2.5 py-1'><CiVideoOn size={18} className='text-Primary' /> video  </p>
                                </div>
                                <div className="firstrow flex items-center justify-between">
                                    <p className='font-inter text-sm font-medium '>Content Type</p>
                                    <p className='text-xs flex  gap-3  px-2.5 py-1'><CiVideoOn size={18} className='text-Primary' /> unboxing video </p>
                                </div>
                                <div className="firstrow flex items-center justify-between">
                                    <p className='font-inter text-sm font-medium '> video duration </p>
                                    <p className='text-xs flex  gap-3  px-2.5 py-1'><CiVideoOn size={18} className='text-Primary' /> 20 seconds </p>
                                </div>
                                <div className="firstrow flex items-center justify-between">
                                    <p className='font-inter text-sm font-medium '> Platforms </p>
                                    <div className='flex flex-row items-center'>
                                        <p className='text-xs flex  gap-3  px-2.5 '><img src={instagram2} size={18} className='text-Primary' /> <span className='py-1'>instgram</span> </p>
                                        <p className='text-xs flex  gap-3  px-2.5'><img src={kawai} size={18} className='text-Primary' /> <span className='py-1'>Kwai</span> </p>
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className={`content pl-[15px] pr-[22px] pt-[13px] py-[28px] gap-[23px] mt-[41px] max-w-[860px] w-full ${className} flex flex-col  `}>
                            <p className='text-base font-bold font-inter'>Content format</p>
                            <div className="deatilcontnet">

                                <div className="time  flex gap-7 ">
                                    <div className="w-[80px] h-[131px]  flex items-center justify-center pt-7">
                                        <p className="w-[80px] h-[131px] rounded-[13px] border-2 border-solid border-Primary flex items-center justify-center">
                                            9:16
                                        </p>
                                    </div>
                                    <div className="portrait flex flex-col justify-center items-start h-[150px] ">
                                        <p className="font-inter text-sm font-medium">Portrait</p>
                                        <p className="font-inter text-sm text-Darkgrey text-center">
                                            Perfect for Instagram reels, TikTok videos, YouTube shorts
                                        </p>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="audience">
                <div className='text-base font-bold font-inter'>Target audience</div>
                <div className='details '>
                    <div className='flex gap-2 pt-6'>
                        <GoDotFill className='text-Primary' />
                        <div>
                            <p className='flex gap-3 items-center font-inter text-sm font-medium'> Content Brief</p>
                            <p className='text-xs font-inter text-Darkgrey pt-2'>Showcase the product in a lively outdoor setting with natural lighting. Use the hashtag #SpringSale2024.</p>
                        </div>
                    </div>
                    <div className='flex gap-2 pt-6'>
                        <GoDotFill className='text-Primary' />
                        <div>
                            <p className='flex gap-3 items-center font-inter text-sm font-medium'> What Should Creators Avoid?</p>
                            <p className='text-xs font-inter text-Darkgrey pt-2'>Showcase the Avoid using competitor products in the background or offensive language</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="guidelines mt-10">
                <div className='text-base font-bold font-inter'>Examples/References (optional)</div>
                <div className='details '>
                    <div className='flex gap-2 pt-6'>
                        <GoDotFill className='text-Primary' />
                        <div>
                            <p className='flex gap-3 items-center font-inter text-sm font-medium'> URL</p>
                            <a className='text-xs font-inter text-Primary pt-2 hover:cursor-pointer'>Showcase the https://www.freepik.com/search?format=search&last_filter=query&last_value=all+influencer&query= </a>
                        </div>
                    </div>
                    <div className='flex gap-2 pt-6'>
                        <GoDotFill className='text-Primary' />
                        <div className='relative '>
                            <p className='flex gap-3 items-center font-inter text-sm font-medium'> video</p>
                            <img src={videopic} alt="" />
                            <p className='bg-black opacity-40 text-white rounded-[6px] absolute right-0.5 top-5 text-[10px] '>00:20</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="taget audience mt-10">
                <div className='text-base font-bold font-inter'>Target audience</div>
                <div className='details '>

                    <div className='flex gap-2 pt-6'>
                        <img src={countryicon} className='text-Primary' />
                        <div>
                            <p className='flex  items-center font-inter text-sm font-medium text-Darkgrey'> Country </p>
                            <p className='text-sm font-medium font-inter  '>Austrailia</p>
                        </div>
                    </div>

                    <div className='flex gap-2 pt-6'>
                        <img src={stateicon} className='text-Primary' />
                        <div>
                            <p className='flex  items-center font-inter text-sm font-medium text-Darkgrey'> State </p>
                            <p className='text-sm font-medium font-inter  '>Melbourne</p>
                        </div>
                    </div>


                    <div className='flex gap-2 pt-6'>
                        <img src={cityicon} className='text-Primary' />
                        <div>
                            <p className='flex  items-center font-inter text-sm font-medium text-Darkgrey'> City </p>
                            <p className='text-sm font-medium font-inter  '>Sydney</p>
                        </div>
                    </div>

                    <div className='flex gap-2 pt-6'>
                        <img src={gendericon} className='text-Primary' />
                        <div>
                            <p className='flex  items-center font-inter text-sm font-medium text-Darkgrey'> Gender </p>
                            <p className='text-sm font-medium font-inter  '>Male</p>
                        </div>
                    </div>

                    <div className='flex gap-2 pt-6'>
                        <img src={ageicon} className='text-Primary' />
                        <div>
                            <p className='flex  items-center font-inter text-sm font-medium text-Darkgrey'> Age </p>
                            <p className='text-sm font-medium font-inter  '>30 - 45</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="taget audience mt-10">
                <div className='text-base font-bold font-inter'>Creative Guidelines</div>
                <div className='details '>







                    <div className='flex gap-2 pt-6'>
                        <img src={gendericon} className='text-Primary' />
                        <div>
                            <p className='flex items-center font-inter text-sm font-medium text-Darkgrey'> Gender </p>
                            <p className='text-sm font-medium font-inter '>Male</p>
                        </div>
                    </div>

                    <div className='flex gap-2 pt-6'>
                        <img src={ageicon} className='text-Primary' />
                        <div>
                            <p className='flex items-center font-inter text-sm font-medium text-Darkgrey'> Age </p>
                            <p className='text-sm font-medium font-inter '>30 - 45</p>
                        </div>
                    </div>

                    <div className='flex gap-2 pt-6'>
                        <img src={ethnicityicon} className='text-Primary' />
                        <div className='flex flex-col justify-start'>
                            <p className='flex  items-center font-inter text-sm font-medium text-Darkgrey'> Ethnicity </p>
                            <p className='text-sm font-medium font-inter  '>white</p>
                        </div>
                    </div>

                </div>
            </div>
 
            <button className='mb-5 mt-4 p-[14px] flex justify-center text-center max-w-[538px] w-full bg-black text-white font-inter text-sm rounded-[6px] hover:cursor-pointer'  onClick={() => navigate('/nitrocircus/applynow')}>Apply for this job</button>
          <Outlet/>
        </>
    )
}

export default NitroCircuspage
