import React from "react";

import Location from "./svg5/Location.svg";

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

          <div>
            <button>
              {" "}
              <img src={location} alt="" />
              <p>Locate Device</p>
            </button>
            <button>
              {" "}
              <img src="" alt="" />
              <p>Emergancy</p>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default AntiThef;
