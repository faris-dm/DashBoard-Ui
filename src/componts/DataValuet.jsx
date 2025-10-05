import React, { useState } from "react";
// import "./DataValuet.css";
import menu from "./svg2/menu.svg";
import Decoy from "./DataValuetSvg/eye.svg";
import upload from "./DataValuetSvg/upload.svg";
import Paper from "./DataValuetSvg/paper.svg";
import smallPaper from "./DataValuetSvg/paper3.svg";

import gallery from "./DataValuetSvg/images.svg";
import Secured from "./DataValuetSvg/locked.svg";
import Protection from "./DataValuetSvg/protection.svg";
import key from "./DataValuetSvg/key.svg";
import upload2 from "./DataValuetSvg/upload2.svg";

function DataValuet() {
  const [show, isShowed] = useState(false);
  const ShowHack = () => {
    isShowed(!show);
  };
  return (
    <>
      <div className="containers">
        <div className="nav">
          <div className="value  protection">
            <div className="menu">
              <img src={menu} alt="" />
            </div>
            <div className="title">
              <h2>Encrypted Data Vault</h2>
              <p>Military-grade encryption for your sensitive data</p>
            </div>
          </div>
          <div className="upload ">
            <button>
              <img src={upload} alt="" className="upload" />
              <p> Upload</p>
            </button>
            <button className={true} onClick={ShowHack}>
              <img
                src={show ? Paper : Decoy}
                alt=""
                className={`upload2 ${ShowHack}`}
              />
              <p>{show ? "Hide Decoy " : "Show Decoy"}</p>
            </button>
          </div>
        </div>
        <div className="items">
          <div className="option">
            <div className="left">
              <h4>127</h4>
              <p>Encrypted Files</p>
            </div>
            <div div className="right">
              <img src={Paper} alt="" />
            </div>
          </div>
          <div className="option">
            <div className="left">
              <h4>89</h4>
              <p>Secure Photos</p>
            </div>
            <div div className="right">
              <img src={gallery} alt="" />
            </div>
          </div>
          <div className="option">
            <div className="left">
              <h4>34</h4>
              <p>Protected Notes</p>
            </div>
            <div div className="right">
              <img src={Secured} alt="" />
            </div>
          </div>
          <div className="option">
            <div className="left">
              <h4>12</h4>
              <p>Backup Points</p>
            </div>
            <div div className="right">
              <img src={Protection} alt="" />
            </div>
          </div>
        </div>
        <div className="wrapper">
          <section>
            <div className="methods">
              <img src={key} alt="" />
              <h2>Encryption Methods</h2>
            </div>
            <div className="article">
              <div className="left">
                <h3>AES-256 Encryption</h3>
                <p>Military-grade symmetric encryption for file storage</p>
              </div>
              <div className="right">
                <div className="active">
                  <p>Active</p>
                  <p>Maximum</p>
                </div>
              </div>
            </div>
            <div className="article">
              <div className="left">
                <h3>ChaCha20-Poly1305</h3>
                <p>High-performance authenticated encryption</p>
              </div>
              <div className="right">
                <div className="active">
                  <p>Active</p>
                  <p>Maximum</p>
                </div>
              </div>
            </div>{" "}
            <div className="article">
              <div className="left">
                <h3>Hardware Security Module</h3>
                <p>Keys stored in device secure enclave</p>
              </div>
              <div className="right">
                <div className="active">
                  <p>beta</p>
                  <p>Maximum</p>
                </div>
              </div>
            </div>{" "}
            <div className="article">
              <div className="left">
                <h3>AES-256 Encryption</h3>
                <p>Military-grade symmetric encryption for file storage</p>
              </div>
              <div className="right">
                <div className="active">
                  <p>enable</p>
                  <p>Maximum</p>
                </div>
              </div>
            </div>
          </section>
          <div className="section_two">
            <div className="files">
              <div className="titles methods">
                <img src={Paper} alt="" />
                <h2> {show ? "Decoy Vault (Fake Data)" : " Recent Files"}</h2>
              </div>
            </div>
            <div className="optionHeading">
              <div className={`option ${show}`}>
                <div className="optionOne">
                  <img src={smallPaper} alt="" />
                  <div className="text">
                    <h2>
                      {show ? "Vacation_Photos.jpg" : "Financial_Documents.pdf"}
                    </h2>
                    <p>
                      {show ? "1.2 MB • 5 min ago" : "2.4 MB • 2 hours ago"}
                    </p>
                  </div>
                </div>
                <div className="optionTwo">
                  <img src={upload2} alt="" />
                </div>
              </div>
            </div>
            <div className="optionHeading">
              <div className={`option ${show}`}>
                <div className="optionOne">
                  <img src={smallPaper} alt="" />
                  <div className="text">
                    <h2>
                      {show ? "Shopping_List.txt" : "Backup_Contacts.vcf"}
                    </h2>
                    <p>{show ? "2 KB • 1 hour ago" : "156 KB • 3 days ago"}</p>
                  </div>
                </div>
                <div className="optionTwo">
                  <img src={upload2} alt="" />
                </div>
              </div>
            </div>
            <div className="optionHeading">
              <div className={`option ${show}`}>
                <div className="optionOne">
                  <img src={smallPaper} alt="" />
                  <div className="text">
                    <h2>
                      {show ? "Recipe_Collection.pdf" : "Secure_Notes.txt"}
                    </h2>

                    <p>{show ? "890 KB • 2 days ago" : "12 KB • 1 week ago"}</p>
                  </div>
                </div>
                <div className="optionTwo">
                  <img src={upload2} alt="" />
                </div>
              </div>
            </div>
            <div className="optionHeading">
              <div className="option">
                <div className="optionOne">
                  <img src={show ? "" : smallPaper} alt="" />
                  <div className="text">
                    <h2>
                      {show
                        ? "⚠️ This is decoy data designed to mislead attackers"
                        : "Personal_Photos_2024.zip"}
                    </h2>
                    <p> {show ? "" : "45.7 MB • 1 day ago"}</p>
                  </div>
                </div>
                <div className="optionTwo">
                  <img src={show ? " " : upload2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataValuet;
