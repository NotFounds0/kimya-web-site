import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xl font-semibold mb-4">Hakkımızda</h3>
              <p className="text-gray-300 md:w-[300px] w-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid voluptatem cupiditate fugit odit reiciendis perferendis
                iure accusantium, obcaecati illo inventore commodi corporis
                delectus repellendus culpa aperiam, dolores qui veritatis sunt.
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xl font-semibold mb-4">Sayfalar</h3>
              <ul className="space-y-2">
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
            <div>
              <h3 className="text-xl font-semibold mb-4">İletişim</h3>
              <p className="text-gray-300">Adres: 1234 Sokak No: 56, Şehir</p>
              <p className="text-gray-300">Email: info@kurumsalfirma.com</p>
              <p className="text-gray-300">Telefon: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sosyal Medya</h3>
              <div className="flex items-center gap-2">
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
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">
              {date.getFullYear()} AEM Kimya. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
