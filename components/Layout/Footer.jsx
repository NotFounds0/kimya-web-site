import React from "react";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
function Footer() {
  return (
    <div className="flex justify-between mt-60 px-36 text-[#777] bg-black">
      <div className="py-7">
        <h1 className="text-2xl pb-2 text-white">İletişim Bilgilerimiz</h1>
        <ul className="flex flex-col gap-2">
          <li>AEM Kimya Sanayi ve Ticaret AŞ</li>
          <li>Adres Bilgisi</li>
          <li>Mail Bilgisi</li>
          <li>Telefon1</li>
          <li>Telefon2</li>
          <li>Faks</li>
        </ul>
      </div>
      <div className="text-white">
        Bizi Takip Edin
        <div className="flex text-[#777]">
          <a href="#">
            <BiLogoInstagram className="text-4xl" />
          </a>
          <a href="#">
            <BiLogoLinkedin className="text-4xl" />
          </a>
          <a href="#">
            <BiLogoFacebook className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
