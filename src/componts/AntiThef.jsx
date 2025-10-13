import React from "react";

import Location from "./svg5/Location.svg";
import Alert from "./svg5/Alert.svg";
import Menu from "./svg5/menu.svg";

function AntiThef() {
  return (
    <>
      <div>
        <nav className=" flex  fixed  justify-between  gap-4  py-4 px-3 items-center bg-[#17223a] w-full ">
          <div className="flex  items-center gap-4 m-2">
            <div>
              <img src={Menu} alt="" />
            </div>

            <div>
              <h2 className=" font-bold text-2xl">Anti-Theft Protection</h2>
              <h4 className="text-[#b0b0b0] by-1">
                Device tracking, remote control, and theft prevention
              </h4>
            </div>
          </div>

          <div className="flex  items-center gap-3 rounded ">
            <button className="flex itens-center border border-silver  bg-[#1E293B] rounded-xl p-2    gap-2 ">
              {" "}
              <img src={Location} alt="" />
              <p className="text-red ">Locate Device</p>
            </button>
            <button className="flex items-center gap-2 border  bg-red-900 border-green py-2 px-2 rounded-xl">
              {" "}
              <img src={Alert} alt="" />
              <p>Emergancy</p>
            </button>
          </div>
        </nav>

        <div>
          <h3> I am here to win</h3>
        </div>
      </div>
    </>
  );
}

export default AntiThef;
