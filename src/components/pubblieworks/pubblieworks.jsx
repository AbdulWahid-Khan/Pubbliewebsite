import React from "react";
import doticon from "./../../assets/images/doticon.svg";
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

const Pubblieworks = () => {
  return (
    <>
      <div>
        <div className="controlling ">
          <div className="parent relative">
            {/* thid images create the rpoblem overflow */}
            {/* <img
            src={elipsright}
            alt=""
            className="absolute right-0 -top-[400px] "
          />
          <img src={elipsleft} alt="" className="absolute  left-0  " /> */}
            <div className="main flex justify-center  w-full">
              <div className="button w-[248px] h-[61px] rounded-[39px] flex items-center bg-white pl-4 -mt-[30px]">
                <img
                  src={doticon}
                  alt=""
                  className="w-[9px] h-[9px] mr-[53px]"
                />
                <button className="text-base text-Primary font-medium w-[] py-5 text-center ">
                  Get Strated{" "}
                </button>
              </div>
            </div>

            <div className=" content flex w-full h-[202px]  ">
              <div className="firstrow  ">
                <img src={lefttopspiral} alt="" />
              </div>
              <div className="flex w-full items-center justify-center pt-[50px]">
                <div className="text gap-4 text-center">
                  <p className="text-black text-5xl font-bold font-inter">
                    How PUBBLI Works
                  </p>
                  <p className="text-black text-[20px] font-inter ">
                    Streamline your campaign journey in three simple steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="centralportion w-full flex relative overflow-x-hidden h-[800px] ">
              <div className="  relative  w-full overflow-x-hidden overflow-y-hidden -top-[100px] ">
                <div className="main bg-white flex w-[593px] h-[147px] relative items-center  left-[830px] top-[150px] rounded-[26px]">
                  <div className="leftcontent absolute -right-3 w-[123px] w-[200px]">
                    <img
                      src={pubblihand}
                      alt=""
                      className=" w-[123px] w-[200px]"
                    />
                  </div>
                  <div className="text gap-2 pl-[30px] items-center w-[360px] ">
                    <p className="text-lg text-black font-inter font-bold">
                      Create Your Campaign
                    </p>
                    <p className="text-base text-black font-inter">
                      Define goals, audience, and deadlines using our
                      step-by-step wizard.
                    </p>
                  </div>
                </div>
                <div className="main bg-white  flex w-[593px] h-[147px]    items-center absolute left-[350px] top-[350px] rounded-[26px]">
                  <div className="leftcontent absolute -right-5 w-[178px] w-[233px]">
                    <img
                      src={pubbliemobile}
                      alt=""
                      className=" w-[178px] w-[233px]"
                    />
                  </div>
                  <div className="text gap-2 pl-[30px] items-center w-[360px] ">
                    <p className="text-lg text-black font-inter font-bold">
                      Collaborate with Influencers
                    </p>
                    <p className="text-base text-black font-inter">
                      Find influencers and manage submissions seamlessly.
                    </p>
                  </div>
                </div>
                <div className="main bg-white flex w-[593px] h-[147px] relative items-center left-[830px] top-[450px] rounded-[26px]">
                  <div className="leftcontent absolute -right-3 w-[123px] w-[200px]">
                    <img
                      src={pubblielaptop}
                      alt=""
                      className=" w-[123px] w-[200px]"
                    />
                  </div>
                  <div className="text gap-2 pl-[30px] items-center w-[360px] ">
                    <p className="text-lg text-black font-inter font-bold">
                      Create Your Campaign
                    </p>
                    <p className="text-base text-black font-inter">
                      Define goals, audience, and deadlines using our
                      step-by-step wizard.
                    </p>
                  </div>
                </div>
                <div className="absolute left-[600px] top-[210px] ">
                  <img
                    src={pubblieline}
                    alt=""
                    className="w-[618px] h-[458px]"
                  />
                </div>
                <div className="icon">
                  <div className="icon w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center p-2 absolute left-[750px] top-[200px]">
                    <img src={text1} alt="" />
                  </div>
                  <div className="icon w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center p-2 absolute left-[1020px] top-[400px]">
                    <img src={text2} alt="" />
                  </div>
                  <div className="icon w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center p-2 absolute left-[745px] top-[650px]">
                    <img src={text3} alt="" />
                  </div>
                </div>
                <img
                  src={rifhtbottomspiral}
                  alt=""
                  className="absolute -bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pubblieworks;
