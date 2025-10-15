import React from "react";

function Switch() {
  return (
    <>
      <div className="componts pr-3">
        {" "}
        <label className="relative inline-flex items-center cursor-pointer">
          <input className="sr-only peer" value="" type="checkbox" />
          <div className="peer rounded-full outline-none duration-100 after:duration-500 w-22 h-10 bg-blue-300 peer-focus:outline-none peer-focus:ring-4  after:content-['Off'] after:absolute after:outline-none after:rounded-full after:h-8 after:w-8 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-12 peer-checked:after:content-['on'] peer-checked:after:border-white"></div>
        </label>
      </div>
    </>
  );
}

export default Switch;
