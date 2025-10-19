import React, { useState } from "react";

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
  const [clicked, isClicked] = useState(false);

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
            onClick={ClickChange}
            className={`flex items-center gap-2 p-3 ${
              clicked ? "bg-cyan-950 rounded-xl" : ""
            }`}
          >
            <House
              className={`  ${
                clicked ? "text-[#22d3ee]  " : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]  font-medium    text-sm capitalize ">
              Threat Protection
            </h2>
          </div>
          {/* className="" dashboard */}
          <div
            onClick={ClickChange}
            className={`flex items-center gap-2 p-3 mt-2 ${
              clicked ? "bg-cyan-950 rounded-xl" : ""
            }`}
          >
            <ShieldAlert
              className={`  ${
                clicked ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
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
            onClick={ClickChange}
            className={`flex items-center gap-2 p-3 mt-2 ${
              clicked ? "bg-cyan-950 rounded-xl" : ""
            }`}
          >
            <Lock
              className={`  ${
                clicked ? "text-[#22d3ee]  " : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm capitalize font-medium ">
              Device Security
            </h2>
          </div>
          {/* Data Valuet */}
          {/* Network Protection */}
          <div
            onClick={ClickChange}
            className={`flex items-center gap-2 p-3 mt-2 ${
              clicked ? "bg-cyan-950 rounded-xl" : ""
            }`}
          >
            <Smartphone
              className={`  ${
                clicked ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm capitalize font-medium ">
              Protection
            </h2>
          </div>
          {/* Anti theif */}
          <div
            onClick={ClickChange}
            className={`flex items-center gap-2 p-3 mt-2 ${
              clicked ? "bg-cyan-950 rounded-xl" : ""
            }`}
          >
            <Wifi
              className={`  ${
                clicked ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
              } `}
            />
            <h2 className="text-[#b0b0b0]    text-sm capitalize font-medium ">
              Anti-Theft
            </h2>
          </div>
          {/* setting */}
          <div
            onClick={ClickChange}
            className={`flex items-center gap-2 p-3 mt-2 ${
              clicked ? "bg-cyan-950 rounded-xl" : ""
            }`}
          >
            <Settings
              className={`  ${
                clicked ? "text-[#22d3ee]  rounded-xl" : "text-[#b0b0b0]"
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
