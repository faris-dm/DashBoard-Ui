import React from "react";

import Location from "./svg5/Location.svg";
import Alert from "./svg5/Alert.svg";
import Menu from "./svg5/menu.svg";
import BigLocation from "./svg5/BigLocation.svg";
import { motion } from "framer-motion";
import Switch from "./switch";

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
      <div className="location  flex  items-center justify-between gap-3 bg-[#141E2E] my-4 mx-10 px-10 py-4 rounded-xl">
        <div flex items-center justify-between>
          <div className="Device flex  gap-3 my-4 ">
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

        <div
          className="flex  gap-4 bg-[#1C2739]  py-12 px-12 
        w-100 rounded-lg"
        >
          <div className="text-center">
            <img
              className="text-center  margin-auto"
              src={BigLocation}
              alt=""
            />
          </div>
          <p className=" items-center  text-normal text-sm font-mono">
            Interactive map would appear here
          </p>
        </div>
      </div>

      <div className="my-4 bg-[#101929]">
        <div>
          <img className="text-red" src="" alt="" />
          <h2>Protection features</h2>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#1A2537]">
          <div className="p-2">
            {" "}
            <h3 className="">GPS Tracking</h3>
            <p>
              GPS Tracking Real-time location tracking with 3-meter accuracy
            </p>
            <p>Active - Location updated 2 min ago</p>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
}

export default AntiThef;
