import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page404 = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-5 justify-center items-center h-[400px]">
        <div className="relative w-[300px] h-[200px]">
          <Image alt="" src={"/img/404png.png"} objectFit="cover" fill />
        </div>
        <div className="text-center flex flex-col gap-3">
            <h1 className="text-blue-600 text-7xl font-bold">404</h1>
            <p className="font-mono font-medium">Sayfa Bulunamadı! Değiştirilmiş veya Taşınmış Olabilir.</p>
            <Link href={'/'} className="bg-gray-800 text-white h-10 flex items-center justify-center w-full hover:bg-gray-900">Anasayfa</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page404;
