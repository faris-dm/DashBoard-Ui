import React from "react";
import { Wifi, Shield } from "lucide-react";

import menu from "./svg/menu.svg";
import protection from "./svg/protection.svg";
import heart from "./svg/heart.svg";
import locked from "./svg/locked.svg";
import wi_fi from "./svg/wifi.svg";
import sheld from "./svg/sheld.svg";
import right_shield from "./svg/right_sheild.svg";
import location from "./svg/location.svg";
import Eye from "./svg/eye.svg";
import wifiTwo from "./svg/wifi2.svg";
import data from "./svg/data.svg";
import phone from "./svg/phone.svg";
import green_check from "./svg/greenPost.svg";
import wrong from "./svg/wrong.svg";
import alert from "./svg/alert.svg";

function Dashboard({ toggleSlide }) {
  return (
    <>
      {/* <Slide /> */}
      <div className=" text-slate-400 bg-[#020817] min-h-screen font-sans">
        <div className="  fixed  top-0 left-0  w-full z--1  flex items-center justify-between bg-[#17223a] px-6 py-2 mb-3">
          <div className="flex items-center gap-5">
            <img
              onClick={toggleSlide}
              src={menu}
              alt=""
              className="opacity-90 hover:opacity-100 cursor-pointer"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
              <p className="text-sm">
                Real-time protection status and threat monitoring
              </p>
            </div>
          </div>
          <p className="px-4 py-1 border border-green-500 rounded-full text-xs font-medium cursor-pointer">
            Protected
          </p>
        </div>

        {/* Security Score */}
        <div className="bg-[#1A2A44] border border-gray-500 rounded-lg p-3 mx-5 mb-5 transition-all mt-25">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="text-[#22d3ee]" />
            <h3 className="text-2xl text-white font-bold">Security Score</h3>
          </div>

          <div className=" flex items-center gap-3">
            <div className=" text-center">
              <p className="text-cyan-400 font-medium text-3xl">94%</p>
              <p className="text-sm">Excellent</p>
            </div>

            <div className=" ml-3  w-9/10">
              <div className="w-[94%] h-[13px] bg-gray-500 rounded-full mt-4 cursor-pointer">
                <div className="w-[86%] h-[13px] bg-cyan-400 rounded-full"></div>
              </div>
              <p className="text-[10px] mt-1">
                Your device is highly secure with advanced protection enabled
              </p>
            </div>
          </div>
        </div>

        {/* Option Section */}
        <div className="grid grid-cols-4 gap-4 mx-4 my-5 max-md:grid-cols-2 max-sm:grid-cols-1 ">
          <div className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]">
            <div>
              <h3 className="text-white text-2xl font-semibold">127</h3>
              <p>Threats Blocked Today</p>
            </div>
            <img src={protection} alt="" />
          </div>

          <div className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]">
            <div>
              <h3 className="text-white text-2xl font-semibold">3</h3>
              <p>Active Scans</p>
            </div>
            <img src={heart} alt="" />
          </div>

          <div className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]">
            <div>
              <h3 className="text-white text-2xl font-semibold">24</h3>
              <p>Protected Apps</p>
            </div>
            <img src={locked} alt="" />
          </div>

          <div className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]">
            <div>
              <h3 className="text-white text-2xl font-semibold">8</h3>
              <p>Network Connections</p>
            </div>
            <Wifi className="text-[#22d3ee]" />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-6 mx-9 my-10 max-lg:grid-cols-1">
          {/* Section 1 */}
          <div className="bg-[#101929] border border-gray-300 rounded-2xl p-5">
            <h1 className="text-white text-xl font-medium mb-4">
              Security Features
            </h1>
            {[
              { icon: right_shield, text: "Real-time Protection" },
              { icon: Eye, text: "Biometric Lock" },
              { icon: wifiTwo, text: "Network Shield" },
              { icon: location, text: "Anti-Theft" },
              { icon: data, text: "Data Vault" },
              { icon: phone, text: "Root Detection" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center bg-[#1a2a44] border border-black rounded-lg p-3 mb-4 text-white cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt="" />
                  <h4 className="text-base">{item.text}</h4>
                </div>
                <div className="flex items-center gap-2 text-green-500 border border-green-500 px-3 py-1 rounded-full text-sm">
                  <img src={green_check} alt="" /> check
                </div>
              </div>
            ))}
          </div>

          {/* Section 2 */}
          <div className="bg-[#101929] border border-gray-300 rounded-2xl p-5">
            <h1 className="text-white text-xl font-medium mb-4">
              Recent Alerts
            </h1>

            <div className="flex justify-between items-center bg-[#1a2a44] border border-black rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <img src={wrong} alt="" />
                <h4>Malicious app installation blocked</h4>
              </div>
              <p className="text-red-400 border border-red-400 px-3 py-1 rounded-full text-xs">
                high
              </p>
            </div>

            <div className="flex justify-between items-center bg-[#1a2a44] border border-black rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <img src={alert} alt="" />
                <h4>Suspicious network activity detected</h4>
              </div>
              <p className="text-orange-400 border border-orange-400 px-3 py-1 rounded-full text-xs">
                medium
              </p>
            </div>

            <div className="flex justify-between items-center bg-[#1a2a44] border border-black rounded-lg p-4 mb-4">
              <div className="flex items-center gap-3">
                <img src={green_check} alt="" />
                <h4>Device integrity check passed</h4>
              </div>
              <p className="text-green-400 border border-green-400 px-3 py-1 rounded-full text-xs">
                low
              </p>
            </div>

            <div className="flex justify-between items-center bg-[#1a2a44] border border-black rounded-lg p-4">
              <div className="flex items-center gap-3">
                <img src={wrong} alt="" />
                <h4>Phishing attempt blocked</h4>
              </div>
              <p className="text-red-400 border border-red-400 px-3 py-1 rounded-full text-xs">
                high
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
