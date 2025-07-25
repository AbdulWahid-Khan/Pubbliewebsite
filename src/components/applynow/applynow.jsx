import React from 'react'
import videoicon from "./../../assets/images/contentvideo.svg"
import { CiVideoOn } from "react-icons/ci"
import instagram2 from "./../../assets/images/instagram2.svg"
import kawai from "./../../assets/images/kawaipic.svg"
import callendericon from "./../../assets/images/callendericon.svg"
import portraiticon from "./../../assets/images/deviceicon.svg"
import clockicon from "./../../assets/images/clockicon.svg"

const Applynow = () => {
    return (
        <>
            <div className="main">
                <div className="bar flex justify-between mt-[33px]">
                    <p className='font-inter font-bold text-lg '>Content</p>
                    <div className='flex justify-between max-w-[550px] w-full'>
                        <p className='text-sm leading-[128%] text-Darkgrey'>Match with requirements </p>
                        <p>0%</p>
                    </div>
                </div>
                <div className="content flex justify-start gap-[104px]  max-w-[1740px] w-full   ">
                    <div className="leftvideoandtext w-[278px] flex flex-col text-center h-[365px] justify-center items-center ">
                        <img src={videoicon} alt="" />
                        <p className='text-xs leading-[170%] text-Darkgrey'>Drag & drop or upload video here!</p>
                    </div>
                    <div className="text  w-full max-w-[526px] flex justify-center items-center">

                        <div className="content pl-[15px] pr-[22px] pt-[13px] py-[28px] gap-[23px] mt-[41px] max-w-[860px] w-full  ">
                            <p className='text-base font-bold font-inter'>Content Requirements</p>
                            <div className="deatilcontnet flex flex-col gap-4 pt-7 ">
                                <div className="firstrow flex items-center justify-between">
                                    <p className='font-inter text-sm font-medium '>Content :</p>
                                    <p className='text-xs flex  gap-3  px-2.5 py-1'><CiVideoOn size={18} className='text-Primary' /> video  </p>
                                </div>
                                <div className="firstrow flex items-center justify-between">
                                    <p className='font-inter text-sm font-medium '> video duration: </p>
                                    <p className='text-xs flex  gap-3  px-2.5 py-1'><img src={clockicon} size={18} className='text-Primary' /> 20 seconds </p>
                                </div>
                                <div className="firstrow flex items-center justify-between">
                                    <p className='font-inter text-sm font-medium '>Content format:</p>
                                    <p className='text-xs flex  gap-3  px-2.5 py-1 items-center'><img src={portraiticon} size={18} className='text-Primary' /> Portrait </p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottobar px-2.5 py-1.25 flex justify-between">

                    <p className='text-sm font-inter leading-[128%] text-Darkgrey'>After applying for the campaign it will take a while to reviewed & further proceed</p>
                    <button className='w-[121px] h-[40px] bg-Primary rounded-[6px] text-white '>Submit</button>
                </div>
            </div>

        </>
    )
}

export default Applynow
