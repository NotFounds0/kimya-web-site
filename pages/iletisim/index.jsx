import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import YerBelirt from "@/components/ui/YerBelirt";
import Head from "next/head";
import React from "react";

const iletisim = () => {
  return (
    <>
      <Head>
        <title>AEM Kimya - İletişim</title>
      </Head>
      <Header />
      <YerBelirt title={"İletişim"} desc={"Anasayfa / İletişim"} />
      <div className="flex flex-col items-center py-10 gap-3">
        <div className="text-center">
          <h1 className="text-3xl font-bold font-mono">AEM Kimya</h1>
          <p>Bize Ulaşın</p>
        </div>
        <div>
          <div className="flex gap-2">
            <label className="flex flex-col text-gray-700 font-bold mb-2">
              İsim Soyisim
              <input
                type="text"
                className="px-4 w-full py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Ahmet Yavuz"
              />
            </label>

            <label className="flex flex-col  text-gray-700 font-bold mb-2">
              E-Mail
              <input
                type="mail"
                className="px-4 w-full py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                placeholder="ahmet@gmail.com"
              />
            </label>
          </div>
          <label for="message" className="block text-gray-700 font-bold mb-2">
            Mesajınız
          </label>
          <textarea
            name="message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Buraya mesajınızı girin..."
          ></textarea>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default iletisim;
