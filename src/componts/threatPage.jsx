import React, { useState } from "react";
import menu from "./svg2/menu.svg";
import screen from "./svg2/screen.svg";
import mind from "./svg2/mind.svg";
import eye from "./svg2/eye.svg";
import flash from "./svg2/flash.svg";
import heart from "./svg2/heart.svg";
import protection from "./svg2/protection.svg";
import Switch from "./switch";

function Threat({ toggleSlide }) {
  const [clicked, setClicked] = useState(false);

  const update = () => {
    setClicked(!clicked);
    setTimeout(() => setClicked(false), 3000);
  };

  return (
    <>
      <div className="w-full h-screen text-[#d4e6ff] bg-[#020817]">
        {/* Navigation */}
        <div className="fixed   top-0 left-0 w-full flex items-center justify-between bg-[#0e1629] px-5 py-2.5 transition-all duration-300 ease-in-out md:flex-row flex-col max-[490px]:block z-1">
          {/* Left side */}
          <div className="flex items-center justify-center gap-4 transition-all ease-in-out duration-300">
            <img
              onClick={toggleSlide}
              src={menu}
              alt=""
              className="h-[3vh] cursor-pointer float-left"
            />
            <div>
              <h2 className="text-[25px] font-medium text-white py-[2px] max-[768px]:text-[20px] max-[490px]:text-[20px]">
                Threat Protection
              </h2>
              <p className="text-[13px] max-[490px]:text-[7px] text-[#d4e6ff]py-4">
                Advanced AI-powered security monitoring
              </p>
            </div>
          </div>

          {/* Right side - quick scan */}
          <div
            onClick={update}
            className={`flex items-center justify-center gap-[21px] border border-[#0891b2] rounded-full px-[18px] py-[10px] bg-[#0891b2] text-[#f5f5f5] cursor-pointer  my-2 transition-all ease-in-out duration-300 ${
              clicked ? "opacity-50 scale-95 pointer-events-none" : ""
            } max-[490px]:mt-3`}
          >
            <img src={clicked ? flash : screen} alt="" />
            <p>{clicked ? "scanning..." : "Quick scan"}</p>
          </div>
        </div>

        {/* Items section */}
        <div
          className="grid grid-cols-4  max-[560px]:mt-[150px]    text-center justify-center mt-[7rem] mx-[5px] my-[20px] gap-3 transition-all ease-in-out duration-300 
          max-[1024px]:grid-cols-2 max-[768px]:grid-cols-1 max-[490px]:grid-cols-1 max-[490px]:mt-[10rem]"
        >
          {[
            { num: "47", text: "Apps Scanned", btn: "clean" },
            { num: "247", text: "Files Analyzed", btn: "clean" },
            { num: "23", text: "Network Connections", btn: "secure" },
            { num: "0", text: "Threats Detected", btn: "safe" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-[10px] border border-[#b0b0b0] mx-[12px] my-[3px] rounded-[10px] bg-[#0e1629] cursor-pointer transition-all duration-300 ease-in-out"
            >
              <h4 className="text-[25px] font-medium text-[#f5f5f5] pb-[5px] leading-[1.5]">
                {item.num}
              </h4>
              <p className="text-[10px] font-light text-[#d4e6ff]">
                {item.text}
              </p>
              <button className="text-[14px] border border-[#46cf7a] rounded-full text-[#46cf7a] mt-[8px] mb-[2px] px-[15px]">
                {item.btn}
              </button>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="m-[5px_15px] rounded-[15px] p-[20px_15px] bg-[#0e1629] transition-all ease-in-out duration-300">
          {/* Heading */}
          <div className="flex items-center gap-[10px] py-[5px] px-[7px]">
            <img src={protection} alt="" />
            <h1 className="text-[25px] font-semibold text-white capitalize leading-[1.5] max-[1024px]:text-[21px]">
              Protection Features
            </h1>
          </div>

          {/* Each feature */}
          {[
            {
              img: mind,
              title: "Real-time Malware Detection",
              desc1:
                "AI-powered scanning of all app installations and file downloads",
              desc2: "Active - 24/7 monitoring",
            },
            {
              img: heart,
              title: "Rootkit Detection",
              desc1: "Deep system scanning for hidden malicious processes",
              desc2: "Scheduled for weekly scans",
            },
            {
              img: flash,
              title: "Zero-Day Exploit Protection",
              desc1:
                "Behavioral analysis to detect unknown threats and exploits",
              desc2: "Learning mode active",
            },
            {
              img: eye,
              title: "Phishing Protection",
              desc1: "Advanced URL scanning and suspicious link detection",
              desc2: "Database updated 2 hours ago",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-[#1a2537] rounded-[20px] p-[10px_15px] mt-[15px]"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-[11px] px-[5px]">
                  <img src={feature.img} alt="" />
                  <h2 className="text-[20px] font-medium text-[#f5f5f5] max-[490px]:text-[15px]">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-[#b0b0b0] mt-[5px] ml-[40px] text-[11px] max-[490px]:text-[7px]">
                  {feature.desc1}
                </p>
                <p className="text-[#22d3ee] text-[10px] ml-[40px]">
                  {feature.desc2}
                </p>
              </div>

              {/* Toggle Switch */}
              <label className="relative inline-block w-[4.5em] h-[30px] max-[490px]:w-[38px] max-[490px]:h-[19px]">
                <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
                <span className="absolute inset-0 bg-[#f7f9fb] rounded-full transition-all duration-100 before:content-[''] before:absolute before:h-[1.2em] before:w-[1.2em] before:rounded-full before:left-[0.3em] before:bottom-[0.3em] before:bg-[#333] before:transition-all peer-checked:bg-[#22d3ee] peer-checked:before:translate-x-[2.5em] max-[490px]:before:h-[0.7em] max-[490px]:before:w-[0.7em] max-[490px]:before:left-[0.2em] max-[490px]:before:bottom-[0.2em] max-[490px]:peer-checked:before:translate-x-[1.2em]" />
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Threat;
