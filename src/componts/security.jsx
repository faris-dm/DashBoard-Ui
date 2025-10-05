import React from "react";
import menu from "./svg/menu.svg";
import check from "./svg/check.svg";
import Finger from "./svg3/fingerPrint.svg";
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
          <div className="items bg-[#1A2537]">
            <option value="">
              <div className="Finger">
                <div>
                  <img src={Finger} alt="" />
                  <div>
                    <h2>Finger</h2>
                    <p>HardWare</p>
                  </div>
                  <div className="componts">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="Quality">
                <div>
                  <p>3 fingers enrolled</p>
                  <input type="check" name="" id="" />
                  <p>times</p>
                </div>
                <div className="percent">95%</div>
              </div>
            </option>
            <option value="">
              <div className="Finger">
                <div>
                  <img src="" alt="" />
                  <div>
                    <h2>Finger</h2>
                    <p>HardWare</p>
                  </div>
                  <div className="componts">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="Quality">
                <div>
                  <p>3 fingers enrolled</p>
                  <input type="check" name="" id="" />
                  <p>times</p>
                </div>
                <div className="percent">95%</div>
              </div>
            </option>
            <option value="">
              <div className="Finger">
                <div>
                  <img src="" alt="" />
                  <div>
                    <h2>Finger</h2>
                    <p>HardWare</p>
                  </div>
                  <div className="componts">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="Quality">
                <div>
                  <p>3 fingers enrolled</p>
                  <input type="check" name="" id="" />
                  <p>times</p>
                </div>
                <div className="percent">95%</div>
              </div>
            </option>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-400 rounded-full peer peer-checked:bg-green-900 transition-colors"></div>
  <span className="absolute left-1 top-1 bg-gray-300 h-5 w-5 rounded-full transition-transform peer-checked:translate-x-7 peer-checked:bg-green-400"></span>
</label> */
}

export default Security;
