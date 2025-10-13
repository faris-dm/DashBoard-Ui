import React from "react";

import Location from "./svg5/Location.svg";
import Alert from "./svg5/Alert.svg";
import Menu from "./svg5/menu.svg";

function AntiThef() {
  return (
    <>
      <div>
        <nav className=" flex justify-between  gap-4  py-4 px-3items-center bg-[#17223a]">
          <div className="flex gap-4">
            <div>
              <img src={Menu} alt="" />
            </div>

            <div>
              <h2>Anti-Theft Protection</h2>
              <h4>Device tracking, remote control, and theft prevention</h4>
            </div>
          </div>

          <div className="flex  items-center">
            <button gap-2 className="flex itens-center ">
              {" "}
              <img src={Location} alt="" />
              <p>Locate Device</p>
            </button>
            <button className="flex items-center gap-4">
              {" "}
              <img src={Alert} alt="" />
              <p>Emergancy</p>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default AntiThef;
