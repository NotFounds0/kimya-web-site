import React from "react";
import { HiMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiSolidPhone } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="bg-[#eee] w-full h-[45px] px-32 flex justify-between items-center">
        <div className="flex gap-10">
          <a href="#" className="flex items-center gap-1">
            <HiMail /> info@aemkimya.com
          </a>
          <span className="border border-black"></span>
          <a href="#" className="flex items-center gap-1">
            <BiSolidPhone /> 000000000
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#"
            className="hover:bg-gray-800 p-2 flex items-center justify-center rounded-full text-pink-700 hover:text-white"
          >
            <AiOutlineInstagram />
          </a>
          <a
            href="#"
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
      <div className="bg-white w-full h-[100px] px-32 flex items-center justify-between border-b">
        <h1 className="text-2xl font-bold font-mono">AEM Kimya</h1>
        <div>
          <ul className="flex gap-10">
            <li className="text-[15px]">
              <a href="#">Anasayfa</a>
            </li>
            <li className="text-[15px]">
              <a className="cursor-pointer">Ürünler</a>
            </li>
            <li className="text-[15px]">
              <a className="cursor-pointer">Kurumsal</a>
            </li>
            <li className="text-[15px]">
              <a href="#">İletişim</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
