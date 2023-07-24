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
      <div>
            
      </div>
      <Footer />
    </>
  );
};

export default iletisim;
