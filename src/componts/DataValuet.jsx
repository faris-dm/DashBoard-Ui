import React, { useState } from "react";
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
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <div className="bg-[#020817] text-[#d4e6ff] min-h-screen w-full font-sans">
      {/* ===== Navbar ===== */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center bg-[#0e1629] px-5 py-3 md:px-8 md:py-4 z-50">
        {/* Title Section */}
        <div className="flex items-center gap-3 md:gap-5">
          <img src={menu} alt="menu" className="h-5 md:h-6" />
          <div>
            <h2 className="text-white text-sm sm:text-lg md:text-2xl font-bold leading-tight">
              Encrypted Data Vault
            </h2>
            <p className="text-[#94a3b8] text-[8px] sm:text-sm">
              Military-grade encryption for your sensitive data
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-2 border border-gray-400 rounded-lg px-2 py-1 sm:px-4 sm:py-2 bg-[#020817] text-white hover:bg-[#111728] text-[8px] sm:text-xs transition">
            <img src={upload} alt="upload" className="h-3 sm:h-4" />
            <p>Upload</p>
          </button>
          <button
            onClick={toggleShow}
            className="flex items-center gap-2 border border-gray-400 rounded-lg px-2 py-1 sm:px-4 sm:py-2 bg-[#020817] text-white hover:bg-[#111728] text-[8px] sm:text-xs transition"
          >
            <img
              src={show ? Paper : Decoy}
              alt="decoy"
              className="h-3 sm:h-4"
            />
            <p>{show ? "Hide Decoy" : "Show Decoy"}</p>
          </button>
        </div>
      </div>

      {/* ===== Stats ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-[6rem] mx-4 sm:mx-6 lg:mx-10 transition-all duration-300">
        {[
          { count: "127", label: "Encrypted Files", icon: Paper },
          { count: "89", label: "Secure Photos", icon: gallery },
          { count: "34", label: "Protected Notes", icon: Secured },
          { count: "12", label: "Backup Points", icon: Protection },
        ].map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-[#0e1629] border border-[#b0b0b0] rounded-lg px-4 py-3 cursor-pointer hover:scale-[1.01] transition-all"
          >
            <div>
              <h4 className="text-white text-xl sm:text-2xl font-semibold">
                {item.count}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm">{item.label}</p>
            </div>
            <img src={item.icon} alt={item.label} className="h-6 sm:h-8" />
          </div>
        ))}
      </div>

      {/* ===== Wrapper ===== */}
      <div className="flex flex-col lg:flex-row items-start gap-4 mt-6 mx-4 sm:mx-6 lg:mx-10">
        {/* Encryption Methods Section */}
        <section className="flex-1 bg-[#101929] border border-gray-400 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <img src={key} alt="key" className="h-5 sm:h-6" />
            <h2 className="text-white text-lg sm:text-xl font-semibold">
              Encryption Methods
            </h2>
          </div>

          {[
            {
              name: "AES-256 Encryption",
              desc: "Military-grade symmetric encryption for file storage",
              status: "Active",
              strength: "Maximum",
            },
            {
              name: "ChaCha20-Poly1305",
              desc: "High-performance authenticated encryption",
              status: "Active",
              strength: "Maximum",
            },
            {
              name: "Hardware Security Module",
              desc: "Keys stored in device secure enclave",
              status: "Beta",
              strength: "Maximum",
            },
            {
              name: "AES-256 Encryption",
              desc: "Military-grade symmetric encryption for file storage",
              status: "Enable",
              strength: "Maximum",
            },
          ].map((method, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#1a2537] rounded-lg p-3 my-3"
            >
              <div>
                <h3 className="text-white text-base sm:text-lg font-semibold">
                  {method.name}
                </h3>
                <p className="text-xs sm:text-sm">{method.desc}</p>
              </div>
              <div className="flex items-center gap-3">
                <p
                  className={`px-3 py-[2px] rounded-full border text-xs sm:text-sm ${
                    method.status === "Beta"
                      ? "border-blue-400 text-blue-400"
                      : method.status === "Enable"
                      ? "border-orange-400 text-orange-400"
                      : "border-green-500 text-green-500"
                  }`}
                >
                  {method.status}
                </p>
                <p className="text-white text-xs sm:text-sm">
                  {method.strength}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ===== Recent Files Section ===== */}
        <div className="flex-1 bg-[#101929] border border-gray-400 rounded-lg p-4">
          <div className="flex items-center gap-3 mb-3">
            <img src={Paper} alt="paper" className="h-5 sm:h-6" />
            <h2 className="text-white text-lg sm:text-xl font-semibold">
              {show ? "Decoy Vault (Fake Data)" : "Recent Files"}
            </h2>
          </div>

          {[
            {
              real: "Financial_Documents.pdf",
              fake: "Vacation_Photos.jpg",
              realInfo: "2.4 MB • 2 hours ago",
              fakeInfo: "1.2 MB • 5 min ago",
            },
            {
              real: "Backup_Contacts.vcf",
              fake: "Shopping_List.txt",
              realInfo: "156 KB • 3 days ago",
              fakeInfo: "2 KB • 1 hour ago",
            },
            {
              real: "Secure_Notes.txt",
              fake: "Recipe_Collection.pdf",
              realInfo: "12 KB • 1 week ago",
              fakeInfo: "890 KB • 2 days ago",
            },
          ].map((file, i) => (
            <div
              key={i}
              className={`flex justify-between items-center bg-[#1a2537] rounded-lg px-3 py-2 my-3 transition ${
                show ? "bg-[rgb(78,25,25)]" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <img src={smallPaper} alt="file" className="h-5 sm:h-6" />
                <div>
                  <h2 className="text-white text-sm sm:text-base font-semibold">
                    {show ? file.fake : file.real}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    {show ? file.fakeInfo : file.realInfo}
                  </p>
                </div>
              </div>
              <img
                src={upload2}
                alt="upload"
                className="h-4 opacity-50 hover:opacity-100"
              />
            </div>
          ))}

          {/* Decoy Message */}
          <div className="flex justify-between items-center bg-[#1a2537] rounded-lg px-3 py-2 my-3">
            <div className="flex items-center gap-3">
              {!show && (
                <img src={smallPaper} alt="file" className="h-5 sm:h-6" />
              )}
              <div>
                <h2 className="text-white text-sm sm:text-base font-semibold">
                  {show
                    ? "⚠️ This is decoy data designed to mislead attackers"
                    : "Personal_Photos_2024.zip"}
                </h2>
                {!show && (
                  <p className="text-[10px] sm:text-xs">45.7 MB • 1 day ago</p>
                )}
              </div>
            </div>
            {!show && (
              <img src={upload2} alt="upload" className="h-4 opacity-50" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataValuet;
