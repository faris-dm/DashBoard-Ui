import React from "react";

import Location from "./svg5/Location.svg";
import Alert from "./svg5/Alert.svg";

function AntiThef() {
  return (
    <>
      <div>
        <nav className=" flex justify-between items-center bg=[#17223a]">
          <div>
            <div>
              <img src="" alt="" />
            </div>

            <div>
              <h2>Anti-Theft Protection</h2>
              <h4>Device tracking, remote control, and theft prevention</h4>
            </div>
          </div>

          <div className="flex ">
            <button>
              {" "}
              <img src={Location} alt="" />
              <p>Locate Device</p>
            </button>
            <button>
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
