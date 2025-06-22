import React from "react";
import cardicon from "./../../assets/images/card1icon.svg";
import cardicon2 from "./../../assets/images/cardicon2.svg";
import cardiocn3 from "./../../assets/images/cardiocn3.svg";
import cardiocn4 from "./../../assets/images/cardiocn4.svg";
import angulartoppic from "./../../assets/images/angularleftblue.svg";
import angularbottompic from "./../../assets/images/angularbottomblue.svg";
import updatedbgblue from "./../../assets/images/updatedbgbluepic.svg";
import doticon from "./../../assets/images/doticon.svg";
const About = () => {
  const Card = [
    {
      id: 1,
      img: cardicon,
      title: "Product Seeding Integration",
      text: "Easily manage product seeding workflows, from shipment tracking to authentic user-generated content submissions.",
    },
    {
      id: 2,
      img: cardicon2,
      title: "Post-Campaign Analytics",
      text: "Gain actionable insights with detailed reports on reach, engagement, and ROI, empowering you to refine future campaigns.",
    },
    {
      id: 3,
      img: cardiocn3,
      title: "Comprehensive Dashboards",
      text: "Dashboards for advertisers & influencers, simplify workflows, campaign management is seamless for everyone.",
    },
    {
      id: 4,
      img: cardiocn4,
      title: "Secure Escrow Payment System",
      text: "Ensure trust & transparency with a payment system that holds funds securely til campaign requirements are fulfilled.",
    },
  ];
  return (
    <>
      <div className="outer ">
        <div >
          <div className="relative overflow-hidden heading flex flex-col w-full items-end  gap-5  bg-[#11243E] py-[82px] ">
            <img
              src={updatedbgblue}
              alt=""
              className="absolute top-0 left-0 w-[381px] h-[381px] "
            />
            <img
              src={angularbottompic}
              alt=""
              className="absolute bottom-0 right-0 w-[381px] h-[381px] "
            />
            <div className="text md:pr-[60px]  z-10 text-center md:text-end">
              <p className="text-[22px] md:text-[44px]  font-bold font-family-inter bg-[linear-gradient(90deg,rgba(255,255,255,0.7)_0%,#8BBFFF_100%)] text-transparent bg-clip-text">
                What makes Pubblie different
              </p>
              <p className="font-inter text-[16px] md:text-[20px] bg-[linear-gradient(90deg,rgba(255,255,255,0.7)_0%,#8BBFFF_100%)] text-transparent bg-clip-text ">
                Revolutionizing the way advertisers and influencers collaborate
                for unparalleled success.
              </p>
            </div>

            <div className="flex w-full   md:pl-[90px] pb-[060px]">
              <div className=" flex grid place-items-center  gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-[957px] w-full">
                {Card.map((card) => (
                  <div className="card py-5 px-4 rounded-[25px] w-[228px] h-[326px] flex flex-col items-center justify-center skew-x-5 border-[0.4px] border-[rgba(255,255,255,0.18)] shadow-[-4px_-4px_4px_0px_rgba(72,72,72,0.25)] bg-[rgba(255,255,255,0.05)]">
                    <div className="pic flex justify-center items-center w-[73px] h-[73px] rounded-full p-4 bg-[rgba(255,255,255,0.12)] shadow-[-4.5px_-4.5px_4.5px_0px_rgba(72,72,72,0.25)]">
                      <img src={card.img} alt="" />
                    </div>
                    <p className="font-inter font-bold text-lg text-white text-center">{card.title}</p>
                    <p className="font-inter text-white text-base text-center">{card.text}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
        <div className="main flex justify-center  bg-red-200 ">
          <div className="button w-[248px] h-[61px] rounded-[39px] flex items-center bg-white pl-4 -mt-[30px] absolute left-[50%] -translate-x-[50%] z-30 ">
            <img
              src={doticon}
              alt=""
              className="w-[9px] h-[9px] mr-[53px] "
            />
            <button className="text-base text-Primary font-medium py-5 text-center ">
              Get Started{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
