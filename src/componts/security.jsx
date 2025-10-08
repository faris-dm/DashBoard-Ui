import React from "react";
import menu from "./svg/menu.svg";
import check from "./svg/check.svg";
import Finger from "./svg3/fingerPrint.svg";
import smallFinger from "./svg3/smallFinger.svg";

import eye from "./svg3/eye.svg";
import screen from "./svg3/screen.svg";

function Security() {
  return (
    <>
      <div>
        <div className="nav flex flex-initial bg-[#0E1629] justify-between items-center px-8 py-5 text-white font-system-ui-500">
          <div className="menuTitle flex items-center gap-4 cursor-pointer ">
            <img src={menu} alt="" />
            <div>
              <h2 className="text-white text-2xl py-1 font-bold">
                Device Security
              </h2>
              <p className=" text-[#b0b0b0] text-sm py-1 font-serif ">
                Hardware-level protection and biometric authentication
              </p>
            </div>
          </div>
          <div
            className=" flex flext-intital gap-2 items-center px-4 py-1
             border-2 border-[#4AD86D]   rounded-4xl text-green-200 cursor-pointer border-solid"
          >
            <img className="h-3" src={check} alt="" />
            <p className="text-xs">Secure Device</p>
          </div>
        </div>
        <div className="Items  grid grid-cols-4 gap-1 mx-2 my-4 ">
          <div className="options text-white bg-[#101929] px-3  py-4 mx-2 rounded-xl ">
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
          <div className="options text-white bg-[#101929] px-3  py-4 mx-2 rounded-xl  ">
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
          <div className="options text-white bg-[#101929] px-3  py-4 mx-2 rounded-xl  ">
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
          <div className="options text-white bg-[#101929] px-3  py-4 mx-2 rounded-xl ">
            <img src={check} alt="" />
            <div className="  py-4 text-center">
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
        <div className="biometric mx-4 my-2  bg-[#101929]">
          <div className="title flex items-center   gap-2  bg-[#101929] p-3 bg-[]">
            <img className=" cursor-pointer" src={Finger} alt="" />
            <h2 className="text-2xl  font-medium ">Biometric Authentication</h2>
          </div>
          <div className=" flex">
            <div className="items flex-1">
              <div className="option bg-[#1A2537] mx-4 my-3 rounded-lg">
                <div className="py-3">
                  <div className="Auth flex items-center  justify-between  mx-4">
                    <div className=" flex  gap-3 mx-3 my-2">
                      <img src={smallFinger} alt="" />
                      <div className="Finger">
                        <h2 className="text-sm font-bold">
                          Fingerprint Authentication
                        </h2>
                        <p className="text-xs text-[#B0B0B0]">
                          Hardware-backed fingerprint recognition
                        </p>
                      </div>
                    </div>
                    <div className="componts">
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input class="sr-only peer" value="" type="checkbox" />
                        <div class="peer rounded-full outline-none duration-100 after:duration-500 w-22 h-10 bg-blue-300 peer-focus:outline-none peer-focus:ring-4  after:content-['Off'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-12 peer-checked:after:content-['on'] peer-checked:after:border-white"></div>
                      </label>
                    </div>
                  </div>

                  <div className="Quality mx-3">
                    <div className="Reco">
                      <h2 className=" text-serif">Recognition Quality</h2>
                      <div className="w-8/9 bg-gray-200 rounded-full h-4 mt-2">
                        <div className="bg-blue-600 h-4 rounded-full w-4/5  "></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-4 text-xs ">
                      <p className=" text-[#b0b0b0] font-serif-system-ui">
                        {" "}
                        fingers enrolled
                      </p>
                      <p className=" text-[#b0b0b0] pr-8 pt-2  ">93%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="option  bg-[#1A2537] mx-4 my-3 py-3 rounded-lg ">
                <div className=" flex items-center justify-between mx-4">
                  <div className="FaceTitle flex  gap-3">
                    <img src={eye} alt="" />
                    <div className="py-1 px-3">
                      <h2 className="text-sm  font-bold py-1">
                        Face Recognition
                      </h2>
                      <p className="text-xs text-[#b0b0b0]">
                        3D facial mapping with liveness detection
                      </p>
                    </div>
                  </div>
                  <div className="componts">
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
                <div>
                  <div className="px-3 text- [#b0b0b0] ">
                    <p>Recognation Quality </p>
                    <div className="w-8/9 bg-gray-200 rounded-full h-4 mt-2">
                      <div className="bg-blue-600 h-4 rounded-full w-14/15  "></div>
                    </div>
                    <div className="flex  justify-between py-1 text-xs">
                      <p>face enrolled</p>
                      <p className="pr-8 pt-2">98%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="option flex justify-between mx-4 my-2  bg-[#1A2537] py-4 ">
                <div className="flex items-center gap-3 mx-5 my-2 ">
                  <img src={screen} alt="" />
                  <div>
                    <h2 className=" text-sm font-bold py-1">Iris Scanning</h2>
                    <p>Advanced iris pattern recognition</p>
                  </div>
                </div>
                <div className="dot">
                  <div className="componts">
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
            <div>
              <div className="config">
                <img src="" alt="" />
                <h2>Security Configuration</h2>
              </div>
              <div className="Boot">
                <div>
                  <img src="" alt="" />
                  <h2> Device Encrytion</h2>
                </div>{" "}
                <div>
                  <img src="" alt="" />
                  <p>enabled</p>
                </div>
              </div>
              <div className="Boot">
                <div>
                  <img src="" alt="" />
                  <h2> Device Encrytion</h2>
                </div>{" "}
                <div>
                  <img src="" alt="" />
                  <p>enabled</p>
                </div>
              </div>
              <div className="Boot">
                <div>
                  <img src="" alt="" />
                  <h2> Device Encrytion</h2>
                </div>{" "}
                <div>
                  <img src="" alt="" />
                  <p>enabled</p>
                </div>
              </div>
              <div className="Boot">
                <div>
                  <img src="" alt="" />
                  <h2> Device Encrytion</h2>
                </div>{" "}
                <div>
                  <img src="" alt="" />
                  <p>enabled</p>
                </div>
              </div>
              <div className="Boot">
                <div>
                  <img src="" alt="" />
                  <h2> Device Encrytion</h2>
                </div>{" "}
                <div>
                  <img src="" alt="" />
                  <p>enabled</p>
                </div>
              </div>
              <div className="Boot">
                <div>
                  <img src="" alt="" />
                  <h2> Device Encrytion</h2>
                </div>{" "}
                <div>
                  <img src="" alt="" />
                  <p>enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Security;
