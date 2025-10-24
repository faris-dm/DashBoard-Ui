import React, { useState } from "react";
import Menu from "./svg5/menu.svg";
import Load from "./setting/load.svg";
import Switch from "./switch";

import {
  Key,
  Home,
  Download,
  Smartphone,
  User,
  Bell,
  Upload,
  Globe,
  TriangleAlert,
} from "lucide-react";

function Setting({ toggleSlide }) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);

    // Stop the spin after 2 seconds (optional)
    setTimeout(() => {
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <>
      <div>
        <nav className="  z-1 fixed top-0   max-[550px]:mb-20 left-0 w-full flex justify-between items-center p-5 bg-[#101929]">
          <div className="flex items-center gap-4">
            <img onClick={toggleSlide} src={Menu} alt="" />

            {/* setting heading */}
            <div>
              <h2 className="text-2xl font-bold p-1">Setting</h2>
              <p className="text-[#b0b0b0] text-sm">
                Configure security preferences and app behavior
              </p>
            </div>
          </div>
          {/*setting title  */}
          <div
            onClick={handleClick}
            className="flex items-center gap-2 border border-[#b0b0b0] rounded-xl p-2 transition"
          >
            <img
              className={`w-6 h-6 ${
                isSpinning ? "animate-spin duration-500" : ""
              }`}
              //    we are using tailwind built funtion that makes a spins called animate-spin
              src={Load}
              alt=""
            />
            <p className="text-sm bg-[#101929]">Check Updates</p>
          </div>
        </nav>

        {/* ${isSpinning ? "animate-spin" : ""} */}

        <div className="max-[661px]:mt-35 sm:mt-30 md:mt-30  my-4 mx-5 p-4 bg-[#141E2E] rounded-xl">
          <div className="flex gap-2">
            {/* className="text-[#22D3EE] w-7 h-7 */}
            <Smartphone className="text-[#22D3EE] w-7 h-7 " />
            <h2 className="text-xl font-bold">System Information</h2>
          </div>
          {/* grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 */}

          <div className=" grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {/* container */}
            {/*  options */}
            <div className="flex  align-center justify-center  bg-[#1a2537] rounded-xl p-3 mt-5 mx-3">
              <div className="text-center text-[#b0b0b0] text-sm">
                <h3>App Version</h3>
                <p className="text-white font-bold">3.2.1</p>
              </div>
            </div>
            {/*  options */}
            <div className=" flex align-center justify-center  bg-[#1a2537] rounded-xl p-3 mt-5 mx-3">
              <div className="text-center text-[#b0b0b0] text-sm">
                <h3>Last Update</h3>
                <p className="text-white font-bold">2024-01-15</p>
              </div>
            </div>
            {/*  options */}
            <div className=" flex align-center justify-center  bg-[#1a2537] rounded-xl p-3 mt-5 mx-3">
              <div className="text-center text-[#b0b0b0] text-sm">
                <h3>Database Version</h3>
                <p className="text-white font-bold">2024.01.15</p>
              </div>
            </div>
            {/*  options */}
            <div className=" flex align-center justify-center  bg-[#1a2537] rounded-xl p-3 mt-5 mx-3">
              <div className="text-center text-[#b0b0b0] text-sm">
                <h3>License</h3>
                <p className="text-white font-bold">Pro Edition</p>
              </div>
            </div>
          </div>
        </div>
        {/* accounts profile */}
        <div
          className="grid  grid-cols-2 lg:grid-cols-2
        md:grid-cols-2  sm:grid-cols-1  max-[661px]:block  "
        >
          <div className=" bg-[#141E2E] py-2 px-5 mx-3 rounded-xl">
            <div className="Accounts flex items-center gap-3 mx-3 py-2">
              <User className="text-[#22D3EE] w-7 h-7" />
              <h2 className="text-xl font-bold">Account & Profile</h2>
            </div>

            {/* Accounts Options */}
            <div className="flex justify-between items-center bg-[#1A2537]  mx-3 my-4 px-4 py-5 rounded-xl capitalize font-medium">
              <div className="">
                <h3>Profile Information</h3>
                <p className="text-[#b0b0b0] font-light">
                  Update your personal details
                </p>
              </div>
              <Switch />
            </div>
            {/* option */}

            <div className="flex justify-between items-center bg-[#1A2537]  mx-3 my-4 px-4 py-5 rounded-xl capitalize font-medium">
              <div className="">
                <h3>Account Security</h3>
                <p className="text-[#b0b0b0] font-light">
                  Manage passwords and 2FA
                </p>
              </div>
              <Switch />
            </div>
            {/* option 2 */}
            <div className="flex justify-between items-center bg-[#1A2537]  mx-3 my-4 px-4 py-5 rounded-xl capitalize font-medium">
              <div className="">
                <h3>Privacy Settings</h3>
                <p className="text-[#b0b0b0] font-light">
                  Control data sharing preferences
                </p>
              </div>
              <Switch />
            </div>
            {/* option 3 */}
          </div>

          {/* Notification section */}
          <div className="bg-[#141E2E] py-2 px-5 mx-3  my-5 rounded-xl md:mb-10 sm:mb-12">
            <div className="Accounts flex items-center gap-3 mx-3 py-2">
              <Bell className="text-[#22D3EE] w-7 h-7" />
              <h2 className="text-xl font-bold">Notifications</h2>
            </div>

            {/* Accounts Options */}
            <div className="flex justify-between items-center bg-[#1A2537]  mx-3 my-4 px-4 py-5 rounded-xl capitalize font-medium">
              <div className="">
                <h3>Threat Alerts</h3>
                <p className="text-[#b0b0b0] font-light">
                  Real-time security notifications
                </p>
              </div>
              <Switch />
            </div>
            {/* option */}

            <div className="flex justify-between items-center bg-[#1A2537]  mx-3 my-4 px-4 py-5 rounded-xl capitalize font-medium">
              <div className="">
                <h3>Scan Completion</h3>
                <p className="text-[#b0b0b0] font-light">
                  Notify when scans finish
                </p>
              </div>
              <Switch />
            </div>
            {/* option 2 */}
            <div className="flex justify-between items-center bg-[#1A2537]  mx-3 my-4 px-4 py-5 rounded-xl capitalize font-medium">
              <div className="">
                <h3>System Updates</h3>
                <p className="text-[#b0b0b0] font-light">
                  App and security updates
                </p>
              </div>
              <Switch />
            </div>
            {/* option 3 */}
            <div className="flex justify-between items-center bg-[#1A2537]  mx-3 my-4 px-4 py-5 rounded-xl capitalize font-medium">
              <div className="">
                <h3>Weekly Reports</h3>
                <p className="text-[#b0b0b0] font-light">
                  Security summary emails
                </p>
              </div>
              <Switch />
            </div>
            {/* End of Option four */}
          </div>
        </div>

        {/* End of Notification */}

        {/*  Start of Setting */}

        <div className="bg-[#141E2E] py-2 px-5 mx-3 rounded-xl m-5 p-4">
          <div className="flex gap-3 my-2 ">
            <Key className="text-[#22D3EE] w-10 h-10" />
            <h2 className="text-2xl font-bold">Advanced Options</h2>
          </div>

          {/* start the upload */}
          <div className="">
            <div className=" flex gap-3 bg-[#020817] p-3  mx-3 rounded-xl border">
              <Download className="text-[#b0b0b0] w-5 h-5" />
              <h2> Export Security Logs</h2>
            </div>
          </div>

          {/*  second Import */}
          <div className="">
            <div className=" flex gap-3 bg-[#020817] p-3  mx-3  my-4 rounded-xl border">
              <Upload className="text-[#b0b0b0] w-5 h-5" />
              <h2> Inport Security Logs</h2>
            </div>
          </div>

          {/* Network section */}

          <div className=" ">
            <div className=" flex gap-3 bg-[#020817] p-3  mx-3  my-4 rounded-xl border">
              <Globe className="text-[#b0b0b0] w-5 h-5" />
              <h2> Network Diagnotics</h2>
            </div>
          </div>
          {/* Factory Restart */}

          <div className="">
            <div className=" flex gap-3 bg-[#020817] p-3  mx-3  my-4 rounded-xl border-red">
              <TriangleAlert className="text-red-400 w-5 h-5" />
              <h2 className="text-red-300"> Factory Reset</h2>
            </div>
          </div>

          {/*  heading end here */}
        </div>
      </div>
    </>
  );
}

export default Setting;
