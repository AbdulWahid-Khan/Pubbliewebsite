import React from "react";

import lefttopspiral from "./../../assets/images/publicspiral.svg";
import rifhtbottomspiral from "./../../assets/images/publicleftspiral.svg";
import pubblihand from "./../../assets/images/pubblihand.svg";
import pubbliemobile from "./../../assets/images/pubbliemobile.svg";
import pubblielaptop from "./../../assets/images/pubblielaptop.svg";
import pubblieline from "./../../assets/images/publieline.svg";
import text1 from "./../../assets/images/text1.svg";
import text2 from "./../../assets/images/text2.svg";
import text3 from "./../../assets/images/text3.svg";
import elipsright from "./../../assets/images/elipsright.svg";
import elipsleft from "./../../assets/images/elipsleft.svg";
import Carddetails from "../cards/Carddetails";

const Pubblieworks = () => {
  return (
    <>
      <div  className="overflow-x-hidden;">
        <div className="controlling overflow-x-hidden;">
          <div className="parent relative  overflow-hidden">


            <div className="bg-[#3579F6]   xl:w-[1026px] xl:h-[637px]  absolute -right-[501px] 2xl:-right-[401px] blur-[200px]  opacity-40   rounded-[75%] overflow-hidden  lg:block ">
            </div>
            <div className="bg-[#3579F6]  xl:w-[1026px] xl:h-[637px]  absolute -left-[501px] 2xl:-left-[401px] bottom-[250px] blur-[200px]  opacity-40   rounded-[75%] overflow-hidden  hidden lg:block ">
            </div>

            <div className=" content flex w-full lg:h-[202px] mt-[60px] xl:mt-[0px] ">
              <div className="firstrow  hidden lg:block">
                <img src={lefttopspiral} alt="" />
              </div>
              <div className="flex w-full items-center justify-center  md:pt-[50px]">
                <div className="text gap-4 ">
                  <p className="text-black text-3xl sm:text-5xl font-bold font-inter text-center">
                    How PUBBLI Works
                  </p>
                  <p className="text-black text-[20px] font-inter text-center">
                    Streamline your campaign journey in three simple steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="centralportion w-full flex relative overflow-x-hidden h-[600px] xl:h-[800px]   ">
              <div className="    w-full overflow-x-hidden overflow-y-hidden  ">

                <div className="main1   bg-white flex w-[300px] h-[120px] md:w-[350px]  xl:w-[593px] xl:h-[147px]  items-center absolute top-[60px]  left-1/2 -translate-x-1/2 lg:left-[400px] lg:top-[0px] xl:left-[890px]  xl:top-[0px] 2xl:left-[1150px] rounded-[26px]  ">
                  <div className="leftcontent absolute -right-3 max-w-[123px] hidden md:block">
                    <img src={pubblihand} alt="" className=" w-[123px] " />
                  </div>
                  <div className="text  gap-2 pl-2.5 xl:pl-[30px] items-center w-[288px] text-center md:text-center md:w-[215px] xl:max-w-[360px] xl:w-full ">
                    <p className="text-base xl:text-lg text-black font-inter font-bold ">
                      Create Your Campaign
                    </p>
                    <p className="text-base text-black font-inter">
                      Define goals, audience, and deadlines using our
                      step-by-step wizard.
                    </p>
                  </div>
                </div>

                <div className="main2 mx-auto bg-white flex   w-[300px] h-[120px] md:w-[350px]  xl:w-[593px] xl:h-[147px]    items-center absolute top-[240px] left-1/2 -translate-x-1/2 lg:left-[400px] lg:top-[170px]  xl:left-[430px] xl:top-[220px] 2xl:left-[725px] rounded-[26px]">
                  <div className="leftcontent absolute -right-5 max-h-[178px]  max-w-[233px]  w-full h-full  flex justify-end items-center">
                    <img
                      src={pubbliemobile}
                      alt=""
                      className=" xl:h-[178px] xl:w-[233px] h-[100px] w-[100px] hidden md:block"
                    />
                  </div>
                  <div className="text gap-2 pl-[10px]  xl:pl-[30px] items-center   w-[288px] text-center md:text-center md:w-[230px]   lg:w-[360px] ">
                    <p className="text-base lg:text-lg text-black font-inter font-bold">
                      Collaborate with Influencers
                    </p>
                    <p className="text-base   text-black font-inter">
                      Find influencers and manage submissions seamlessly.
                    </p>
                  </div>
                </div>
                <div className="main3 mx-auto bg-white flex   w-[300px] h-[120px] md:w-[350px] xl:w-[593px] xl:h-[147px] absolute top-[420px] left-1/2 -translate-x-1/2   items-center lg:left-[400px] lg:top-[340px] xl:left-[890px]  xl:top-[450px] 2xl:left-[1150px] rounded-[26px]">
                  <div className="leftcontent absolute    flex items-center -right-8 w-[123px] h-[200px]">
                    <img
                      src={pubblielaptop}
                      alt=""
                      className=" xl:w-[123px] xl:h-[200px] h-[100px] w-[90px] hidden md:block"
                    />
                  </div>
                  <div className="text gap-2 pl-2.5 xl:pl-[30px] items-center w-[288px] text-center md:text-start md:w-[230px] xl:max-w-[360px] xl:w-full ">
                    <p className="text-base xl:text-lg text-black font-inter font-bold">
                      Create Your Campaign
                    </p>
                    <p className="text-base text-black font-inter">
                      Define goals, audience, and deadlines using our
                      step-by-step wizard.
                    </p>
                  </div>
                </div>
                <div className="absolute left-[400px] top-[80px] hidden xl:block 2xl:left-[650px]">
                  <img
                    src={pubblieline}
                    alt=""
                    className="w-[618px] h-[458px]"
                  />
                </div>
                <div className="icon ">
                  <div className="icon w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center p-2 mt-3  absolute -top-[4px]  left-[129px] md:top-[30px]  xl:left-[545px] xl:top-[30px] 2xl:left-[795px]">
                    <img src={text1} alt="" />
                  </div>
                  <div className="icon w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center p-2 absolute left-[129px] lg:top-[200px] top-[188px] xl:left-[817px] xl:top-[255px] 2xl:left-[1070px]">
                    <img src={text2} alt="" />
                  </div>
                  <div className="icon w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center p-2 absolute left-[129px] top-[368px] md:top-[380px] xl:left-[545px]  xl:top-[500px] 2xl:left-[795px]">
                    <img src={text3} alt="" />
                  </div>
                </div>
                <img
                  src={rifhtbottomspiral}
                  alt=""
                  className="absolute bottom-0 right-0 hidden lg:block"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* < Carddetails /> */}
    </>
  );
};

export default Pubblieworks;
