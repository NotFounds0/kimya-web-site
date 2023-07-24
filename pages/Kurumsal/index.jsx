import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import YerBelirt from "@/components/ui/YerBelirt";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const Kurumsal = () => {
  return (
    <>
      <Head>
        <title>AEM Kimya - Kurumsal</title>
      </Head>
      <Header />

      <YerBelirt title={"Kurumsal"} desc={"Anasayfa / Kurumsal"} />

      <div className="md:flex  justify-center md:px-20 items-center mt-5 md:justify-between">
        <div className="relative md:w-[600px] w-full h-[300px]">
          <Image alt="" src={"/img/resimSlider.png"} fill objectFit="cover" />
        </div>
        <div>
          <div className="text-center flex flex-col gap-3 md:mt-0 mt-2">
            <h1>AEM Kimya</h1>
            <p className="md:w-[600px] w-auto text-sm text-gray-600">
              AEM Kimya Firması olarak, inovasyon ve teknolojideki sınırları
              zorlayarak, dünyanın dört bir yanındaki müşterilerimize öncü
              nanoteknoloji çözümleri sunmaktan gurur duyuyoruz. Geleceğin
              endüstriyel ve bilimsel ihtiyaçlarını karşılamak amacıyla
              ulaştığımız başarılar, özverili ekibimiz ve müşterilerimizin bize
              olan güveni sayesindedir.
            </p>

            <h1>Kimiz?</h1>

            <p className="md:w-[600px] w-auto text-sm text-gray-600">
              AEM Kimya Firması, 2000 yılında bir grup tutkulu bilim insanı
              tarafından kurulmuş bir özel şirkettir. Misyonumuz,
              nanoteknolojinin potansiyelini tam anlamıyla kullanarak, dünyamıza
              değer katan ve sorunları çözen malzemeleri tasarlamak ve
              üretmektir.
            </p>

            <h1>Neler Yapıyoruz?</h1>

            <p className="md:w-[600px] w-auto text-sm text-gray-600">
              AEM Kimya Firması olarak, atomik düzeyde metal nanokümeleri
              üretiminde uzmanlaşmış bir ekibe sahibiz. Nanoteknolojinin önemli
              bir alt dalı olan AEM (Atomik-Epimerizmeli Metal) kimyası,
              firmamızın temel odak noktasıdır. Bu alandaki son teknolojileri ve
              yenilikçi süreçleri kullanarak, özel müşteri taleplerine uygun
              çözümler üretmekteyiz.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="border border-blue-600"></div>
      <div className="lg:flex items-center mt-10 text-center bg-blue-600 lg:h-[150px] h-full">
        <div className="">
          <h1 className="text-white text-xl font-bold">Vizyon</h1>
          <p className="xl:w-[700px] w-auto md:px-20 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            veritatis eius odio voluptas porro recusandae repudiandae eligendi
            assumenda, fugit nesciunt aut beatae illo quod corrupti. Sed
            temporibus amet voluptatibus nihil!
          </p>
        </div>
        <div>
          <h1 className="text-white text-xl font-bold">Misyon</h1>
          <p className="xl:w-[700px] w-auto md:px-20 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            veritatis eius odio voluptas porro recusandae repudiandae eligendi
            assumenda, fugit nesciunt aut beatae illo quod corrupti. Sed
            temporibus amet voluptatibus nihil!
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center mt-12 pb-6 text-center">
        <h1>Değerlerimiz</h1>
        <p className="md:w-[700px] w-auto md:px-20 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          veritatis eius odio voluptas porro recusandae repudiandae eligendi
          assumenda, fugit nesciunt aut beatae illo quod corrupti. Sed
          temporibus amet voluptatibus nihil!
        </p>
      </div>

      <Footer />
    </>
  );
};

export default Kurumsal;
