import React, { useState } from "react";
import { motion } from "motion/react";

import {
  Shield,
  House,
  ShieldAlert,
  Smartphone,
  Wifi,
  Lock,
  Settings,
} from "lucide-react";

function Slide() {
  const [clicked, isClicked] = useState(null);

  const ClickChange = () => {
    isClicked(true);
  };

  return (
    <>
      {/* lg:hidden md:block sm:hidden */}
      <div className="  fixed top-0 left-0 bg-[#1E1B1E] w-96 h-screen z-1">
        <div className="flex items-center  gap-4 mx-5 my p-4 ">
          <Shield className="text-[#22d3ee] w-10 h-10    " />
          <div>
            <h2 className="font-bold text-xl">SecureShield</h2>
            <p className="text-[#22d3ee] text-xs font-normal">Pro Edition</p>
          </div>
        </div>
        {/*  Shield end here */}

        {/* Center start here */}

        <div className="text-[#6c6c6b] px-2">
          <p className=" border-t  border-silver-100"></p>
          <p className=" pt-3 pb-2 px-2">Security Center</p>
          <div
            onClick={() => isClicked(1)}
            className={`flex items-center gap-2 p-3 hover:bg-cyan-950 hover:rounded-xl  ${
              clicked === 1 ? "bg-cyan-700 rounded-xl" : ""
            }`}
          >
            <House
              className={`  ${
                clicked === 1 ? "text-[#22d3ee]  " : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]  font-medium    text-sm capitalize ">
              Threat Protection
            </h2>
          </div>
          {/* className="" dashboard */}
          <div
            onClick={() => isClicked(2)}
            className={`flex items-center gap-2 p-3 mt-2 hover:bg-cyan-950 hover:rounded-xl  ${
              clicked === 2 ? "bg-cyan-700 rounded-xl" : ""
            }`}
          >
            <ShieldAlert
              className={`  ${
                clicked === 2 ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm font-medium capitalize ">
              Data Vault
            </h2>
          </div>
          {/* ✅ :hover → when the user points
✅ :focus → when the element is selected (focused)
✅ :active → when the element is clicked or pressed */}
          {/* Therat Detection */}
          <div
            onClick={() => isClicked(3)}
            className={`flex items-center gap-2 p-3 mt-2 hover:bg-cyan-950 hover:rounded-xl  ${
              clicked === 3 ? "bg-cyan-700 rounded-xl" : ""
            }`}
          >
            <Lock
              className={`  ${
                clicked === 3 ? "text-[#22d3ee]  " : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm capitalize font-medium ">
              Device Security
            </h2>
          </div>
          {/* Data Valuet */}
          {/* Network Protection */}
          <div
            onClick={() => isClicked(4)}
            className={`flex items-center gap-2 p-3 mt-2 hover:bg-cyan-950 hover:rounded-xl  ${
              clicked === 4 ? "bg-cyan-700 rounded-xl" : ""
            }`}
          >
            <Smartphone
              className={`  ${
                clicked === 4 ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm capitalize font-medium ">
              Protection
            </h2>
          </div>
          {/* Anti theif */}
          <div
            onClick={() => isClicked(5)}
            className={`flex items-center gap-2 p-3 mt-2 hover:bg-cyan-950 hover:rounded-xl  ${
              clicked === 5 ? "bg-cyan-700 rounded-xl" : ""
            }`}
          >
            <Wifi
              className={`  ${
                clicked === 5 ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm capitalize font-medium ">
              Anti-Theft
            </h2>
          </div>
          {/* setting */}
          <div
            onClick={() => isClicked(6)}
            className={`flex items-center gap-2 p-3 mt-2 hover:bg-cyan-950 hover:rounded-xl  ${
              clicked === 6 ? "bg-cyan-700 rounded-xl" : ""
            }`}
          >
            <Settings
              className={`  ${
                clicked === 6 ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm capitalize font-medium ">
              Setting
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
