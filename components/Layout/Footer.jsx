import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="space-y-5 bg-gray-800 mt-5 text-white md:flex justify-between md:h-[300px] items-center lg:px-20 md:px-10">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Hakkımızda</h3>
          <p className="text-gray-300 md:w-[300px] w-auto text-sm md:text-base px-3 md:px-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            voluptatem cupiditate fugit odit reiciendis perferendis iure
            accusantium, obcaecati illo inventore commodi corporis delectus
            repellendus culpa aperiam, dolores qui veritatis sunt.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-semibold">Sayfalar</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/Kurumsal" className="hover:text-blue-500">
                Kurumsal
              </Link>
            </li>
            <li>
              <Link href="/Urun" className="hover:text-blue-500">
                Ürünler
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="hover:text-blue-500">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center space-y-1">
          <h3 className="text-xl font-semibold ">İletişim</h3>
          <p className="text-white">
            <b>Adres</b>: 1234 Sokak No: 56, Şehir
          </p>
          <p className="text-white">
            <b>Email</b>: info@kurumsalfirma.com
          </p>
          <p className="text-white">
            <b>Telefon</b>: (123) 456-7890
          </p>
        </div>
        <div className="text-center">
          {" "}
          <h3 className="text-xl font-semibold ">Sosyal Medya</h3>
          <div className="flex items-center gap-2 justify-center">
            <a
              href="#"
              className="hover:bg-white p-2 flex items-center justify-center rounded-full text-pink-700"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="#"
              className="hover:bg-white p-2 flex items-center justify-center rounded-full text-blue-500"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="#"
              className="hover:bg-white p-2 flex items-center justify-center rounded-full text-blue-700"
            >
              <BiLogoFacebook />
            </a>
            <a
              href="#"
              className="hover:bg-white p-2 flex items-center justify-center rounded-full text-sky-700"
            >
              <BiLogoLinkedin />
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-gray-800 h-12 flex items-center justify-center text-white border-t">
        <h1 className="text-sm md:text-base">
          {date.getFullYear()} <b>AEM Kimya</b> Tüm Hakları Saklıdır. ©
        </h1>
      </div>
    </>
  );
}
export default Footer;
