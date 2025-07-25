import React from 'react'
import dollaricon from "./../../assets/images/dollaricon.svg"
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import nitroicon from "./../../assets/images/nitroicon.svg"
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Wallet = () => {
  return (
    <>
      <div className="main">
        <div className="upperportion flex justify-between">
            <div className="balanceportion flex max-w-[700px] max-h-[222px] h-full w-full justify-between py-[53px] px-5">
                <p>
                    <img src={dollaricon} alt="" />
                    </p>
                <div className="textandbalance">
                    <p className='font-inter font-medium text-lg '>Your Total Balance</p>
                    <p className='font-inter text-sm leading-[1.28%] text-Darkgrey'>Your Power to Launch Amazing Campaigns!</p>
                    <p className='font-inter font-bold text-[32px]'>$ 500</p>
                </div>
                <button className='w-[143px] h-[45px] bg-Primary text-white rounded-[6px]'>withdraw</button>
            </div>
            <div className="transactions flex justify-between items-center max-w-[600px] w-full mt-[38px]">
                <RiArrowDropLeftLine className='hover:cursor-pointer'/>
                <div >
                    
                    <p className='font-inter font-medium text-sm '>Recent transactions</p>
                    <p className='font-inter font-medium text-lg '>$500</p>
                    <p className='font-inter text-sm text-Darkgrey'>influnnce post</p>
                    <img src={ nitroicon} alt="" />
                    <p className='font-inter font-medium text-sm '>Nitro Circus 2024</p>
                    <p className='font-inter text-sm text-Darkgrey'>influnnce post</p>
                    <p>dot</p>
                </div>
                <RiArrowDropRightLine className='hover:cursor-pointer' />
            </div>
        </div>
        <div className="transationhistory flex justify-between mt-15">
           
            <div className="firstbar flex justify-between mr-5 w-full">
                 <p className='font-inter font-medium text-lg '>Transation history </p>
                               
                               <div className=" dropdown flex  max-w-[550px] w-full justify-between">
                                  <div className="search flex gap-2 items-center">
                                   <IoSearchOutline className='text-Primary' />
                                   <input type="search" placeholder='search' className='text-Garkgrey text-[12px] ' />
                               </div>
                                   <div className="relative inline-block text-left ">
                                       <div className="border border-gray-300 rounded text-Darkgrey text-sm font-inter">
                                           <p className="text-sm mb-1 font-medium flex items-center text-Darkgrey ">Periods: This year<MdOutlineKeyboardArrowDown className='' size={25} /> </p>
                                           {/* <div className="flex flex-col gap-1">
                                               <label className="flex items-center gap-2 text-sm">
                                                   <input type="checkbox" className="form-checkbox" /> All
                                               </label>
                                               <label className="flex items-center gap-2 text-sm">
                                                   <input type="checkbox" className="form-checkbox" /> With product
                                               </label>
                                               <label className="flex items-center gap-2 text-sm">
                                                   <input type="checkbox" className="form-checkbox" /> Without product
                                               </label>
                                           </div> */}
                                       </div>
                                   </div>
                               </div>
                           </div>
        </div>
        {/* table portion */}
        <div className="tableportion">
<table className='max-w-[1720px] w-full mt-5  '>
    <thead className='text-Darkgrey text-sm font-medium flex justify-between'>
        <th>Transaction ID</th>
        <th>Compaign</th>
        <th>Date</th>
        <th>Amount</th>
    </thead>
    <tbody>
        <tr className='flex justify-between items-center '>
            <td className='font-inter text-sm leading-[128%]'>TXN123456	</td>
           <td className="text-center flex flex-col justify-center items-center">
               <div className="flex flex-col items-center justify-center  ">
                <p className="font-inter text-sm font-medium leading-[128%] text-center">Nitro Circus 2024</p>
                 <p className="text-xs font-inter text-Darkgrey text-center">Influencer Posts</p>
                </div>
                </td>
            <td className='font-inter  text-sm leading-[128%] text-center'>18 Jan 2025, 10:23 AM</td>
            <td className='text-sm text-[#2E9300]'>$ 500.00</td>
        </tr>
    </tbody>
</table>
        </div>
      </div>
    </>
  )
}

export default Wallet
