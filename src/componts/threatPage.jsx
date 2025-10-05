import React, { useState } from "react";
import "./threat.css";

import menu from "./svg2/menu.svg";
import screen from "./svg2/screen.svg";
import mind from "./svg2/mind.svg";
import eye from "./svg2/eye.svg";
import flash from "./svg2/flash.svg";
import heart from "./svg2/heart.svg";
import protection from "./svg2/protection.svg";

function Threat() {
  const [clicked, setClicked] = useState(false);

  const update = () => {
    setClicked(!clicked);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  };

  return (
    <>
      <div className="containers">
        <div className="nav">
          <div className="protection">
            <img src={menu} alt="" />
            <div className="heading">
              <h2>Threat Protection</h2>
              <p> Advanced AI-powered security monitoring</p>
            </div>
          </div>
          <div onClick={update} className={`quick ${clicked}`}>
            <img src={clicked ? flash : screen} alt="" />
            <p> {clicked ? "scanning..." : "Quick scan"}</p>
          </div>
        </div>

        <div className="items">
          <div className="option">
            <h4>47</h4>
            <p>Apps Scanned</p>
            <button>clean</button>
          </div>
          <div className="option">
            <h4>247</h4>
            <p>Files Analyzed</p>
            <button>clean</button>
          </div>
          <div className="option">
            <h4>23</h4>
            <p>Network Connections</p>
            <button>secure</button>
          </div>
          <div className="option">
            <h4>0</h4>
            <p>Threats Detected</p>
            <button>safe</button>
          </div>
        </div>
        <div className="features">
          <div className="mind">
            <img src={protection} alt="" />
            <h1>Protection Features</h1>
          </div>
          <div className="switch_section">
            <div className="inner_sec">
              <div className="text_svg">
                <img src={mind} alt="" />
                <div className="heading">
                  <h2>Real-time Malware Detection</h2>
                </div>
              </div>
              <>
                <p>
                  AI-powered scanning of all app installations and file
                  downloads
                </p>
                <p>Active - 24/7 monitoring</p>
              </>
            </div>
            <div className="switch">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          <div className="switch_section">
            <div className="inner_sec">
              <div className="text_svg">
                <img src={heart} alt="" />
                <div className="heading">
                  <h2>Rootkit Detection</h2>
                </div>
              </div>
              <>
                <p>Deep system scanning for hidden malicious processes</p>
                <p>Scheduled for weekly scans</p>
              </>
            </div>

            <div className="switch">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>{" "}
          <div className="switch_section">
            <div className="inner_sec">
              <div className="text_svg">
                <img src={flash} alt="" />
                <div className="heading">
                  <h2>Zero-Day Exploit Protection</h2>
                </div>
              </div>
              <>
                <p>
                  Behavioral analysis to detect unknown threats and exploits
                </p>
                <p>Learning mode active</p>
              </>
            </div>

            <div className="switch">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>{" "}
          <div className="switch_section">
            <div className="inner_sec">
              <div className="text_svg">
                <img src={eye} alt="" />
                <div className="heading">
                  <h2>Phishing Protection</h2>
                </div>
              </div>
              <>
                <p>Advanced URL scanning and suspicious link detection</p>
                <p>Database updated 2 hours ago</p>
              </>
            </div>

            <div className="switch">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Threat;
