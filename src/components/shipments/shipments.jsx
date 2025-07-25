import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Space, Table, Tag } from 'antd';
import lemonicon from "./../../assets/images/lemonicon.svg"
import nitroicon from "./../../assets/images/nitroicon.svg"
import { RxEyeOpen } from "react-icons/rx";
const Shipments = () => {
    return (
        <>
            <div className="main">
                <div className="firstbar flex justify-between mr-5">
                    <div className="search flex gap-2 items-center">
                        <IoSearchOutline className='text-Primary' />
                        <input type="search" placeholder='search' className='text-Garkgrey text-[12px] outline-none' />
                    </div>
                    <div className=" dropdown flex  max-w-[250px] w-full justify-between">
                        <div className="relative inline-block text-left">
                            <div className="border border-gray-300 rounded  text-Darkgrey text-sm font-inter">
                                <p className="text-sm mb-1 font-medium flex items-center ">Type: AlL<MdOutlineKeyboardArrowDown className='' size={25} /> </p>
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
                {/* table content */}
                <table className='max-w-[1740px] w-full text-center mt-4'>
                    <thead className="bg-gray-100">
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Campaign</th>
                            <th>Date of delivery</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='text-Darkgrey'>33256869</td>
                            <td className="flex gap-2 flex justify-center pb-1 items-center">
                                <img src={lemonicon} alt="" className="w-6 h-6" />
                                <div><p className='text-sm font-inter font-semibold'>Face wash</p>
                                    <p className='text-sm font-inter text-Primary text-start'>$20.00</p></div>
                            </td>
                            <td >
                               <div className="flex gap-2 flex justify-center pb-1 items-center">
                                <img src={nitroicon} alt="" />
                                <div className='flex flex-col'>
                                    <p className='text-sm font-inter font-semibold'>Nitro Circus 2024</p>
                                    <p className='text-sm font-inter text-Darkgrey text-start'>public Post</p>
                                </div>
                               </div>
                            </td>
                            <td className='text-Darkgrey'>EST Jan 8, 2025</td>
                            <td className='flex justify-center' > <p className='text-[#FFA800] bg-[#FFF4DE] w-[90px] '>on the way </p> </td>
                            <td>
                                <p className='flex justify-center'> <RxEyeOpen  / > </p>
                            </td>

                        </tr>
                    </tbody>
                </table>

            </div>



        </>
    )
}

export default Shipments
