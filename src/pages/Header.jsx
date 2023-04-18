import React from "react";
import imgHeader from './../assets/header.png'

const Header = () => {
    return (
      <div className="bg-white flex flex-row justify-around items-center mt-20">
        <div className="md:p-2 md:w-full w-full relative  flex flex-row items-center justify-end md:justify-between">
          <div className="p-2 absolute md:static  md:w-full h-full md:justify-center text-center flex flex-row items-center  font-bold text-black">
            <h3 className="font-bold md:w-[300px] md:text-3xl text-xl text-left  text-white md:text-orange-500">
              We <span className="text-black">Help You Design</span> Modern
              Furniture
            </h3>
          </div>
          <img
            src={imgHeader}
            alt="ini header"
            className="md:w-1/2 w-full md:p-3"
          />
        </div>
      </div>
    );
}

export default Header;