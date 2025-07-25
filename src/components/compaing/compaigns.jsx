import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import lemonicon from "./../../assets/images/lemonicon.svg"
import nitroicon from "./../../assets/images/nitroicon.svg"
import { RxEyeOpen } from "react-icons/rx";
import { DatePicker, Space, Table, Tag, Button } from 'antd';

const Compaigns = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);
    const [openDropdown3, setOpenDropdown3] = useState(false);
    const handleDropdownClick = () => {
        setOpenDropdown(!openDropdown);
       
        
    };

     const handleDropdownClick2 = () => {
        setOpenDropdown2(!openDropdown2);
    };
    const handleDropdownClick3 = () => {
        setOpenDropdown3(!openDropdown3);
    };
const { RangePicker } = DatePicker;
    const columns = [
        {
            title: <p className='font-semibold  font-inter text-sm'> Campaign </p>,
            dataIndex: 'name',
            key: 'name',
            render: () => (
                <div className="flex items-center gap-2">
                    <img src={nitroicon} alt="" />
                    <div className="second">
                        <p className='font-inter font-medium text-sm'>Nitro Circus 2024</p>
                        <p className='font-inter text-xs text-Darkgrey'>Public posts</p>
                    </div>
                </div>
            ),
        },
        {
            title: <p className='font-semibold  font-inter text-sm'>Fee</p>,
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: <p className='font-semibold  font-inter text-sm'> Status </p>,
            dataIndex: 'status',
            key: 'address',
            render: (status) => {
                const cleanedStatus = status.trim().toLowerCase(); // remove extra spaces + lowercase

                let className = '';
                if (cleanedStatus === 'pending') {
                    className = 'text-yellow-900 bg-yellow-100';
                } else {
                    className = 'text-green-900 bg-green-100';
                }

                return (
                    <div className={`flex max-w-[100px] w-full items-center  justify-center px-3 py-1 rounded-full text-xs font-medium ${className}`}>
                        {status}
                    </div>
                );
            }
        },
        {
            title: <p className='font-semibold  font-inter text-sm'>Time line </p>,
            dataIndex: 'Timeline',
            key: 'timeline',
        },
        {
            title: <p className='font-semibold  font-inter text-sm'> Date applied </p>,
            dataIndex: 'dateApplied',
            key: 'date',
        },
        {
            title: <p className='font-semibold  font-inter text-sm '> Actions </p>,
            dataIndex: 'action',
            key: 'action'

        }


    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: '$ 250',
            status: ' Pending ',
            Timeline: 'Jan 18,25 --> Jan 31,25',
            dateApplied: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5' />,
        },
        {
            key: '2',
            name: 'John Brown',
            age: '$ 250',
            status: 'completed ',
            Timeline: 'Jan 18,25 --> Jan 31,25',
            dateApplied: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5' />,
        },
        {
            key: '3',
            name: 'John Brown',
            age: '$ 250',
            status: ' completed ',
            Timeline: 'Jan 18,25 --> Jan 31,25',
            dateApplied: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5' />,
        },
        {
            key: '4',
            name: 'John Brown',
            age: '$ 250',
            status: ' completed ',
            Timeline: 'Jan 18,25 --> Jan 31,25',
            dateApplied: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5' />,
        },
        {
            key: '5',
            name: 'John Brown',
            age: '$ 250',
            status: ' completed ',
            Timeline: 'Jan 18,25 --> Jan 31,25',
            dateApplied: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5' />,
        },
        {
            key: '6',
            name: 'John Brown',
            age: '$ 250',
            status: ' completed ',
            Timeline: 'Jan 18,25 --> Jan 31,25',
            dateApplied: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5' />,
        },
    ];


    return (
        <>
            <div className="firstbar flex justify-between mr-5">
                <div className="search flex gap-2 items-center">
                    <IoSearchOutline className='text-Primary' />
                    <input type="search" placeholder='search' className='text-Garkgrey text-[12px] outline-none' />
                </div>
                <div className="mt-6 dropdown flex  max-w-[409px] w-full justify-between">
                    <div className="relative inline-block text-left ">
                        <div className="border border-gray-300 rounded text-Darkgrey text-sm font-inter">
                            <p className="text-sm mb-1 font-medium flex items-center text-Darkgrey hover:cursor-pointer" >Type: With product <MdOutlineKeyboardArrowDown className='' size={25} onClick={handleDropdownClick} /> </p>

                            <div className={`flex flex-col gap-1 ${openDropdown ? 'block' : 'hidden'}`}  >
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="form-checkbox" /> All
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="form-checkbox" /> With product
                                          </label>
                                          <label className="flex items-center gap-2 text-sm">
                                              <input type="checkbox" className="form-checkbox" /> Without product
                                          </label>
                                      </div>
                        </div>
                    </div>
                    <div className="relative inline-block text-left">
                        <div className="border border-gray-300 rounded  text-Darkgrey text-sm font-inter">
                            <p className="text-sm mb-1 font-medium flex items-center hover:cursor-pointer" onClick={handleDropdownClick2}>Type: AlL<MdOutlineKeyboardArrowDown className='' size={25} /> </p>
                            <div className={`flex flex-col gap-1 ${openDropdown2 ? 'block' : 'hidden'}`}>
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="form-checkbox" /> All
                                </label>
                                <label className="flex items-center gap-2 text-sm">
                                              <input type="checkbox" className="form-checkbox" /> Completed
                                          </label>
                                          <label className="flex items-center gap-2 text-sm">
                                              <input type="checkbox" className="form-checkbox" /> Pending
                                          </label>
                                           <label className="flex items-center gap-2 text-sm">
                                              <input type="checkbox" className="form-checkbox" /> Rejected
                                          </label>
                                      </div>
                        </div>
                    </div>
                    <div className="relative inline-block text-left ">
                        <div className="border border-gray-300 rounded text-Darkgrey text-sm font-inter">
                            <p className="text-sm mb-1 font-medium flex items-center text-Darkgrey hover:cursor-pointer" onClick={handleDropdownClick3}>Periods: This year<MdOutlineKeyboardArrowDown className='' size={25} /> </p>
                            <div className={`flex flex-col gap-1 ${openDropdown3 ? 'block' : 'hidden'}`}>
                                          <label className="flex items-center gap-2 text-sm">
                                              <input type="checkbox" className="form-checkbox" /> All
                                          </label>
                                          <label className="flex items-center gap-2 text-sm">
                                              <input type="checkbox" className="form-checkbox" /> With product
                                          </label>
                                          <label className="flex items-center gap-2 text-sm">
                                              <input type="checkbox" className="form-checkbox" /> Without product
                                          </label>
                                      </div>
                        </div>
                    </div>


                </div>


            </div>
            <div className="table flex w-full pt-4 ">
                <Table columns={columns} dataSource={data} pagination={{position: ['bottomCenter'], }} />
            </div>

            


    

        </>
    )
}

export default Compaigns
