import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { BsFillBagFill } from "react-icons/bs";
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const startNav = () => {
        setToggle(!toggle);
    }

    return (
      <div className="border  border-black">
        <div className=" w-full top-0 bg-white p-4 border border-b-black fixed z-40 mb-20 flex flex-col md:flex-row md:justify-between md:items-center gap-3">
          <div className=" flex flex-row justify-between">
            <div className=" text-black font-bold text-2xl md:text-xl">
              <span className="text-orange-500">FURNI</span>TURE
            </div>
            <div className="flex md:hidden" onClick={() => startNav()}>
              <CiMenuBurger size="30" color="black" />
            </div>
          </div>

          <div
            className={`flex flex-col md:flex md:flex-row lg:flex lg:flex-row gap-4 md:items-center ${
              toggle ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row md:gap-3 gap-2 font-semibold text-black text-lg md:text-base">
              <li className="text-orange-500 font-bold ">Home</li>
              <li className="">About</li>
              <li className=" ">Category</li>
              <li className=" ">Shop</li>
            </ul>
            <div className="font-medium flex flex-col md:flex-row md:items-center md:justify-between text-black text-base">
              <div className="bg-white border-2 border-orange-500 rounded-full h-full w-5/6 flex flex-row gap-2 p-2 items-center justify-left">
                <div className="w-1/6 ">
                  <FiSearch size="24" color="black" className="w-1/2" />
                </div>
                <input
                  placeholder="Search"
                  type="text"
                  className="w-5/6 -ml-4 text-black bg-white outline-none ring-0 "
                />
              </div>
              <div className="hidden md:flex md:flex-row rounded-full border-2 border-orange-500 p-2">
                <BsFillBagFill size="18" color="black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Navbar;