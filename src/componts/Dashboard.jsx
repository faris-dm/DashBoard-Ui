import React from "react";
import {
  Wifi,
  Shield,
  Lock,
  PanelsTopLeft,
  Activity,
  ShieldCheck,

  // Eye,
} from "lucide-react";

import menu from "./svg/menu.svg";

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
import { delay, motion } from "framer-motion";

function Dashboard({ toggleSlide }) {
  return (
    <>
      {/* <Slide /> */}
      <div className=" text-slate-400 bg-[#020817] min-h-screen font-sans">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1.3, y: -1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="  fixed  top-0 left-0  w-full z-1  flex items-center justify-between bg-[#17223a] px-6 py-2 mb-3"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 2.9 }}
            className="flex items-center gap-5"
          >
            <PanelsTopLeft
              className="opacity-90 hover:opacity-100 cursor-pointer"
              onClick={toggleSlide}
            />
            {/* <img
              onClick={toggleSlide}
              src={menu}
              alt=""
              className="opacity-90 hover:opacity-100 cursor-pointer"
            /> */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1.3, y: -1 }}
              transition={{ duration: 2, delay: 3 }}
            >
              <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
              <p className="text-sm">
                Real-time protection status and threat monitoring
              </p>
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 2 }}
            className="px-4 py-1 border border-green-500 rounded-full text-xs font-medium cursor-pointer"
          >
            Protected
          </motion.p>
        </motion.div>

        {/* Security Score */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1.3, y: -1 }}
          transition={{ duration: 1.7, delay: 2.2 }}
          className="bg-[#1A2A44] border border-gray-500 rounded-lg p-3 mx-5 mb-5 transition-all z--1 mt-25"
        >
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 5 }}
            className="flex items-center gap-2 mb-3"
          >
            <Shield className="text-[#22d3ee]" />
            <h3 className="text-2xl text-white font-bold">Security Score</h3>
          </motion.div>

          <div className=" flex items-center gap-3">
            <div className=" text-center">
              <motion.p
                initial={{ opacity: 0, x: -53 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3, delay: 2.7 }}
                className="text-cyan-400 font-medium text-3xl"
              >
                94%
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 3.7 }}
                className="text-sm"
              >
                Excellent
              </motion.p>
            </div>

            <div className=" ml-3  w-9/10">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3, delay: 2.7 }}
                className="w-[94%] h-[13px] bg-gray-500 rounded-full mt-4 cursor-pointer"
              >
                <div className="w-[86%] h-[13px] bg-cyan-400 rounded-full"></div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 3.7 }}
                className="text-[10px] mt-1"
              >
                Your device is highly secure with advanced protection enabled
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Option Section */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3.7 }}
          className="grid grid-cols-4 gap-4 mx-4 my-5 max-md:grid-cols-2 max-sm:grid-cols-1 "
        >
          <motion.div
            initial={{ opacity: 0, x: -153 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 2.7 }}
            className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]"
          >
            <div>
              <h3 className="text-white text-2xl font-semibold">127</h3>
              <p>Threats Blocked Today</p>
            </div>
            {/* <img src={protection} alt="" /> 
            
            */}
            <ShieldCheck className="text-[#22d3ee]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -153 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 2.7 }}
            className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]"
          >
            <div>
              <h3 className="text-white text-2xl font-semibold">3</h3>
              <p>Active Scans</p>
            </div>
            <Activity className="text-[#60A5FA]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 153 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 2.7 }}
            className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]"
          >
            <div>
              <h3 className="text-white text-2xl font-semibold">24</h3>
              <p>Protected Apps here</p>
            </div>
            <Lock className="text-green-700" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 153 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 2.7 }}
            className="flex justify-between items-center border border-silver rounded-lg p-4 bg-[#1A2A44]"
          >
            <div>
              <h3 className="text-white text-2xl font-semibold">8</h3>
              <p>Network Connections</p>
            </div>
            <Wifi className="text-[#22d3ee]" />
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3.7 }}
          className="grid grid-cols-2 gap-6 mx-9 my-10 max-lg:grid-cols-1"
        >
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

            <motion.div
              initial={{ opacity: 0, x: -153 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 2.7 }}
              className="flex justify-between items-center bg-[#1a2a44] border border-black rounded-lg p-4 mb-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -67 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3, delay: 4 }}
                className="flex items-center gap-3"
              >
                <img src={wrong} alt="" />
                <h4>Malicious app installation blocked</h4>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, delay: 6 }}
                className="text-red-400 border border-red-400 px-3 py-1 rounded-full text-xs"
              >
                high
              </motion.p>
            </motion.div>

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
        </motion.div>
      </div>
    </>
  );
}

export default Dashboard;
