import React from "react";
import leftbg from "./../../assets/images/faqleftbgimg.svg";
import rightbg from "./../../assets/images/rightbg.svg";
import chakrostar from "./../../assets/images/chakorstar.svg";
import topflower from "./../../assets/images/faqlefttopflower.svg";
import bottomflower from "./../../assets/images/faqbottomimg.svg";
import bgmain from "./../../assets/images/bg-bluemainfaq.svg";
import bgnew from "./../../assets/images/light.svg";
import { RxCrossCircled } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import { Collapse, theme } from "antd";

const Faqsection = () => {
  const { token } = theme.useToken();
  const text =
    "Funds are securely held until the campaign is completed and requirements are met, ensuring trust for both advertisers and influencers.";

  const getItems = (panelStyle) => [
    {
      key: "1",
      label: <p className="text-lg font-bold font-inter">How does the escrow payment system work?</p>,
      children: <p className="pt-4 pb-8 text-sm font-inter text-[#808080] leading-relaxed">{text}</p>,
      style: panelStyle,
    },
    {
      key: "2",
      label: <p className="text-lg font-bold font-inter">What metrics can I track in the analytics dashboard?</p>,
      children: <p className="pt-4 pb-8 text-sm font-inter text-[#808080] leading-relaxed">{text}</p>,
      style: panelStyle,
    },
    {
      key: "3",
      label: <p className="text-lg font-bold font-inter">Can I try PUBBLI for free?</p>,
      children: <p className="pt-4 pb-8 text-sm font-inter text-[#808080] leading-relaxed">{text}</p>,
      style: panelStyle,
    },
    {
      key: "4",
      label: <p className="text-lg font-bold font-inter">How are influencers matched to campaigns?</p>,
      children: <p className="pt-4 pb-8 text-sm font-inter text-[#808080] leading-relaxed">{text}</p>,
      style: panelStyle,
    },
  ];

  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 bg-[#010C1B] bg-cover bg-end bg-no-repeat "   style={{ backgroundImage: `url(${bgmain})` }}>

      <div className="relative  py-10 lg:py-14 overflow-hidden">
        {/* Background Image */}

        {/* <img
          src={bgmain}
          alt=""
          className="absolute -top-[80px] left-0
            hidden lg:block w-[381px] h-[342px]   "
        /> */}
       
        <div className="relative z-10 flex flex-col items-center text-center mt-6  lg:mt-[80px]">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-inter font-bold text-white">
            Frequently Asked Questions
          </h2>
          <h5 className="text-base md:text-lg font-inter font-bold text-white mt-2">
            These are the most commonly asked questions about PUBBLIE.
          </h5>

          <div className="mt-8 bg-transparent rounded-lg w-full max-w-3xl">
            <Collapse
              bordered={false}
              defaultActiveKey={["1"]}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <RxCrossCircled
                  rotate={isActive ? 90 : 0}
                  className="w-6 h-6"
                />
              )}
              style={{ background: token.colorBgContainer }}
              items={getItems(panelStyle)}
            />
          </div>
        </div>
        {/* Marquee */}
        <Marquee>
          {/* <div className="navouter absolute z-20 top-0 w-full  rotate-z-1  flex  min-h-[60px] gap-[41px] overflow-x-hidden bg-[#CCE2FF] marquee-content overflow-hidden">
            {Navdata.map((item, index) => (
              <ul key={index} className="nav flex items-center">
                <li className="text p-2.5 flex gap-2.5 items-center">
                  <p className="text-[17px] font-manrope font-medium leading-[1.5] text-Primary">
                    {item.text}
                  </p>
                  <img
                    src={chakrostar}
                    alt=""
                    className="w-[10px] h-[10px] hover:bg-Navyblue"
                  />
                </li>
              </ul>
            ))}
          </div> */}
          {/* <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p> */}
        </Marquee>

        {/* Decorations */}
        <img
          src={topflower}
          alt=""
          className="absolute top-[70px] left-0 w-[150px] md:w-[180px] xl:w-[216px] hidden xl:block "
        />

        <img
          src={bottomflower}
          alt=""
          className="absolute bottom-0 right-0 w-[150px] md:w-[180px] xl:w-[216px] hidden xl:block"
        />

        {/* Content */}

      </div>
    </div>
  );
};

export default Faqsection;
