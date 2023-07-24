import Image from "next/image";
import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

const Product = ({img,desc,title}) => {
  return (
    <div className="w-[292px] h-[320px] border border-gray-300 flex flex-col items-center py-1 relative rounded-lg">
    <div className="relative w-[280px] h-[250px] overflow-hidden ">
      <Image alt="" src={img} fill className="rounded-lg hover:scale-110 duration-500"/>
      <h1 className="absolute bottom-10 bg-black text-sm bg-opacity-80 text-white w-[150px] h-[50px] rounded-md flex justify-center items-center">{title}</h1>
      <p className="absolute bottom-8 bg-[#2E302F] text-white text-sm w-[90px] h-[26px] flex justify-center items-center left-2 rounded-md ">{desc}</p>
    </div>
    <div className="flex items-center border-t w-full absolute bottom-0 h-[50px] border-gray-300">
      <a
        href="https://instagram.com"
        className="hover:bg-gray-800 p-2 flex items-center justify-center rounded-full text-pink-700 hover:text-white"
      >
        <AiOutlineInstagram />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="hover:bg-gray-800 p-2 flex items-center justify-center rounded-full text-blue-500 hover:text-white"
      >
        <AiOutlineTwitter />
      </a>
      <a
        href="#"
        className="hover:bg-gray-800 p-2 flex items-center justify-center rounded-full text-blue-900 hover:text-white"
      >
        <BiLogoFacebook />
      </a>
      <a
        href="#"
        className="hover:bg-gray-800 p-2 flex items-center justify-center rounded-full text-sky-700 hover:text-white"
      >
        <BiLogoLinkedin />
      </a>
    </div>
  </div>
  );
};

export default Product;
