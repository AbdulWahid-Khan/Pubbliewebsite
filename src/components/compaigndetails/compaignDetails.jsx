import React, { useState } from 'react'
import pendingicon from "./../../assets/images/pendingicon.svg";
import { IoCheckmark } from "react-icons/io5";
import compaignimg from "./../../assets/images/compaignimg.svg";
import tiktokimg from "./../../assets/images/tiktok.svg";
import { CiVideoOn } from "react-icons/ci"
import portraiticon from "./../../assets/images/deviceicon.svg"
import { MdOutlinePending } from "react-icons/md";
import kawai from "./../../assets/images/kawaipic.svg";
import statisticimg from './../../assets/images/statisticsmainpic.svg';
import { Outlet, useNavigate } from 'react-router-dom'
import NitroCircuspage from '../NitroCircus/NitroCircuspage';
import AudienceBarChart from '../chart/BarChart';
import Modal from 'antd/es/modal/Modal';
import { IoIosArrowUp } from "react-icons/io";
import { Switch } from 'antd';
import { RiEmotionNormalLine } from "react-icons/ri";
const CompaignDetails = () => {
    const navigate = useNavigate();
    const handlePost = () => {
        setIsModalOpen(false);
        setTab(2);
        setKawaiTab(true);
        
       
    };
    const [tab, setTab] = useState(1);
    const [kawaiTab, setKawaiTab] = useState(false);
    const [Tiktoktab, setTiktokTab] = useState(true);

    const handleTiktokChange = () => {
        setTiktokTab(!Tiktoktab);
        setKawaiTab(!kawaiTab);
    };
    const handleKawaiChange = () => {
        setKawaiTab(!kawaiTab);
        setTiktokTab(!Tiktoktab);
    };

    const handleTabChange = (tabNumber) => {
        setTab(tabNumber);
        if (tabNumber === 2) {
            setKawaiTab(false);
            setTiktokTab(true);
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = checked => {
        console.log(`switch to ${checked}`);
    };


    return (
        <>
            <div className="outer bg-[rgb(246,248,249)] flex flex-col px-5 pt-24 pb-2 gap-3 ">
                <div className="compaigndeatialnav flex justify-between items-center max-w-[1868px] w-full py-6 px-2.5 bg-white border-b-[1px] border-[rgba(239,239,239,1)]">
                    <p className='font-inter font-bold text-lg '>Campaign Details</p>
                    <div className='flex gap-2 items-center text-center '>
                        <p className='font-inter font-medium text-[rgb(158,158,158)]'>status:</p>
                        <p className='flex font-inter w-[108px] h-[35px] items-center text-center bg-[rgba(255,246,234,1)] 
           text-[rgba(255,168,0,1)] pl-3 pr-2 rounded-[21px]'>pending <span className='ml-3'><img src={pendingicon} alt="pending" /></span></p>
                    </div>
                </div>
                <div className="botthpart flex justify-between items-start max-w-[1868px] W-full  gap-4">
                    <div className="leftside bg-white w-full max-w-[690px] ">

                        <div className="tabnav flex justify-start gap-2 items-center max-w-[689px] h-[55px]  w-full    border-b-[1px] border-[rgba(239,239,239,1)]  pl-2.5 items-center text-center">
                            <p className={`flex font-inter font-medium text-sm cursor-pointer w-[167px] text-center px-4 py-2.5 h-full items-center  ${tab === 1 ? 'text-Primary border-b-[1px] border-Primary ' : 'text-[rgba(104,109,115,1)]'}`} onClick={() => handleTabChange(1)}> Content Submission </p>
                            <p className={`flex font-inter font-medium text-sm cursor-pointer w-[94px] h-full text-center py-2.5 px-4 items-center ${tab === 2 ? 'text-Primary border-b-[1px] border-Primary' : 'text-[rgba(104,109,115,1)]'}`} onClick={() => handleTabChange(2)}> Statistics </p>
                        </div>

                        <div className='w-[690px]  p-2'>
                            <div className="tabcontent">
                                {tab === 1 &&
                                    <div>
                                        <div className="heading flex justify-between items-center max-w-[647px] w-full  py-3">
                                            <p className='font-inter font-bold text-lg'>Your Submitted content</p>
                                            <p className='flex items-center text-[rgba(0,168,58,1)] w-[135px] h-[35px] border-[1px] border-[rgba(199,196,196,1)] text-center justify-center gap-4 '>
                                                <IoCheckmark />  Approved
                                            </p>
                                        </div>
                                        <div className="maincontnet w-[647px]  flex justify-between items-center    ">
                                            <div className="img w-[291px] h-[358px] relative">
                                                <img
                                                    src={compaignimg}
                                                    alt="image"
                                                    className="w-full h-full object-cover rounded-[10px]"
                                                />
                                                <p className="absolute top-[10px] right-[10px] bg-[rgba(0,0,0,0.38)] text-white rounded-[10px] text-xs w-[51px] h-[23px] text-center flex items-center justify-center">
                                                    00:20
                                                </p>
                                            </div>

                                            <hr className='border-[1px] border-[rgba(239,239,239,1)]   w-[1px]
                                        h-[318px]' />
                                            <div className='w-[276px]  h-[121px] flex flex-col gap-4  justify-center  items-center'>


                                                <div className="deatilcontnet flex flex-col gap-4 pt-7 w-[276px] h-[121px]">

                                                    <div className="firstrow flex items-center justify-between w-full">
                                                        <p className='font-inter text-sm font-medium '>Content</p>
                                                        <p className='text-xs flex  gap-3  px-2 py-1 w-[76px] border-[1px] border-[rgba(241,241,241,1)]'><CiVideoOn size={18} className='text-Primary' /> video  </p>
                                                    </div>

                                                    <div className="firstrow flex items-center justify-between w-full">
                                                        <p className='font-inter text-sm font-medium '> video duration </p>
                                                        <p className='text-xs flex  gap-3  px-2.5 py-1 border-[1px] border-[rgba(241,241,241,1)]'><CiVideoOn size={18} className='text-Primary' /> 20 seconds </p>
                                                    </div>
                                                    <div className="firstrow flex items-center justify-between w-full">
                                                        <p className='font-inter text-sm font-medium '> Content formate: </p>
                                                        <div className='flex flex-row items-center '>
                                                            <p className='text-xs flex  gap-3  px-2.5  border-[1px] border-[rgba(241,241,241,1)]'><img src={portraiticon} size={18} className='text-Primary' /> <span className='py-1'>portrait</span> </p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-3 max-w-[647px] w-full mt-6'>
                                            <p className='font-inter font-bold text-lg '>Post Content</p>
                                            <p className='font-inter text-lg text-Darkgrey'>Your content has been approved and is now eligible for posting. </p>
                                        </div>
                                        <div className='flex justify-between items-center max-w-[647px] w-full  py-3'>
                                            <div className="tiktok flex  ">
                                                <img src={tiktokimg} alt="" className='w-7 h-7 bg-white  border-[2px] border-[rgba(199,196,196,1)] rounded-[5px]' />
                                                <p className='font-roboto text-base px-2'>Tiktok</p>
                                            </div>
                                            <div className="end flex justify-between items-center gap-4">
                                                <MdOutlinePending size={24} className='text-black' />
                                                <p className='font-roboto text-base '>Pending</p>
                                                <button className='w-[107px] h-[40px] bg-black text-white rounded-[6px] font-inter font-medium hover:cursor-pointer' onClick={showModal}>Post</button>
                                            </div>
                                        </div>
                                        <div className='mt-[100px] p-3 flex justify-between items-center max-w-[647px] w-full border-[1px] border-[rgba(241,241,241,1)] rounded-[10px] '>
                                            <p className='font-inter text-sm  text-Darkgrey'>Payment will be processed shortly. Make sure to complete any necessary actions before the deadline .</p>
                                            <button className='bg-Primary w-[196px] h-[40px] text-white rounded-[6px] font-inter font-medium mt-3 hover:cursor-pointer opacity-40'>Submit </button>


                                        </div>
                                    </div>}
                                {tab === 2 &&


                                    <div className="heading  flex flex-col  items-start max-w-[647px] w-full  py-3">
                                        <div className="icon flex w-[213px]  gap-2 items-start justify-between  ">
                                            <div className={tab === 2
                                                ? 'flex items-center gap-2 w-[100px] h-[32px] border-[1px] border-Primary rounded-[5px] px-2 py-1.5 bg-[rgba(243,247,255,1)] hover:cursor-pointer'
                                                : 'border-[2px] border-[rgba(199,196,196,1)] rounded-[5px] px-2 py-1.5 flex items-center gap-2 w-[100px] h-[32px] bg-white hover:cursor-pointer'}
                                                onClick={() => handleTiktokChange()}
                                            >
                                                <img src={tiktokimg} alt="" className='w-7 h-7 bg-white  border-[2px] border-[rgba(199,196,196,1)] rounded-[5px]' />
                                                <p className='font-roboto text-base '>Tiktok</p>
                                            </div>

                                            {kawaiTab ? "" :

                                                <div className={tab == 2
                                                    ? 'flex items-center gap-2 w-[100px] h-[32px] border-[1px]  border-[rgba(241,241,241,1)] rounded-[5px] px-2 py-1.5  hover:cursor-pointer'
                                                    : ' rounded-[5px] px-2 py-1.5 flex items-center gap-2 w-[100px] h-[32px] bg-white hover:cursor-pointer :tab === 3 ? "hidden" : "bg-white" }'}
                                                    onClick={() => handleKawaiChange()}
                                                >
                                                    <img src={kawai} alt="" className='w-7 h-7 bg-white  border-[2px] border-[rgba(199,196,196,1)] rounded-[5px]' />
                                                    <p className='font-roboto text-base '>Kawai</p>
                                                </div>
                                            }

                                        </div>




                                    </div>




                                }

                            </div>
                            <div className={` flex flex-col gap-4 pt-7 w-full items-center w-[271px] h-[332px] ${tab == 2 && Tiktoktab == true ? "block" : "hidden"}`}>
                                <img src={statisticimg} alt="" className='w-[257px] h-[173px]' />
                                <p className='font-inter text-sm w-[271px] text-center'>You didn’t posted any thing yet. Post now to complete the campaign and get paid</p>
                                <button className='bg-Primary w-[196px] h-[40px] text-white rounded-[6px] font-inter font-medium mt-3 hover:cursor-pointer '>
                                    post 
                                </button>
                            </div>
                            <div className={`kawai flex flex-col gap-4 pt-6 w-full items-center w-[271px] h-full ${tab == 2 && kawaiTab == true ? "block" : "hidden"}`}>


                                <div className='flex max-w-[654px] w-full  gap-2.5  '>
                                    <div className="views flex flex-col items-start w-[211px] h-[59px] border-[1px] border-[rgba(241,241,241,1)] rounded-[8px] pt-3 pl-4 ">
                                        <p className='font-inter text-xs text-Darkgrey'>Views</p>
                                        <p className='font-inter text-lg font-bold text-lg '>2.2M</p>
                                    </div>
                                    <div className="views flex flex-col items-start w-[211px] h-[59px] border-[1px] border-[rgba(241,241,241,1)] rounded-[8px] pt-3 pl-4 ">
                                        <p className='font-inter text-xs text-Darkgrey'>Likes</p>
                                        <p className='font-inter text-lg font-bold text-lg '>98K</p>
                                    </div>
                                    <div className="views flex flex-col items-start w-[211px] h-[59px] border-[1px] border-[rgba(241,241,241,1)] rounded-[8px] pt-3 pl-4 ">
                                        <p className='font-inter text-xs text-Darkgrey'>Comments </p>
                                        <p className='font-inter text-lg font-bold text-lg '>25K</p>
                                    </div>
                                </div>
                                <div className='flex max-w-[654px] w-full  gap-2.5  '>
                                    <div className="views flex flex-col items-start w-[211px] h-[59px] border-[1px] border-[rgba(241,241,241,1)] rounded-[8px] pt-3 pl-4 ">
                                        <p className='font-inter text-xs text-Darkgrey'>Influencer</p>
                                        <p className='font-inter text-lg font-bold text-lg '>15</p>
                                    </div>
                                    <div className="views flex flex-col items-start w-[211px] h-[59px] border-[1px] border-[rgba(241,241,241,1)] rounded-[8px] pt-3 pl-4 ">
                                        <p className='font-inter text-xs text-Darkgrey'>Cost per influencer</p>
                                        <p className='font-inter text-lg font-bold text-lg '><span className='text-xs'>$</span> 25.00 </p>
                                    </div>
                                    <div className="views flex flex-col items-start w-[211px] h-[59px] border-[1px] border-[rgba(241,241,241,1)] rounded-[8px] pt-3 pl-4 ">
                                        <p className='font-inter text-xs text-Darkgrey'>Total cost</p>
                                        <p className='font-inter text-lg font-bold text-lg '> <span className='text-xs'>$</span> 325.00</p>
                                    </div>

                                </div>
                                <div className={` max-w-[654px] w-full flex justify-self-center shadow shadow  ${tab == 2 && kawaiTab == true ? "block" : "hidden"}`}><AudienceBarChart /></div>

                            </div>


                        </div>

                    </div>
                    <div className="rightside overflow-y-auto h-[100vh] max-w-[762px] w-full bg-white p-4 flex-col gap-4">
                        <NitroCircuspage />
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                title={<div className='font-inter font-bold text-base flex gap-3 items-center'><img src={tiktokimg} alt="" />Tiktok feed </div>}
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                footer={null}
                width={755}
                height={556}
                onCancel={handleCancel}

            >
                <div className='flex max-w-[755px] w-full  gap-4 pl-5 pr-4 pt-3' >
                    <div className="img w-[291px] h-[442px] relative">
                        <img
                            src={compaignimg}
                            alt="image"
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                        <p className="absolute top-[10px] right-[10px] bg-[rgba(0,0,0,0.38)] text-white rounded-[10px] text-xs w-[51px] h-[23px] text-center flex items-center justify-center">
                            00:20
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 max-w-[400px] w-full'>
                        <div className='flex flex-col gap-4 bg-[rgb(241,241,241)]  rounded-[10px] '>
                            <textarea
                                name=""
                                value=""
                                placeholder="Write something"
                                id=""
                                className="max-w-[400px] w-full px-2.5 py-3.5"
                            ></textarea>
                            <p className='flex w-full justify-between px-3'><span><RiEmotionNormalLine /></span><span>0/200</span></p>
                        </div>
                        <div className='flex flex-col max-w-[400px] w-full gap-5'>
                            <p className='font-inter font-bold text-base flex justify-between items-center'>Advanced settings <span><IoIosArrowUp /></span></p>
                            <div className="one flex  justify-between items-center w-full">
                                <p className='font-inter font-medium text-sm '>Hide like and view counts on this post</p>
                                <p><Switch defaultChecked onChange={onChange} /></p>
                            </div>

                            <p className='font-inter font-medium text-sm text-lightgrey'>Only you will see the total number of likes and views on this post. You can change this later by going to the menu at the top of the post. To hide like counts on other people's posts, go to your account settings.</p>
                            <div className="one flex  justify-between items-center w-full">
                                <p className='font-inter font-medium text-sm '>Turn off commenting</p>
                                <p><Switch defaultChecked onChange={onChange} /></p>
                            </div>

                            <p className='font-inter font-medium text-sm text-lightgrey'>You can change this later by going to the menu at the top of your post.</p>
                        </div>
                        <div className='flex justify-end items-center max-w-[400px] w-full'>
                        <button className='bg-Primary w-[149px] h-[40px] text-white p-3.5 rounded-[6px] font-inter font-medium text-base  mt-3 hover:cursor-pointer flex justify-center items-center' onClick={handlePost}>
                            Post now
                        </button>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default CompaignDetails
