import React, { use } from 'react'
import pendingicon from "./../../assets/images/pendingicon.svg";
import { useLocation } from 'react-router-dom';


const CampaignNav = () => {
    const pathname = useLocation().pathname;
    return (
        <>
            <div className="compaigndeatialnav  flex justify-between items-center max-w-[1868px] w-full sm:py-6 sm:px-2.5  border-b-[1px] border-[rgba(239,239,239,1)]">
                <p className='font-inter sm:font-bold sm:text-lg font-medium text-base w-full sm:max-w-[160px] '>Campaign Details</p>
                <div className='flex gap-2 items-center text-center max-w-[1000px] w-full items-center justify-between'>
                    <p className='font-inter font-medium text-[rgb(158,158,158)]'></p>
                    {pathname === "/compaigndetails/campaigns" ? (
                        <p className="flex font-inter w-[108px] h-[35px] items-center text-center bg-[rgba(255,246,234,1)] text-[rgba(255,168,0,1)] pl-3 pr-2 rounded-[21px]">
                             status:<span className='ml-3'>pending<img src={pendingicon} alt="pending" /></span>
                        </p>
                    ) : pathname === "/affilationpost" ? (
                        <div className="flex font-inter justify-end sm:justify-between max-w-[900px] w-full flex justify-between items-center  text-center text-lightgrey ">
                            <p className='hidden md:block'>An affiliate request will be sent for approval. Once approved, you may proceed with posting.</p>
                        <button className='bg-Primary w-[149px] h-[40px] text-white  rounded-[6px] font-inter font-medium text-base  hover:cursor-pointer flex justify-center items-center '>
                        send request
                        </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )
}

export default CampaignNav
