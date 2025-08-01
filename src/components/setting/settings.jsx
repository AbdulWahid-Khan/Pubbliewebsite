import React, { useState } from 'react'
import { RiLockUnlockLine } from "react-icons/ri";
import passwordeye from "./../../assets/images/openpassword.svg"
import accountholderpic from "./../../assets/images/accsettingpic.svg"
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Settings = () => {
    const [Tab, setTab] = useState(1)
    const handleTab = () => {
        setTab(tabNumber)
    }


    return (
        <>
            <div>

                <div className='flex  max-w-[1600px] w-full gap-2 border-b-[1px] border-[rgba(228,228,228,1)] pl-5'>
                    <p className={`font-inter font-medium text-sm text-lightgrey w-[150px] hover:cursor-pointer h-full ${Tab == 1 ? "text-Navyblue border-b-[1px] border-b-Navyblue" : ""}`} onClick={tabNumber => setTab(1)}> Account settings </p> 
                    <p className={`font-inter font-medium text-sm text-lightgrey w-[150px] hover:cursor-pointer h-full ${Tab == 2 ? "text-Navyblue border-b-[1px] border-b-Navyblue" : ""}`} onClick={tabNumber => setTab(2)}> General settings </p> 
                    </div>
                    <div className={` ${Tab === 1 ? "block flex items-center justify-between mt-[70px]  max-w-[1700px] w-full " : "hidden"} `}>
                        
                        <img src={accountholderpic} alt="" className=' w-[160px[ h-[160px]' />
                       
                        <div className="data max-w-[1700px] w-full flex flex-col gap-4 px-5">
                            <div className="firstrow flex flex-row max-w-[1700px] w-full gap-4 justify-between">
                                <p className='flex gap-2 bg-[rgba(250,250,250,1)] w-[460px]  py-3 pl-4'>
                                    <IoPersonOutline />
                                    <span className='text-xs text-lightgrey'>Musfiq Cooper </span>
                                </p>
                                 <p className='flex gap-2 bg-[rgba(250,250,250,1)] w-[460px] py-3 pl-4'>
                                    <MdOutlineEmail />
                                    <input type='email' className='text-xs text-lightgrey w-full outline-none ' placeholder='dolores.chambers@example.com' /> 
                                </p>
                            </div>
                            <p className='flex gap-2 bg-[rgba(250,250,250,1)] w-[460px]  py-3 pl-4'>
                                    <IoPersonOutline />
                                    <span className='text-lightgrey font-inter text-sm  items-center hover:cursor-pointer'>
                                        <select name="cars" id="cars">
                                        <option value="volvo">+55</option>
                                        <option value="saab">+56</option>
                                        <option value="opel">+57</option>
                                        <option value="audi">+58</option>
                                         </select>
                                    </span>
                                    <input type="text" name="" id="" placeholder='(406) 555-0120' className='text-lightgrey text-sm w-full w-full outline-none' />
                                </p>
                        </div>
                         
                   
                  
                      </div>
                       <div className={` ${Tab === 1 ? "block flex items-center mt-[20px]  justify-end max-w-[1700px] w-full px-5 " : "hidden"} `}>
                    <button className='w-[162px] rounded-[6px] p-3.5 text-white bg-black font-inter font-medium text-sm cursor-pointer'>Save changes</button>
                     </div>
                <div className={` ${Tab === 2 ? "block mt-[70px] pr-4" : "hidden"} `}>
                    <div className="password border-b-[1px] border-[rgba(228,228,228,1)] pb-[34px]">

                        <p>Change Password</p>
                        <div className="firstpaswordfield flex gap-4 mt-7 max-w-[750px] w-full p-4.5" >
                            < RiLockUnlockLine />
                            <div className='flex max-w-[700px]  w-full '>
                                <input type="password" name="" id="password1" placeholder='Enter Cuurent Password ' className='text-Darkgrey text-sm font-inter w-full outline-none' />
                                <img src={passwordeye} alt="" className='w-6 h-6 hover:cursor-pointer' />
                            </div>
                        </div>
                        <div className="secondrow flex justify-between  gap-16">
                            <div className="firstpaswordfield flex gap-4 mt-5 max-w-[750px] w-full p-4.5" >
                                < RiLockUnlockLine />
                                <div className='flex max-w-[700px]  w-full '>
                                    <input type="password" name="" id="password2" placeholder='Enter Cuurent Password ' className='text-Darkgrey text-sm font-inter w-full outline-none' />
                                    <img src={passwordeye} alt="" className='w-6 h-6 hover:cursor-pointer' />
                                </div>
                            </div>
                            <div className="firstpaswordfield flex gap-4 mt-5 max-w-[750px] w-full p-4.5 " >
                                < RiLockUnlockLine />
                                <div className='flex max-w-[700px]  w-full '>
                                    <input type="password" name="" id="password3" placeholder='Enter Cuurent Password ' className='text-Darkgrey text-sm font-inter w-full outline-none' />
                                    <img src={passwordeye} alt="" className='w-6 h-6 hover:cursor-pointer' />
                                </div>
                            </div>

                        </div>
                        <div className='flex justify-end max-w-[1650px] w-full'>
                    <button className='w-[162px] rounded-[6px] p-3.5 text-white bg-black font-inter font-medium text-sm cursor-pointer'>Save changes</button>
                     </div>

                    </div>
                    <div className="createaccount flex flex-col gap-7  mt-7.5 max-w-[676px] w-full ">
                        <p className='font-inter font-bold text-lg'>Delete account </p>
                        <p className='font-inter text-sm leading-[130%] text-Darkgrey '>No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>
                        <button className="w-[162px] h-[41px] p-[12px] rounded-[6px] text-white font-inter text-sm bg-[rgba(240,82,82,1)] flex items-center justify-center mt-8 hover:cursor-pointer">
                            Save changes
                        </button>

                    </div>
                </div>
               
            </div>
        </>
    )
}

export default Settings
