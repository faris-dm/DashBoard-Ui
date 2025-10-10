import React from "react";
import menu from "./svg/menu.svg";
import check from "./svg/check.svg";
import Finger from "./svg3/fingerPrint.svg";
import smallFinger from "./svg3/smallFinger.svg";
import protection from "./svg/protection.svg";

import error from "./svg3/error.svg";
import smallError from "./svg3/error2.svg";

import smallProtection from "./svg3/smallProtection.svg";
import cpu from "./svg3/cpu.svg";
import Greenpro from "./svg4/Greenpro.svg";

import eye from "./svg3/eye.svg";
import screen from "./svg3/screen.svg";
import key from "./svg3/key.svg";
import global from "./svg4/globe.svg";
import wifi from "./svg4/wifi.svg";
import server from "./svg4/server.svg";
import GreenGlobal from "./svg4/BigGlobal.svg";

function Security() {
  return (
    <>
      <div>
        <div className="  nav flex flex-initial bg-[#0E1629] justify-between items-center px-8 py-5 text-white font-system-ui-500">
          <div className="menuTitle flex items-center gap-4 cursor-pointer">
            <img src={menu} alt="" />
            <div>
              <h2 className="text-white text-2xl md py-1 font-bold ">
                Device Security
              </h2>
              <p className="  text-[#b0b0b0] text-sm  font-serif md:m-2 sm:px-5 ">
                Hardware-level protection and biometric authentication
              </p>
            </div>
          </div>
          <div
            className="flex  gap-1 items-center px-1 py-1
             border-2 border-[#4AD86D]   bg-[#4AD86D] text-  rounded-2xl text-black cursor-pointer   "
          >
            <img className=" text-black" src={global} alt="" />
            <p className="text-xs px-2  font-bold  ">Connct VPN</p>
          </div>
        </div>
        <div
          className="Items grid lg:grid-cols-4 md:grid-cols-2  mx-2 my-4    
      duration-300 ease-in "
        >
          <div className="options  text-white bg-[#101929] px-3  py-4 mx-2 my-3 rounded-xl ">
            <img src={check} alt="" />
            <div className=" py-4 text-center">
              <h2 className="text-white font-serif font-light">
                Root Detection
              </h2>
              <div className=" border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs inline-block ">
                Secures
              </div>
              <p className="text-gray-400 text-xs py-2 ">
                No root/jailbreak detected
              </p>
            </div>
          </div>
          <div className="options text-white bg-[#101929] px-3  py-4 mx-2 rounded-xl my-3  duration-300 ease-in ">
            <img src={check} alt="" />
            <div className=" py-4 text-center">
              <h2 className="text-white font-system-ui font-normal">
                Bootloader
              </h2>
              <div className=" border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs inline-block ">
                Secures
              </div>
              <p className="text-gray-400 text-xs py-2">
                bootloader is locked and secure
              </p>
            </div>
          </div>
          <div className="options text-white bg-[#101929] px-3  py-4 mx-2 rounded-xl my-3   ">
            <img src={check} alt="" />
            <div className=" py-4 text-center">
              <h2 className="text-white font-serif font-light">
                Root Detection
              </h2>
              <div className=" border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs inline-block ">
                Secures
              </div>
              <p className="text-gray-400 text-xs py-2">
                System integrity verified
              </p>
            </div>
          </div>
          <div className="options  my-4 text-white bg-[#101929] px-3  py-4 mx-2 rounded-xl ">
            <img src={check} alt="" />
            <div className="  py-3 text-center">
              <h2 className="text-white font-serif font-light">
                secure Element
              </h2>
              <div className=" border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs inline-block ">
                Secures
              </div>
              <p className="text-gray-400 text-xs py-2">
                Hardware security module active
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex  md:block  sm:block  xs:block">
          <div className="biometric rounded-xl mx-4 my-2    bg-[#101929] flex-1">
            <div className="title flex items-center   gap-2  bg-[#101929] p-3">
              <img className=" cursor-pointer" src={Finger} alt="" />
              <h2 className="text-2xl  font-medium ">Network Protection</h2>
            </div>
            <div>
              <div className="items ">
                <div className="option bg-[#1A2537] mx-4 my-3 rounded-lg">
                  <div className="py-3">
                    <div className="Auth flex items-center  justify-between  mx-4">
                      <div className=" flex  gap-3 mx-3 my-2 ">
                        <img src={GreenGlobal} alt="" />
                        <div className="Finger">
                          <h2 className="text-sm font-bold">VPN Protection</h2>
                          <p className="text-sm text-[#B0B0B0]">
                            Military-grade encryption for all network traffic
                          </p>
                        </div>
                      </div>
                      <div className="componts">
                        <label class="relative inline-flex items-center cursor-pointer">
                          <input
                            class="sr-only peer"
                            value=""
                            type="checkbox"
                          />
                          <div class="peer rounded-full outline-none duration-100 after:duration-500 w-22 h-10 bg-blue-300 peer-focus:outline-none peer-focus:ring-4  after:content-['Off'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-12 peer-checked:after:content-['on'] peer-checked:after:border-white"></div>
                        </label>
                      </div>
                    </div>

                    <div className="Quality mx-3">
                      <div className="flex justify-between items-center px-4 text-xs ">
                        <p className=" text-[#22D3EE] font-serif-system-ui text-xs">
                          {" "}
                          Connected to secure server
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="option  bg-[#1A2537] mx-4 my-3 py-3 rounded-lg ">
                  <div className=" flex items-center justify-between mx-4">
                    <div className="FaceTitle flex  gap-3">
                      <img src={Greenpro} alt="" />
                      <div className="py-1 px-3">
                        <h2 className="  font-bold py-1">
                          Firewall Protection
                        </h2>
                        <p className="text-sm text-[#b0b0b0]">
                          Block malicious connections and unauthorized access
                        </p>
                        <p className=" text-xs text-[#22D3EE]">
                          Active - 23 connections monitored
                        </p>
                      </div>
                    </div>
                    <div className="componts ">
                      {" "}
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          className="sr-only peer"
                          value=""
                          type="checkbox"
                        />
                        <div className="peer rounded-full outline-none duration-100 after:duration-500 w-22 h-10 bg-blue-300 peer-focus:outline-none peer-focus:ring-4  after:content-['Off'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-12 peer-checked:after:content-['on'] peer-checked:after:border-white"></div>
                      </label>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="option flex justify-between mx-4 my-2  bg-[#1A2537] py-4 ">
                  <div className="flex items-center gap-3 mx-5 my-2 ">
                    <img className="" src={server} alt="" />
                    <div>
                      <h2 className=" text-sm font-bold py-1">
                        MITM Detection
                      </h2>
                      <p className="text-sm text-[#B0B0B0]">
                        Detect and prevent man-in-the-middle attacks
                      </p>
                      <p className="text-xs text-[#22D3EE]">
                        Using secure DNS servers
                      </p>
                    </div>
                  </div>
                  <div className="dot">
                    <div className="componts pr-3">
                      {" "}
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          className="sr-only peer"
                          value=""
                          type="checkbox"
                        />
                        <div className="peer rounded-full outline-none duration-100 after:duration-500 w-22 h-10 bg-blue-300 peer-focus:outline-none peer-focus:ring-4  after:content-['Off'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-12 peer-checked:after:content-['on'] peer-checked:after:border-white"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* added here */}

                <div className="option flex justify-between mx-4 my-2  bg-[#1A2537] py-4 ">
                  <div className="flex items-center gap-3 mx-5 my-2 ">
                    <img src={screen} alt="" />
                    <div>
                      <h2 className=" text-sm font-bold py-1">
                        DNS Protection
                      </h2>
                      <p className="text-sm text-[#B0B0B0]">
                        Secure DNS resolution with malware blocking
                      </p>
                      <p className="text-xs text-[#22D3EE] ">
                        Using secure DNS servers
                      </p>
                    </div>
                  </div>
                  <div className="dot">
                    <div className="componts pr-3">
                      {" "}
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          className="sr-only peer"
                          value=""
                          type="checkbox"
                        />
                        <div className="peer rounded-full outline-none duration-100 after:duration-500 w-22 h-10 bg-blue-300 peer-focus:outline-none peer-focus:ring-4  after:content-['Off'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-12 peer-checked:after:content-['on'] peer-checked:after:border-white"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="config flex-1 bg-[#101929] p-3 rounded-xl ">
            <div className="flex gap-2 items-center">
              <img src={protection} alt="" />
              <h2 className="text-white text-2xl font-bold  px-2 py-3">
                Security Configuration
              </h2>
            </div>
            <div className="device flex justify-between items-center bg-[#1A2537] px-2 my-3 py-4  rounded-xl">
              <div className="flex gap-2">
                {" "}
                <img src={wifi} alt="" />
                <h2 className="text-lg font-thin">Device Encryption</h2>
              </div>
              <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                <img src={smallError} alt="" />
                <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                  secures
                </p>
              </div>
            </div>
            <div className="device flex justify-between items-center bg-[#1A2537] px-2 my-3 py-4  rounded-xl">
              <div className="flex gap-2 ">
                {" "}
                <img src={wifi} alt="" />
                <h2 className="text-lg font-thin">Secure Boot</h2>
              </div>
              <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                <img src={smallError} alt="" />
                <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                  secures
                </p>
              </div>
            </div>
            <div className="device flex justify-between items-center bg-[#1A2537] px-2 my-3 py-4  rounded-xl">
              <div className="flex items-center gap-2 ">
                {" "}
                <img src={wifi} alt="" />
                <h2 className="text-lg font-thin">App Verification</h2>
              </div>
              <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                <img src={smallError} alt="" />
                <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                  secures
                </p>
              </div>
            </div>
            <div className="device flex justify-between items-center bg-[#1A2537] px-2 my-3 py-4  rounded-xl">
              <div className="flex gap-2">
                {" "}
                <img src={wifi} alt="" />
                <h2 className="text-lg font-thin">Unknown Sources</h2>
              </div>
              <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                <img src={smallError} alt="" />
                <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                  secures
                </p>
              </div>
            </div>
            <div className="device flex justify-between items-center bg-[#1A2537] px-2 my-3 py-4  rounded-xl">
              <div className="flex gap-2">
                {" "}
                <img src={wifi} alt="" />
                <h2 className="text-lg font-thin">USB Debugging</h2>
              </div>
              <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                <img src={smallError} alt="" />
                <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                  secures
                </p>
              </div>
            </div>
            <div className="device flex justify-between items-center bg-[#1A2537] px-2 my-3 py-4  rounded-xl">
              <div className="flex gap-2">
                {" "}
                <img src={wifi} alt="" />
                <h2 className="text-lg font-thin">Developer Options</h2>
              </div>
              <div className="flex items-center gap-2  border-1   border-solid border-[#4AD86D]  rounded-2xl text-sm  text-[#4AD86D]  px-4 py-0 my-1 text-xs ">
                <img src={smallError} alt="" />
                <p className=" text-sm  text-[#4AD86D]    my-1 text-xs inline-block">
                  secures
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hardware bg-[#101929] my-6  mx-2  rounded-xl ">
          <div className="">
            <div className="flex gap-3 mx-4 py-4">
              <img src={key} alt="" />
              <h2 className="text-white text-lg font-thin   font-system-ui ">
                VPN Connected
              </h2>
            </div>
            <div className="lg:flex md:flex  items-center justify-between mb-4 sm:block  ">
              <div className="text-center bg-[#1A2537] flex-1 mx-2 rounded-xl py-3  ">
                <h2 className=" text-[#22D3EE] font-bold text-2xl">256</h2>
                <p className=" text-sm text-[#22D3EE]">
                  Connected to secure server in Netherlands • IP:
                  185.232.xxx.xxx
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Security;
