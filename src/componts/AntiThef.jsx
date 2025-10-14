import React from "react";

import Location from "./svg5/Location.svg";
import Alert from "./svg5/Alert.svg";
import Menu from "./svg5/menu.svg";
import BigLocation from "./svg5/BigLocation.svg";

import small from "./svg5/smallLocation.svg";

function AntiThef() {
  return (
    <>
      <nav className="bg-[#101929] p-4 ">
        <div className="flex  gap-2 items-center py-2 justify-between">
          <div className="anti flex gap-3 items-center  ">
            <img src={Menu} alt="" />
            <div>
              <h2 className="text-2xl py-1 font-bold">Anti-Theft Protection</h2>
              <p className="text-[#b0b0b0] text-sm">
                Device tracking, remote control, and theft prevention
              </p>
            </div>
          </div>
          <div className="btn flex gap-4">
            <button
              className="flex items-center
            border border-gray-400 rounded-lg p-2 gap-2 hover:opacity-40 hover:duration-300 ease-in-out"
            >
              <img src={Location} alt="" />
              <p className="text-sm"> Locate Device</p>
            </button>
            <button
              className="flex items-center gap-2
            border border-gray-400 rounded-lg p-4 bg-[#731C1E] "
            >
              <img src={Alert} alt="" />
              <p className="text-sm ">Emergency Lock</p>
            </button>
          </div>
        </div>
      </nav>
      <div className="location flex items-center justify-between bg-[#141E2E] my-4 mx-10 px-10 py-4 rounded-xl">
        <div>
          <div className="Device flex gap-3 my-4 ">
            <img src={small} alt="" />
            <h2 className=" text-xl font-bold">Device Location</h2>
          </div>
          <div>
            <div className="my-3">
              <p className="text-[#b0b0b0] text-sm ">Current Location</p>
              <h2 className="font-normal">New York, NY, USA</h2>
            </div>
            <p className="text-sm text-[#b0b0b0] p]">Coordinates</p>
            <h5 className="text-monospace text-sm">40.7128, -74.0060</h5>
          </div>
          <div className="py-2">
            <p className="text-[#b0b0b0] text-sm">Last Seen</p>
            <p className="text-green-400 font-sm">2 minutes ago</p>
          </div>
        </div>

        <div className=" bg-[#1C2739]  py-10 px-6 rounded-lg">
          <div className="text-center">
            <img className="text-center margin-auto" src={BigLocation} alt="" />
          </div>
          <p>Interactive map would appear here</p>
        </div>
      </div>
    </>
  );
}

export default AntiThef;
