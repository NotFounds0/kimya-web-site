import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import YerBelirt from "@/components/ui/YerBelirt";
import Head from "next/head";
import React from "react";
import Image from "next/image";
const iletisim = () => {
  return (
    <>
      <Head>
        <title>AEM Kimya - İletişim</title>
      </Head>
      <Header />
      <YerBelirt title={"İletişim"} desc={"Anasayfa / İletişim"} />
      <div className="md:flex  justify-center md:px-20 items-center mt-5 md:justify-between">
        <div className="relative md:w-[400px] w-full h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1487.12931184948!2d32.86462426205728!3d39.88743014902306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f85729b4f8b%3A0xb9e08ade8f7c59ca!2zw4dhbmtheWEgS8O2xZ9rw7w!5e0!3m2!1str!2str!4v1690195391579!5m2!1str!2str"
            width="600"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <h1 className="w-[375] font-bold text-lg">İletişim Formu</h1>
          <p className="pb-10 text-base">
            Sizinle daha hızlı iletişim kurmabilmemiz için lütfen iletişim
            bilgilerinizi eksiksiz doldurunuz.
          </p>
          <div className="flex gap-1">
            <input
              placeholder="İsim Soyisim"
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-2xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              placeholder="İsim Soyisim"
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-2xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2 pt-5">
            <input
              placeholder="Email"
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-2xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
            <input
              placeholder="İletişim Numarası"
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 rounded-2xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="pt-5">
            <input
              type="text"
              placeholder="Mesaj/Detay"
              id="name"
              name="name"
              className="w-full px-3 h-[158px] rounded-2xl border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default iletisim;
