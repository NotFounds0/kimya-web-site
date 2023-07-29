import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { BiLogoFacebook, BiLogoLinkedin, BiSolidPhone } from "react-icons/bi";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="bg-[#eee] w-full md:h-[45px] px-32 md:flex justify-between items-center hidden">
        <div className="flex md:gap-10 gap-3">
          <a
            href="#"
            className="flex items-center gap-1 md:text-[15px] text-sm"
          >
            <HiMail /> info@aemkimya.com
          </a>
          <span className="border border-black"></span>
          <a
            href="#"
            className="flex items-center gap-1 md:text-[15px] text-sm"
          >
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
      <div className="bg-white w-full h-[100px] md:px-32 px-5 flex items-center justify-between border-b">
        <h1 className="md:text-2xl font-bold font-mono">AEM Kimya</h1>
        <div>
          <ul
            className={`md:flex md:static absolute top-[100px] left-0 md:bg-transparent bg-white w-full z-50 text-center gap-8 ${
              nav ? "" : "hidden"
            }`}
          >
            <li
              className={`${
                router.asPath === "/"
                  ? "md:text-[15px] md:border-[0px] border-b border-blue-200 p-1 md:p-0 text-blue-600 font-bold underline underline-offset-4"
                  : "md:text-[15px] md:border-[0px] border-b border-blue-200 p-1 md:p-0"
              }`}
            >
              <Link href="/">Anasayfa</Link>
            </li>
            {/* <li
              className={`${
                router.asPath === "/Urun"
                  ? "md:text-[15px] md:border-[0px] border-b border-blue-200 p-1 md:p-0 text-blue-600 font-bold underline underline-offset-4"
                  : "md:text-[15px] md:border-[0px] border-b border-blue-200 p-1 md:p-0"
              }`}
            >
              <Link href={"/Urun"}>Ürünler</Link>
            </li> */}
            <li
              className={`${
                router.asPath === "/Kurumsal"
                  ? "md:text-[15px] md:border-[0px] border-b border-blue-200 p-1 md:p-0 text-blue-600 font-bold underline underline-offset-4"
                  : "md:text-[15px] md:border-[0px] border-b border-blue-200 p-1 md:p-0"
              }`}
            >
              <Link href="/Kurumsal">Kurumsal</Link>
            </li>
            <li
              className={`${
                router.asPath === "/iletisim"
                  ? "md:text-[15px] p-1 md:p-0 text-blue-600 font-bold underline underline-offset-4"
                  : "md:text-[15px] p-1 md:p-0"
              }`}
            >
              <Link href="/iletisim">İletişim</Link>
            </li>
          </ul>
          <button
            className="md:hidden flex bg-blue-600 p-2 rounded-lg text-white"
            onClick={() => setNav(!nav)}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
