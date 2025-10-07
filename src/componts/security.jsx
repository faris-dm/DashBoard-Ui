import React from "react";
import menu from "./svg/menu.svg";
import check from "./svg/check.svg";
import Finger from "./svg3/fingerPrint.svg";
import eye from "./svg3/eye.svg";

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
          <div className="title flex items-center   gap-2 p-3">
            <img className=" cursor-pointer" src={Finger} alt="" />
            <h2 className="text-2xl  font-medium ">Biometric Authentication</h2>
          </div>
          <div className="items">
            <div className="option">
              <div>
                <div className="Auth flex items-center  justify-between  mx-4">
                  <div className=" flex  gap-3 mx-3">
                    <img src={Finger} alt="" />
                    <div className="Finger">
                      <h2>Fingerprint Authentication</h2>
                      <p>Hardware-backed fingerprint recognition</p>
                    </div>
                  </div>
                  <div className="componts">
                    <p>Switch</p>
                  </div>
                </div>

                <div className="Quality">
                  <div className="Reco">
                    <h2>Recognition Auth</h2>
                    <input type="check" name="" id="" />
                    <p>3 fingers enrolled</p>
                  </div>
                  <p>95%</p>
                </div>
              </div>
            </div>
            <div className="option">
              <div>
                <div className="FaceTitle">
                  <img src="" alt="" />
                  <div>
                    <h2>Face Recognition</h2>
                    <p>3D facial mapping with liveness detection</p>
                  </div>
                </div>
                <div className="componts">switch</div>
              </div>
              <div>
                <div>
                  <p>Recognation Quality </p>
                  <input type="check" />
                  <p>1 face enrolled</p>
                </div>
                <p>98%</p>
              </div>
            </div>
            <div className="option">
              <div>
                <img src="" alt="" />
                <div>
                  <h2>Iris Scanning</h2>
                  <p>Advanced iris pattern recognition</p>
                </div>
              </div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Security;
