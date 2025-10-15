import React from "react";

import Location from "./svg5/Location.svg";
import Alert from "./svg5/Alert.svg";
import Menu from "./svg5/menu.svg";
import BigLocation from "./svg5/BigLocation.svg";
import Phone from "./svg5/phone.svg";
import camera from "./svg5/camera.svg";
import sound from "./svg5/sound.svg";
import trush from "./svg5/trush.svg";
import eye from "./svg5/eye.svg";
import flash from "./svg5/flash.svg";
import Protection from "./svg5/protection.svg";
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
              className="flex items-center gap-1
            border border-gray-400 rounded-lg p-2  bg-[#731C1E] "
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

      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-1 mb-2">
        <div>
          <div className="m-4 rounded-xl bg-[#101929]">
            <div className="flex items-center m-3 p-5  ">
              <img className="" src={small} alt="" />
              <h2 className="text-xl font-bold px-2">Protection features</h2>
            </div>

            {/*  frist compoents */}
            <div className="flex items-center justify-between m-4 p-3 bg-[#1A2537]  rounded-xl">
              <div className=" items-center   rounded-xl ">
                <div className=" flex items-start gap-2">
                  <img src={small} alt="" />
                  <div>
                    <h3 className=" text-lg font-medium">GPS Tracking</h3>
                    <p className="text-[#b0b0b0] text-xs">
                      Real-time location tracking with 3-meter accuracy
                    </p>
                    <p className="text-[#22d3ee] text-xs py-1">
                      Active - Location updated 2 min ago
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Switch />{" "}
              </div>
            </div>

            {/* end of frist compoents */}

            {/*  the second section  */}
            <div className="flex items-center m-4 p-3 justify-between  bg-[#1A2537]  rounded-xl">
              <div className=" items-center  rounded-xl ">
                <div className=" flex items-start gap-2">
                  <img src={small} alt="" />
                  <div>
                    <h3 className=" text-lg font-medium">Remote Lock</h3>
                    <p className="text-[#b0b0b0] text-sm">
                      Remote Lock device remotely with custom message
                    </p>
                    <p className="text-[#22d3ee] text-xs py-1">
                      Ready - Can be triggered remotely
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Switch />{" "}
              </div>
            </div>

            {/* end here */}

            {/*  fourth componts  */}
            <div className="flex items-center justify-between m-4 p-3  bg-[#1A2537]  rounded-xl">
              <div className=" items-center  rounded-xl ">
                <div className=" flex items-start gap-2">
                  <img src={small} alt="" />
                  <div>
                    <h3 className=" text-lg font-medium">Remote Wipe</h3>
                    <p className="text-[#b0b0b0] text-xs">
                      Securely erase all data if device is stolen
                    </p>
                    <p className="text-[#22d3ee] text-xs py-1">
                      Armed - Will activate on command
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Switch />{" "}
              </div>
            </div>

            {/* fourth componets end */}

            {/*  fifth compoents  */}

            <div className="flex items-center justify-between m-4 p-3  bg-[#1A2537]  rounded-xl">
              <div className=" items-center  rounded-xl ">
                <div className=" flex items-start gap-2">
                  <img src={camera} alt="" />
                  <div>
                    <h3 className=" text-lg font-medium">Stealth Camera</h3>
                    <p className="text-[#b0b0b0] text-xs">
                      Take photos when wrong unlock attempts are made
                    </p>
                    <p className="text-[#22d3ee] text-xs py-1">
                      Monitoring - 3 failed attempts trigger
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Switch />{" "}
              </div>
            </div>
            {/*  fith compoents  ends here */}

            {/*  six componts  */}

            <div className="flex items-center justify-between bg-[#1A2537] m-4 p-3 rounded-xl">
              <div className=" items-center  rounded-xl">
                <div className=" flex items-start gap-2">
                  <img src={sound} alt="" />
                  <div>
                    <h3 className=" text-lg font-medium">Loud Alarm</h3>
                    <p className="text-[#b0b0b0] text-xs">
                      Sound alarm even when device is on silent
                    </p>
                    <p className="text-[#22d3ee] text-xs py-1">
                      Disabled - Can be enabled remotely
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Switch />{" "}
              </div>
            </div>

            {/* six componets end */}

            {/* final Componets */}

            <div className="flex items-center justify-between  bg-[#1A2537] m-4 p-3 rounded-xl">
              <div className=" items-center  rounded-xl ">
                <div className=" flex items-start gap-2">
                  <img src={Phone} alt="" />
                  <div>
                    <h3 className=" text-lg font-medium">SIM Change Alert</h3>
                    <p className="text-[#b0b0b0] text-xs">
                      Alert trusted contacts when SIM card is changed
                    </p>
                    <p className="text-[#22d3ee] text-xs py-1">
                      Monitoring - 2 trusted contacts configured
                    </p>
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <Switch />{" "}
              </div>
            </div>

            {/*  end of sixth compoents */}
          </div>
          {/* finish the frist mthod */}
        </div>

        <div>
          <div className=" TRusted bg-[#161F2F]">
            <div className="flex items-center m-3 p-5  ">
              <img className="" src={eye} alt="" />
              <h2 className="text-2xl font-normal px-2">Trusted Contacts</h2>
            </div>

            {/*  frist compoents */}
            <div className="flex items-center justify-between m-4 p-2 bg-[#1A2537]  rounded-xl">
              <div className=" items-center  rounded-xl ">
                <div className=" flex items-start gap-2">
                  <div>
                    <h3 className=" text-lg font-medium">John Doe</h3>
                    <p className="text-[#b0b0b0] text-sm">+1 (555) 123-4567</p>
                    <p className="text-[#22d3ee] text-xs py-1">Family</p>
                  </div>
                </div>
              </div>
              <div>
                {/* hhhhhhhh */}
                <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                  <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                    Active
                  </p>
                </div>
                {/* kkkk */}
              </div>
            </div>

            <div className="flex items-center justify-between m-4 p-2 bg-[#1A2537]  rounded-xl">
              <div className=" items-center  rounded-xl ">
                <div className=" flex items-start gap-2">
                  <div>
                    <h3 className=" text-lg font-medium">Jane Smith</h3>
                    <p className="text-[#b0b0b0] text-sm">+1 (555) 123-4567</p>
                    <p className="text-[#22d3ee] text-xs py-1">Family</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                  <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                    Active
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-5 p-1">
              <button
                className="w-full
             mb-5  active:scale-98
            border border-gray-400 rounded-lg  bg-[#020817] hover:opacity-40 hover:duration-300 ease-in-out"
              >
                <p className="text-sm p-2"> Add Contact</p>
              </button>
            </div>
          </div>
          {/* start on the first componts */}

          {/*  gap between them */}

          <div>
            <div className=" TRusted bg-[#101929]">
              <div className="flex items-center m-2 p-3  ">
                <img className="" src={flash} alt="" />
                <h2 className="text-2xl font-bold px-2">Recent Activity</h2>
              </div>

              {/*  frist compoents */}
              <div className="flex items-center justify-between  bg-[#1A2537] m-1 rounded-xl">
                <div className=" items-center  p-1 rounded-xl m-3">
                  <div className=" flex items-start gap-2 ">
                    <div>
                      <h3 className=" text-normal font-small ">
                        Location updated
                      </h3>

                      <p className="text-[#b0b0b0] text-xs py-1">
                        2 minutes ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* hhhhhhhh */}
                  <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4   text-xs ">
                    <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                      Normal
                    </p>
                  </div>
                  {/* kkkk */}
                </div>
              </div>
              {/*  down */}
              <div className="flex items-center justify-between  bg-[#1A2537] m-4 rounded-xl">
                <div className=" items-center  p-2 rounded-xl m-3">
                  <div className=" flex items-start gap-2 ">
                    <div>
                      <h3 className=" text-normal font-small ">
                        Geofence: Left home zone
                      </h3>

                      <p className="text-[#b0b0b0] text-xs py-1">2 hours ago</p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* hhhhhhhh */}
                  <div className="flex items-center gap-2  border-1   border-solid border-blue-600  rounded-2xl text-sm  text-[#4AD86D]  px-4   text-xs ">
                    <p className=" text-sm  text-blue-700    my-1 text-xs inline-block">
                      info
                    </p>
                  </div>
                  {/* kkkk */}

                  {/*  finish */}
                </div>
              </div>

              {/*  */}
              <div className="flex items-center justify-between  bg-[#1A2537] m-4 mb-6 rounded-xl">
                <div className=" items-center  p-2 rounded-xl m-3">
                  <div className=" flex items-start gap-2  ">
                    <div>
                      <h3 className=" text-normal font-small ">
                        Device unlocked successfully
                      </h3>

                      <p className="text-[#b0b0b0] text-xs py-1">
                        15 minutes ago
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* hhhhhhhh */}
                  <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4   text-xs ">
                    <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                      Normal
                    </p>
                  </div>
                  {/* kkkk */}

                  {/*  finish */}
                </div>
              </div>

              {/* down */}
            </div>
          </div>

          {/*  finsih of the final componts */}
        </div>
      </div>
    </>
  );
}

export default AntiThef;
