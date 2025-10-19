import React from "react";

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
  return (
    <>
      <div className="bg-[#2B1E1E] w-96 h-screen">
        <div className="flex items-center  gap-4 mx-5 my p-4 ">
          <Shield className="text-[#22d3ee] w-10 h-10    " />
          <div>
            <h2 className="font-bold text-xl">SecureShield</h2>
            <p className="text-[#22d3ee] text-xs font-normal">Pro Edition</p>
          </div>
        </div>
        {/*  Shield end here */}

        {/* Center start here */}

        <div className="text-[#6c6c6b]">
          <p className=" border-t  border-silver-100"></p>
          <p className=" pt-5">Security Center</p>
          <div>
            <House className="text-[#6c6c6b]" />
            <h2 className="">Dashboard</h2>
          </div>
          {/* className="" dashboard */}
          <div>
            <ShieldAlert className="text-[#b0b0b0]" />
            <h2 className="">Dashboard</h2>
          </div>
          {/* Therat Detection */}
          <div>
            <Lock className="text-[#b0b0b0]" />
            <h2 className="">Dashboard</h2>
          </div>
          {/* Data Valuet */}
          {/* Network Protection */}
          <div>
            <Smartphone className="text-[#b0b0b0]" />
            <h2 className="">Dashboard</h2>
          </div>
          {/* Anti theif */}
          <div>
            <Wifi className="text-[#b0b0b0]" />
            <h2 className="">Dashboard</h2>
          </div>
          {/* setting */}
          <div>
            <Settings className="text-[#b0b0b0  focus:bg-red-400" />
            <h2 className="">Dashboard</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
