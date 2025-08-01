import React, { useState } from 'react'
import dollaricon from "./../../assets/images/dollaricon.svg"
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import nitroicon from "./../../assets/images/nitroicon.svg"
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Modal } from 'antd';
import { MdOutlineContactMail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { IoIosPhonePortrait } from "react-icons/io";
import { PiChatCenteredLight } from "react-icons/pi";
import { IoKeyOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import transimg from "./../../assets/images/paypal.svg"
import  paypal from "./../../assets/images/transantionsuccess.svg"


const Wallet = () => {

    const [openDropdown, setOpenDropdown] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2 ,setIsModalOpen2]=useState(false)
    const [Tab, setTab] = useState(1)
    const   handleTab=()=>{
            setTab (Tab)
    }
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
       setIsModalOpen2(false);
        setIsModalOpen(false);
        
    };
    const handleDropdownClick = () => {
        setOpenDropdown(!openDropdown);
    };
    const showModal2 = () => {
        setIsModalOpen2(true);
        setIsModalOpen(false);
    };
    
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
                        <button className='w-[143px] h-[45px] bg-Primary text-white rounded-[6px] hover:cursor-pointer' onClick={showModal}>withdraw</button>
                    </div>
                    <div className="transactions flex justify-between items-center max-w-[600px] w-full mt-[38px]">
                        <RiArrowDropLeftLine className='hover:cursor-pointer' />
                        <div >

                            <p className='font-inter font-medium text-sm '>Recent transactions</p>
                            <p className='font-inter font-medium text-lg '>$500</p>
                            <p className='font-inter text-sm text-Darkgrey'>influnnce post</p>
                            <img src={nitroicon} alt="" />
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
                                    <p className="text-sm mb-1 font-medium flex items-center text-Darkgrey cursor-pointer" onClick={handleDropdownClick} >Periods: This year<MdOutlineKeyboardArrowDown className='' size={25} /> </p>
                                    <div className={`flex flex-col gap-1 ${openDropdown ? 'block' : 'hidden'}`}>
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

            {/* Modal */}

            <Modal
                title=<p className='font-inter font-bold text-lg  '>withdraw Funds </p>
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={531}
                footer={null}
            >
                <div className='w-[370px] flex flex-col gap-[30px]   justify-self-center'>
                    <div className='w-[313px] flex flex-col gap-4  ' >
                        <p className='text-xs font-manrope w-[313px] flex'>Choose your PIX key type. Fill in the details correctly to
                            guarantee receipt.</p>
                        <ul className='flex gap-[30px] '>
                            <li className={`w-[40px] h-[40px] hover:cursor-pointer rounded-[20px] flex items-center justify-center ${Tab == 1 ? "bg-[rgba(213,228,255,1)]" : "bg-[rgba(233,232,232,1)]"
                                }`} onClick={() => setTab(1)}> <MdOutlineContactMail size={25} /></li>
                            <li className={`w-[40px] h-[40px] hover:cursor-pointer rounded-[20px] flex items-center justify-center ${Tab == 2 ? "bg-[rgba(213,228,255,1)]" : "bg-[rgba(233,232,232,1)]"
                                }`} onClick={() => setTab(2)}><IoIosPhonePortrait size={25} /></li>
                            <li className={`w-[40px] h-[40px] hover:cursor-pointer rounded-[20px] flex items-center justify-center ${Tab == 3 ? "bg-[rgba(213,228,255,1)]" : "bg-[rgba(233,232,232,1)]"
                                }`} onClick={() => setTab(3)}> <PiChatCenteredLight size={25} /></li>
                            <li className={`w-[40px] h-[40px] hover:cursor-pointer rounded-[20px] flex items-center justify-center ${Tab == 4 ? "bg-[rgba(213,228,255,1)]" : "bg-[rgba(233,232,232,1)]"
                                }`} onClick={() => setTab(4)}> <IoKeyOutline size={25} /></li>
                        </ul>
                    </div>
                    <div className="working flex flex-col w-[370px] justify-center   ">
                        <div className="input flex flex-col w-full gap-4 justify-center items-center ">
                            <input type="text" placeholder="Enter your phone Number" className=' border-[1px] rounded-[8px] p-4 text-lightgrey text-lg leading-[128%]  outline-none w-full items-center'/>
                            
                        </div>
                        <p className='font-manrope text-xs mt-4 text-start'>Enter the desired amount for you withdrawal</p>
                   </div>
                     <div className="input flex flex-col w-full gap-4 mt-7 border-[1px] rounded-[8px] px-4 py-[9.5px] ">
                            <p className='font-medium font-manrope flex flex-col  gap-0 leading-none gap-2'>
                              <span>R$</span>  
                              <span>0.00</span>
                            </p>
                            
                        </div>
                    <p className='font-manrope text-xs mt-4'>The minimum withdrawal amount is R$30.00</p>

                
                <div className='flex  items-center justify-center p-4 gap-4 justify-center items-center]'>
                    <IoIosInformationCircleOutline size={70}/>
                    <p className='text-sm font-manrope text-[rgba(158,158,158,1)]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et magna aliqua.Lorem ipsum dolor sit amet, consectetur liqua.</p>
                </div>
                <button className='w-full rounded-[6px] p-4 bg-Navyblue text-white text-base font-medium hover:cursor-pointer' onClick={showModal2}>
                    Continue
                </button>
 </div>
            </Modal>
            // transation Successfull module 
              <Modal
                title=""
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen2}
                onOk={handleOk}
                onCancel={() => setIsModalOpen2(false)} 
                width={531}
                footer={null}
            >
            <div className='w-[244px] flex flex-col justify-self-center gap-3'>
                <div>
                    <img src={transimg} alt="logo" className='w-[244px] h-[217px]'/>
                </div>
                <div className='flex flex-col items-center text-center '>
                    <p className='font-inter text-base font-bold '>Success!</p>
                    <p>your withdrawal of $200 has been submitted </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'><p className='font-medium text-xs font-inter '>Payment Method :</p> <p className='font-manrope text-xs text-Darkgrey flex '><img src={paypal} alt="" className='pr-3' />paypal</p></div>
                    <div className='flex justify-between'><p className='font-medium text-xs font-inter '>Transanction Id :</p> <p className='font-manrope text-xs text-Darkgrey'>TXN12345678</p></div>

                </div>
            </div>
            </Modal> 


        </>
    )
}

export default Wallet
