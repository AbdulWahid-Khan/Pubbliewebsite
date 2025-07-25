import React, { useState } from 'react'
import profilepic from "./../../assets/images/profileimg.svg"
import campaignicon from "./../../assets/images/compaignicon.png"
import { GoDotFill } from "react-icons/go";
import starticon from "./../../assets/images/starticon.svg"
import locationicon from "./../../assets/images/locationicon.svg"
import homepic from "./../../assets/images/homepic.svg"
import { GoDeviceCameraVideo } from "react-icons/go";
import { HiOutlinePhoto } from "react-icons/hi2";
import videopic from "./../../assets/images/portraiticon.svg"
import instagrampic from "./../../assets/images/instagram2.svg"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = () => {
    const [tab, setTab] = useState(1);

    function updateTab(tab) {
        setTab(tab);
    }
    const summary = [
        {
            id: 1,
            title: "Post",
            text: "1012"
        },
        {
            id: 2,
            title: "Followers",
            text: "1012"
        },
        {
            id: 3,
            title: "Following",
            text: "509"
        },
        {
            id: 4,
            title: "Avg.impression",
            text: "15K"
        },
        {
            id: 5,
            title: "Avg.likes",
            text: "90012"
        },
        {
            id: 6,
            title: "Avg.Commnets",
            text: "1012"
        },
        {
            id: 7,
            title: "Avg.Share",
            text: "509"
        },
        {
            id: 8,
            title: "Avg.Engagement",
            text: "2.5 million"
        },
        {
            id: 9,
            title: "Engagement rates",
            text: "15%"
        },

    ];
   const data = {
  labels: ['Mens', 'Womens'],
  datasets: [
    {
      label: 'My First Dataset',
      data: [270, 50],
      backgroundColor: [
        'rgba(178, 1, 144, 1)', // Just color value
        'rgba(55, 38, 168, 1)'
      ],
      hoverOffset: 4
    }
  ]
};
const options = {
  plugins: {
    legend: {
        position: 'bottom',
        
      labels: {
        // Use point styles (circles) rather than default squares
        usePointStyle: true,
        pointStyle: 'circle',
       
      },
    },
  },
};

    return (
        <>
            <div className="outer flex gap-5">
                <div className="leftpart max-w-[399px] w-full flex flex-col gap-2.5">

                    <div className="firstpart max-w-[357px] w-full pt-5">
                        <div className="flex justify-start gap-3">
                            <img src={profilepic} alt="" className='w-[108px] h-[108px] rounded-[10px]' />
                            <div className="rightsubpart flex flex-col gap-2">
                                <p className='font-inter font-bold text-base '>Leslie Alexander </p>
                                <p className='flex gap-2 items-center font-inter text-xs'><img src={campaignicon} alt="" className='w-6 h-4.5' /> 66  campaigns </p>
                                <button className='w-[96px] h-[30px] py-1.5 px-3 rounded-[6px] text-white text-sm font-inter bg-black'>Edit profile</button>
                            </div>



                        </div>
                        <div className="text flex items-start justify-start mt-5 gap-2 ">
                            <div className="bio">
                                <GoDotFill className="text-Primary w-5 h-5 " />
                            </div>
                            <div className="flex flex-col">
                                <p className="font-inter font-medium text-sm">Bio</p>
                                <p className="font-inter text-sm text-Darkgrey">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quasi corrupti et?
                                </p>
                            </div>
                        </div>

                        <div className="text flex items-start justify-start  gap-2 ">

                            <div className="contents flex  items-start max-w-[357px] w-full h-full">
                                <GoDotFill className='text-Primary w-5 h-5' />
                                <div className="felx flex-col">
                                    <p className="font-inter font-medium text-sm"> Content style </p>
                                    <p className="font-inter text-sm text-Darkgrey"> Food vlogging</p>
                                </div>
                            </div>

                        </div>
                        <div className="sublastline flex justify-between  pt-6">
                            <p className='flex ga-2  font-inter text-Darkgrey'><img src={starticon} alt="" className='pr-3' />4.9 <span className='px-3'>(20 reviews) </span> </p>
                            <a href="www.google.com " className='underline font-inter font-medium text-sm '>View all</a>
                        </div>
                    </div>

                    <div className="secondpart pt-6 ">
                        <div className="heading flex justify-between">
                            <p className='font-inter font-bold text-base '>Address </p>
                            <p className='font-inter text-sm text-Primary'> + add new</p>
                        </div>
                        <div className="address pt-6 flex justify-between items-center gap-4 pb-[56px]">
                            <img src={locationicon} alt="" />
                            <div className="flex flex-col gap-2">
                                <p className='font-inter text-xs text-Darkgrey '>8502 Preston Rd. Inglewood, Maine 98380</p>
                                <p className='font-inter text-sm font-medium '>USA, California</p>
                                <p className='font-inter text-sm flex gap-2'><img src={homepic} alt="" /> Home</p>
                            </div>
                            <p className='font-inter text-sm text-Primary '>Edit</p>
                        </div>


                    </div>

                    <div className="third pt-5">
                        <div className="firstrow flex justify-between ">
                            <p className='font-inter font-bold text-base'>Refrence Content </p>
                            <div>
                                <div className="video flex gap-4 ">

                                    <p className='flex items-center  gap-3'> < GoDeviceCameraVideo className='text-Primary font-manrope' /> video</p>
                                    <p className='flex items-center text-Darkgrey  gap-3'>  < HiOutlinePhoto className=' text-Primary text-xs' />image</p>
                                </div>

                            </div>
                        </div>
                        <div className="images flex gap-2 mt-[44px] items-start">
                            <div className="img w-[178px] h-[216px]">
                                <img src={profilepic} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="img w-[178px] h-[216px] border border-dotted border-gray-400 flex flex-col items-center justify-center">
                                <img src={videopic} alt="" />
                                <p>Upload new</p>
                            </div>
                        </div>


                    </div>


                </div>

                <div className="rightpart">
                    <p className='font-inter font-bold text-lg '>Profile Stats</p>
                    <ul className="buttons flex flex-row max-w-[1920px] w-fit   justify-start items-center bg-[#FFF4EF] px-[6px] py-[4px] gap-5">
                        <button
                            className={` cursor-pointer font-inter  text-sm  ${tab === 1 ? "text-Primary font-medium border-b border-Primary " : ""
                                }`}
                            onClick={() => updateTab(1)}
                        >
                            {" "}
                            Instagram{" "}
                        </button>
                        <button
                            className={` cursor-pointer font-inter  text-sm  ${tab === 2 ? "text-Primary font-medium border-b border-Primary " : ""
                                }`}
                            onClick={() => updateTab(2)}
                        >
                            {" "}
                            Tiktok {" "}
                        </button>
                    </ul>


                    <div className="handle flex gap-2 mt-6">
                        <img src={instagrampic} alt="" />
                        <p>@darrell.com</p>
                    </div>
                    <div className="summary mt-6">
                        <p className='font-inter font-bold text-base'>Summary </p>
                        <div className="grid grid-cols-3 gap-4 w-[1700px]">
                            {summary.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full h-full  flex flex-col justify-start items-center text-start pt-[7px] px-4"
                                >
                                    <p className="text-sm text-Darkgrey font-inter leading-[130%] w-full">{item.title}</p>
                                    <p className="text-sm font-inter font-bold w-full">{item.text}</p>
                                </div>
                            ))}
                        </div>




                    </div>
                     <div className="chart mt-50 w-[270px] h-[366px] ">
                    <p className='text-sm font-inter text-Darkgrey'>Gender </p>
                    <div className="w-[300px] h-[300px] mt-20">
                    <Doughnut data={data}  options={options}/>
                         </div>
                </div>

                </div>

               
            </div>
        </>
    )
}

export default Profile
