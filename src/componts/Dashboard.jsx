import React from "react";
// import "./Dashboard.css";

import menu from "./svg/menu.svg";
import protection from "./svg/protection.svg";
import heart from "./svg/heart.svg";
import locked from "./svg/locked.svg";
import wi_fi from "./svg/wifi.svg";
import sheld from "./svg/sheld.svg";
import right_shield from "./svg/right_sheild.svg";
import location from "./svg/location.svg";
import Eye from "./svg/eye.svg";
import wifiTwo from "./svg/wifi2.svg";
import data from "./svg/data.svg";
import phone from "./svg/phone.svg";
import check from "./svg/check.svg";
import green_check from "./svg/greenPost.svg";
import wrong from "./svg/wrong.svg";
import alert from "./svg/alert.svg";

function Dashboard() {
  return (
    <>
      <div className="secrity_container">
        <div className="header_section">
          <div className="menu_group">
            <img src={menu} alt="" />
            <div className="header_texts">
              <h2>Security Dashboard</h2>
              <p>Real-time protection status and threat monitoring</p>
            </div>
          </div>
          <p className="protected">Protected</p>
        </div>
        <div className="secrity_secore">
          <div className="secrity_title">
            <img src={sheld} alt="" />
            <h3>Security Score</h3>
          </div>
          <div className="exellent">
            <div className="numbers">
              <p>94%</p>
              <p>Excellent</p>
            </div>
            <div className="width_exellent">
              <div className="progress">
                <div className="iner"></div>
              </div>
              <p>
                Your device is highly secure with advanced protection enabled
              </p>
            </div>
          </div>
        </div>
        <div className="options_section">
          <div className="option">
            <div>
              <h3>127</h3>
              <p>Threats Blocked Today</p>
            </div>
            <img src={protection} alt="" />
          </div>
          <div className="option">
            <div>
              {" "}
              <h3>3</h3>
              <p>Active Scans</p>
            </div>
            <img src={heart} alt="" />
          </div>
          <div className="option">
            <div>
              {" "}
              <h3>24</h3>
              <p>Protected Apps</p>
            </div>
            <img src={locked} alt="" />
          </div>
          <div className="option">
            <div>
              {" "}
              <h3>8</h3>
              <p>Network Connections</p>
            </div>
            <img src={wi_fi} alt="" />
          </div>
        </div>
        <div className="Features">
          <div className="section1">
            <div className="secrity">
              <h1>Security Features</h1>
              <div className="option">
                <div>
                  <img src={right_shield} alt="" />
                  <h4>Real-time Protection</h4>
                </div>
                <div className="active">
                  <img src={green_check} alt="" />
                  check
                </div>
              </div>
              <div className="option">
                <div>
                  {" "}
                  <img src={Eye} alt="" />
                  <h4>Biometric Lock</h4>
                </div>
                <div className="active">
                  <img src={green_check} alt="" />
                  check
                </div>
              </div>
              <div className="option">
                <div>
                  <img src={wifiTwo} alt="" />
                  <h4>Network Shield</h4>
                </div>
                <div className="active">
                  <img src={green_check} alt="" />
                  check
                </div>
              </div>
              <div className="option">
                <div>
                  {" "}
                  <img src={location} alt="" />
                  <h4>Anti-Theft</h4>
                </div>
                <div className="active">
                  <img src={green_check} alt="" />
                  check
                </div>
              </div>
              <div className="option">
                <div>
                  {" "}
                  <img src={data} alt="" />
                  <h4>Data Vault</h4>
                </div>
                <div className="active">
                  <img src={green_check} alt="" />
                  check
                </div>
              </div>
              <div className="option">
                <div>
                  {" "}
                  <img src={phone} alt="" />
                  <h4>Root Detection</h4>
                </div>
                <div className="active">
                  <img src={green_check} alt="" />
                  check
                </div>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="alert">
              <h1>Recent Alerts</h1>
              <div className="option">
                <div>
                  <img src={wrong} alt="" />
                  <h4>Malicious app installation blocked</h4>
                </div>
                <div className="high">
                  <p className="High">high</p>
                </div>
              </div>
              <div className="option">
                <div>
                  {" "}
                  <img src={alert} alt="" />
                  <h4>Suspicious network activity detected</h4>
                </div>
                <div className="high">
                  <p className="medium">medium</p>
                </div>
              </div>
              <div className="option">
                <div className="div">
                  <img src={green_check} alt="" />
                  <h4>Device integrity check passed</h4>
                </div>
                <div className="high">
                  <p className="low">low</p>
                </div>
              </div>
              <div className="option">
                <div>
                  {" "}
                  <img src={wrong} alt="" />
                  <h4>Phishing attempt blocked</h4>
                </div>
                <div className="high">
                  <p className="High">high</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//
//  pro 4ade80

export default Dashboard;
