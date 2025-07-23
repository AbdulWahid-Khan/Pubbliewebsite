import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import lemonicon from "./../../assets/images/lemonicon.svg"
import nitroicon from "./../../assets/images/nitroicon.svg"
import { RxEyeOpen } from "react-icons/rx";
import { DatePicker, Space, Table, Tag, Button, theme, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';

const CampaignWithoutProduct = () => {
    const navigate = useNavigate();
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);
    const [openDropdown3, setOpenDropdown3] = useState(false);


    const { token } = theme.useToken();

    const style = {
        border: `1px solid ${token.colorPrimary}`,
        borderRadius: '50%',
        position: 'absolute',

    };
    const cellRender = (current, info) => {
        if (info.type !== 'date') {
            return info.originNode;
        }
        if (typeof current === 'number' || typeof current === 'string') {
            return <div className="ant-picker-cell-inner">{current}</div>;
        }
        return (
            <div className="ant-picker-cell-inner" style={current.date() === 1 ? style : {}}>
                {current.date()}
            </div>
        );
    };

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
            title: <p className='  font-inter text-sm'>Campaign type</p>,
            dataIndex: 'campaigntype',
            key: 'campaignType',

        },

        {
            title: <p className='  font-inter text-sm'>Fee</p>,
            dataIndex: 'fee',
            key: 'fee',
        },
        {
            title: <p className='  font-inter text-sm'> Status </p>,
            dataIndex: 'status',
            key: 'address',
            render: (status) => {
                const cleanedStatus = status.trim().toLowerCase(); // remove extra spaces + lowercase

                let className = '';
                if (cleanedStatus === 'pending') {
                    className = 'text-yellow-900 bg-yellow-100';
                } else if (cleanedStatus === 'requested') {
                    className = 'text-red-700 bg-[rgba(255,231,237,1)]';
                } else if (cleanedStatus === 'rejected') {
                    className = 'text-green-900 bg-[rgba(255,231,237,1)]';
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
            dataIndex: 'timeline',
            key: 'timeline',
        },
        {
            title: <p className='font-semibold  font-inter text-sm'> Date applied </p>,
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: <p className='font-semibold  font-inter text-sm  '> Actions </p>,
            dataIndex: 'action',
            key: 'action'

        }


    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            campaigntype: 'Without product',
            fee: '$ 250',
            status: 'Requested',
            timeline: 'Jan 18,25 --> Jan 31,25',
            date: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5 hover:cursor-pointer' onClick={() => navigate('/compaigndetails')} />,
        },
        {
            key: '2',
            campaigntype: 'Without product',
            fee: '$ 250',
            status: 'pending',
            timeline: 'Jan 18,25 --> Jan 31,25',
            date: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5 hover:cursor-pointer' onClick={() => navigate('/compaigndetails')} />,
        },
        {
            key: '3',
           campaigntype: 'Without product',
            fee: '$ 250',
            status: 'completed',
            timeline: 'Jan 18,25 --> Jan 31,25',
            date: 'Jan 18,25',
            action: <RxEyeOpen className='w-5 h-5 ml-5 hover:cursor-pointer' onClick={() => navigate('/compaigndetails')} />,
        },


    ];
    return (
        <>
            <div className="firstbar flex justify-between mr-5 ">
                <div className="search flex gap-2 items-center">
                    <IoSearchOutline className='text-Primary' />
                    <input type="search" placeholder='search' className='text-Garkgrey text-[12px] outline-none' />
                </div>
                <div className="mt-6 dropdown flex  max-w-[409px] w-full justify-between ">
                    <div className=" inline-block text-center  relative items-center">
                        <div className="border border-gray-300 rounded text-Darkgrey text-sm font-inter">
                            <p className="text-sm mb-1 font-medium flex items-center text-Darkgrey hover:cursor-pointer" onClick={handleDropdownClick}>Type: With product <MdOutlineKeyboardArrowDown className='' size={25} /> </p>
                        </div>
                        <div className={`absolute top-12 z-10 bg-white  flex flex-col gap-1 px-2.5 pt-5 pb-3.5 ${openDropdown ? 'block ' : 'hidden'}`}  >
                            <label className="flex items-center gap-2 text-sm justify-between">All
                                <input type="checkbox" className="form-checkbox" />
                            </label>
                            <label className="flex items-center gap-2 text-sm justify-between">With product
                                <input type="checkbox" className="form-checkbox" />
                            </label>
                            <label className="flex items-center gap-2 text-sm justify-between">Without product
                                <input type="checkbox" className="form-checkbox" />
                            </label>
                            <div className='flex justify-center items-center w-full'>
                                <button className='w-[129px] h-[28px] bg-[rgba(0,0,0,1)] text-white rounded-[4px] font-inter font-medium text-xs '>Apply now</button>
                            </div>
                        </div>
                    </div>

                    <div className="relative inline-block text-left">
                        <div className="border border-gray-300 rounded  text-Darkgrey text-sm font-inter">
                            <p className="text-sm mb-1 font-medium flex items-center hover:cursor-pointer w-full" onClick={handleDropdownClick2}>Status: All<MdOutlineKeyboardArrowDown className='' size={25} /> </p>
                        </div>
                        <div className={`absolute top-12 z-10 bg-white  flex flex-col gap-1 w-[129px] px-2.5 py-5   ${openDropdown2 ? 'block ' : 'hidden'}`}>
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
                            <button className='w-[109px] h-[28px] bg-[rgba(0,0,0,1)] text-white rounded-[4px] font-inter font-medium text-xs'>Apply now</button>
                        </div>

                    </div>
                    <div className="relative inline-block text-left ">
                        <div className="border border-gray-300 rounded text-Darkgrey text-sm font-inter">
                            <p className="text-sm mb-1 font-medium flex items-center text-Darkgrey hover:cursor-pointer" onClick={handleDropdownClick3}>Periods: This year<MdOutlineKeyboardArrowDown className={`${handleDropdownClick3 ? 'rotate-180' : ''}`} size={25} /> </p>
                        </div>
                        <div className={`absolute top-8 z-10 bg-white flex flex-col gap-1 h-[300px]  ${openDropdown3 ? 'block' : 'hidden'}`}>
                            <Space size={12} direction="vertical">
                                
                                <DatePicker.RangePicker cellRender={cellRender} />
                        
                            </Space>
                           
 <div className='flex justify-end pt-[330px]'>
                                <button className='w-[95px] h-[28px] bg-[rgba(0,0,0,10)] text-white rounded-[4px] font-inter font-medium text-xs hover:cursor-pointer'>Apply now </button>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
            <div className="table flex w-full pt-4 ">
                <Table columns={columns} dataSource={data} pagination={{ position: ['bottomCenter'], }} />
            </div>

        </>
    )
}

export default CampaignWithoutProduct
