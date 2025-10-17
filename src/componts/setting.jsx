import React from "react";
import Menu from "./svg5/menu.svg";
import Load from "./setting/load.svg";
import Phone from "./svg5/phone.svg";
import Switch from "./switch";

import { Home, Smartphone, User, Bell } from "lucide-react";

function Setting() {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center p-5 bg-[#101929]">
          <div className="flex items-center gap-4">
            <img src={Menu} alt="" />

            {/* setting heading */}
            <div>
              <h2 className="text-2xl font-bold p-1">Setting</h2>
              <p className="text-[#b0b0b0] text-sm">
                Configure security preferences and app behavior
              </p>
            </div>
          </div>
          {/*setting title  */}
          <div className="flex items-center gap-2 border border-[#b0b0b0] rounded-xl p-2">
            <img src={Load} alt="" />
            <p className="text-sm bg-[#101929]">Check Updates</p>
          </div>
        </nav>

        <div className="  my-4 mx-5 p-4 bg-[#141E2E] rounded-xl">
          <div className="flex gap-2">
            <img src={Phone} alt="" />
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
        <div className="bg-[#141E2E] py-2 px-5 mx-3 rounded-xl">
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
        <div className="bg-[#141E2E] py-2 px-5 mx-3 rounded-xl">
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

        {/* End of Notification */}

        {/*  stRT OF aDVANCED oPTION */}
      </div>
    </>
  );
}

export default Setting;
