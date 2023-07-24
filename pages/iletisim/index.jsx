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
          <label className="block text-gray-700 font-bold mb-2">
            Mesajınız
          </label>
          <textarea
            name="message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Buraya mesajınızı girin..."
          ></textarea>
        </div>
        <button className="bg-blue-600 px-5 py-1 text-white">Gönder</button>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1530.7054857988328!2d32.8646243!3d39.8874301!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f85729b4f8b%3A0xb9e08ade8f7c59ca!2zw4dhbmtheWEgS8O2xZ9rw7w!5e0!3m2!1str!2str!4v1690205950086!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="md:w-[600px] h-[500px] w-full"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default iletisim;
