import React from "react";
import leftbg from "./../../assets/images/faqleftbgimg.svg";
import rightbg from "./../../assets/images/rightbg.svg";
import chakrostar from "./../../assets/images/chakorstar.svg";
import topflower from "./../../assets/images/faqlefttopflower.svg";
import bottomflower from "./../../assets/images/faqbottomimg.svg";
import bgmain from "./../../assets/images/bg-bluemainfaq.svg";
import { RxCrossCircled } from "react-icons/rx";
import Marquee from "react-fast-marquee";
import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, theme } from "antd";
const Faqsection = () => {
  const { token } = theme.useToken();
  const text =
    "Funds are securely held until the campaign is completed and requirements are met, ensuring trust for both advertisers and influencers.";
  const getItems = (panelStyle) => [
    {
      key: "1",
      label: (
        <p className="text-lg font-bold font-inter">
          How does the escrow payment system work?
        </p>
      ),
      children: (
        <p className="pt-[18px] pb-[42px] text-sm font-inter text-[#808080] w-[760px] leading-[129%]">
          {text}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "2",
      label: (
        <p className="text-lg font-bold font-inter">
          What metrics can I track in the analytics dashboard?
        </p>
      ),
      children: (
        <p className="pt-[18px] pb-[42px] text-sm font-inter text-[#808080] w-[760px] leading-[129%]">
          {text}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "3",
      label: (
        <p className="text-lg font-bold font-inter">
          Can I try PUBBLI for free?
        </p>
      ),
      children: (
        <p className="pt-[18px] pb-[42px] text-sm font-inter text-[#808080] w-[760px] leading-[129%]">
          {text}
        </p>
      ),
      style: panelStyle,
    },
    {
      key: "4",
      label: (
        <p className="text-lg font-bold font-inter">
          How are influencers matched to campaigns?
        </p>
      ),
      children: (
        <p className="pt-[18px] pb-[42px] text-sm font-inter text-[#808080] w-[760px] leading-[129%]">
          {text}
        </p>
      ),
      style: panelStyle,
    },
  ];
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  const Navdata = [
    {
      id: 1,
      text: "EDUCATION",
    },
    {
      id: 2,
      text: "COMMUNICATION",
    },
    {
      id: 3,
      text: "MEETINGS",
    },
    {
      id: 4,
      text: "DISCUSSION",
    },
    {
      id: 5,
      text: "LEADERSHIP",
    },
    {
      id: 6,
      text: "COLLABORATION",
    },
    {
      id: 7,
      text: "EDUCATION",
    },
    {
      id: 8,
      text: "COMMUNICATION",
    },
    {
      id: 9,
      text: "MEETINGS",
    },
    {
      id: 10,
      text: "DISCUSSION",
    },
    {
      id: 11,
      text: "LEADERSHIP",
    },
    {
      id: 12,
      text: "COLLABORATION",
    },
    {
      id: 13,
      text: "EDUCATION",
    },
    {
      id: 14,
      text: "COMMUNICATION",
    },
    {
      id: 15,
      text: "MEETINGS",
    },
    {
      id: 16,
      text: "DISCUSSION",
    },
    {
      id: 17,
      text: "LEADERSHIP",
    },
    {
      id: 18,
      text: "COLLABORATION",
    },
    {
      id: 19,
      text: "EDUCATION",
    },
    {
      id: 20,
      text: "COMMUNICATION",
    },
    {
      id: 21,
      text: "MEETINGS",
    },
    {
      id: 22,
      text: "DISCUSSION",
    },
    {
      id: 23,
      text: "LEADERSHIP",
    },
  ];
  return (
    <>
      <div className="relative bg-[#010C1B]">
        <div className="left flex w-[100%]">
          {/* <img
            src={leftbg}
            alt=""
            className="absoulte top-0 left-0 w-[960px] h-full"
          /> */}
          <img
            src={bgmain}
            alt=""
            className="absoulte top-0 right-0  w-full h-full"
          />
        </div>
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
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
          <p>* 8</p>
        </Marquee>
        {/* <div className="navodown z-20 absolute top-0 w-full -rotate-z-1 flex  min-h-[60px] gap-[41px] overflow-x-hidden bg-[#CCE2FF]   ">
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
        <img
          src={topflower}
          alt=""
          className="absolute top-[70px] left-0 w-[216px] h-[216px]"
        />

        <div className="mainheading absolute  top-[180px] left-1/2 -translate-x-1/2">
          <div className="innertext text-center gap-4 ">
            <h2 className="text-[36px] font-inter font-bold text-white  ">
              Frequently Asked Questions
            </h2>
            <h5 className="text-lg font-inter font-bold text-white">
              These are the most commonly asked questions about PUBBLIE.{" "}
            </h5>
          </div>
          <div className="custom-faq mt-8 bg-transparent  rounded-lg flex  flex-col gap-3.5 w-[798px]">
            <Collapse
              width={798}
              bordered={false}
              defaultActiveKey={["1"]}
              expandIconPosition="right"
              expandIcon={({ isActive }) => (
                <RxCrossCircled
                  rotate={isActive ? 90 : 0}
                  className="w-[24px] h-[24px]"
                />
              )}
              style={{ background: token.colorBgContainer }}
              items={getItems(panelStyle)}
            />
          </div>
          {/* <div className="outerFAQ mt-[44px] flex flex-col gap-4">
            <div className="firsttopdiv bg-white px-4 rounded-[26px]">
              <div className="flex items-center justify-between pt-6">
                {" "}
                <p className="text-lg font-bold font-inter">
                  How does the escrow payment system work?
                </p>{" "}
                <RxCrossCircled className="w-[24px] h-[24px]" />{" "}
              </div>
              <p className="pt-[18px] pb-[42px] text-sm font-inter text-lightgrey w-[760px]">
                Funds are securely held until the campaign is completed and
                requirements are met, ensuring trust for both advertisers and
                influencers.
              </p>
            </div>

            <div className="firsttopdiv bg-white px-4 rounded-[20px]">
              <div className="flex items-center justify-between py-[22px]">
                {" "}
                <p className="text-lg font-bold font-inter">
                  What metrics can I track in the analytics dashboard?
                </p>{" "}
                <RxCrossCircled className="w-[24px] h-[24px]" />{" "}
              </div>
            </div>
            <div className="firsttopdiv bg-white px-4 rounded-[20px]">
              <div className="flex items-center justify-between py-[22px]">
                {" "}
                <p className="text-lg font-bold font-inter">
                  What metrics can I track in the analytics dashboard?
                </p>{" "}
                <RxCrossCircled className="w-[24px] h-[24px]" />{" "}
              </div>
            </div>
            <div className="firsttopdiv bg-white px-4 rounded-[20px]">
              <div className="flex items-center justify-between py-[22px]">
                {" "}
                <p className="text-lg font-bold font-inter">
                  How are influencers matched to campaigns?
                </p>{" "}
                <RxCrossCircled className="w-[24px] h-[24px]" />{" "}
              </div>
            </div>
          </div> */}
        </div>

        <img
          src={bottomflower}
          alt=""
          className="absolute bottom-0 right-0 w-[216px] h-[216px]"
        />
      </div>
    </>
  );
};

export default Faqsection;
