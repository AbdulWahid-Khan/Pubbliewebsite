import React from 'react'
import { RiLockUnlockLine } from "react-icons/ri";
import passwordeye from "./../../assets/images/openpassword.svg"
const Settings = () => {
  return (
    <>
    <div>
        <p>General settings </p>
        <div className="password">
            <p>Change Password</p>
            <div className="firstpaswordfield flex gap-4 mt-7 max-w-[750px] w-full p-4.5" >
                < RiLockUnlockLine />
                <div className='flex max-w-[700px]  w-full '>
                    <input type="password" name="" id="" placeholder='Enter Cuurent Password ' className='text-Darkgrey text-sm font-inter w-full outline-none'/>
                        <img src={passwordeye} alt="" className='w-6 h-6 hover:cursor-pointer' />
                </div>
            </div>
            <div className="secondrow flex justify-between  gap-16">
                <div className="firstpaswordfield flex gap-4 mt-5 max-w-[750px] w-full p-4.5" >
                < RiLockUnlockLine />
                <div className='flex max-w-[700px]  w-full '>
                    <input type="password" name="" id="" placeholder='Enter Cuurent Password ' className='text-Darkgrey text-sm font-inter w-full outline-none'/>
                        <img src={passwordeye} alt="" className='w-6 h-6 hover:cursor-pointer' />
                </div>
            </div>
            <div className="firstpaswordfield flex gap-4 mt-5 max-w-[750px] w-full p-4.5 " >
                < RiLockUnlockLine />
                <div className='flex max-w-[700px]  w-full '>
                    <input type="password" name="" id="" placeholder='Enter Cuurent Password ' className='text-Darkgrey text-sm font-inter w-full outline-none'/>
                        <img src={passwordeye} alt="" className='w-6 h-6 hover:cursor-pointer' />
                </div>
            </div>
            </div>
            <button className="w-[162px] h-[41px] p-[12px] rounded-[6px] text-white font-inter text-sm bg-black flex items-center justify-center mt-8 justify-self-end hover:cursor-pointer">
  Save changes
</button>

        </div>
        <div className="createaccount flex flex-col gap-7  mt-8 max-w-[676px] w-full">
            <p className='font-inter font-bold text-lg'>Delete account </p>
            <p className='font-inter text-sm leading-[130%] text-Darkgrey '>No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently.</p>
             <button className="w-[162px] h-[41px] p-[12px] rounded-[6px] text-white font-inter text-sm bg-[rgba(240,82,82,1)] flex items-center justify-center mt-8 hover:cursor-pointer">
  Save changes
</button>

        </div>
    </div>
      
    </>
  )
}

export default Settings
