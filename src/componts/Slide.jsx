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
      <div>
        <div>
          <Shield className="text-[#22d3ee]" />
          <div>
            <h2>SecureShield</h2>
            <p>Pro Edition</p>
          </div>
        </div>
        {/*  Shield end here */}

        {/* Center start here */}

        <div>
          <p>Security Center</p>
          <div>
            <House className="text-[#b0b0b0]" />
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
            <Settings className="text-[#b0b0b0 w-10 h-10 " />
            <h2 className="">Dashboard</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slide;
