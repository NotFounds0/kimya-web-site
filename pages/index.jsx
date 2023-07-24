import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Carousel from "@/components/ui/Carousel";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
        <title>AEM Kimya - Anasayfa</title>
    </Head>
      <Header />
      <Carousel />
      <div>
        <div className="md:px-20">
          <div className="flex flex-col items-center justify-center mt-20 text-center">
            <h1 className="text-3xl text-black">Lorem, ipsum dolor.</h1>

            <p className="text-[#777] md:w-[600px] w-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              sapiente tempore facilis omnis quas porro vitae. Nobis earum
              tempore inventore?
            </p>
          </div>
          <div className="md:flex items-center justify-center gap-4">
            <div className="text-center">
              <h1 className="text-2xl">Lorem, ipsum.</h1>
              <p className="text-[#777] lg:w-[300px] w-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, dolorem.
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl ">Lorem, ipsum dolor.</h1>
              <p className="text-[#777] lg:w-[300px] w-auto">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl">Lorem ipsum dolor sit.</h1>
              <p className="text-[#777] lg:w-[300px] w-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 w-full h-[300px] mt-20 md:flex items-center justify-center gap-10">
        <div className="text-center">
          <h1 className="text-white md:text-5xl text-2xl">0</h1>
          <p className="text-white md:text-3xl text-xl font-bold">
            Deneyimli Çalışan
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-white md:text-5xl text-2xl">0</h1>
          <p className="text-white md:text-3xl text-xl font-bold">
            Mutlu Müşteri
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-white md:text-5xl text-2xl">0</h1>
          <p className="text-white md:text-3xl text-xl font-bold">
            xxx xxxx deneme
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-white md:text-5xl text-2xl">0</h1>
          <p className="text-white md:text-3xl text-xl font-bold">
            aaa xxaaaxx deneme
          </p>
        </div>
      </div>
      <div className="md:px-32 mt-20">
        <h1 className="text-center md:text-2xl font-bold font-mono">
          Referanslar
        </h1>
        <div className="flex flex-wrap justify-center gap-10  border-t border-blue-700">
          <div className="relative md:w-[180px] md:h-[150px] w-[70px] h-[60px]">
            <Image alt="" src="/img/pakmaya.jpg" fill />
          </div>
          <div className="relative md:w-[180px] md:h-[150px] w-[70px] h-[60px]">
            <Image alt="" src="/img/cocacola.png" fill />
          </div>
          <div className="relative md:w-[180px] md:h-[150px] w-[70px] h-[60px]">
            <Image alt="" src="/img/danone.jpg" fill />
          </div>
          <div className="relative md:w-[180px] md:h-[150px] w-[70px] h-[60px]">
            <Image alt="" src="/img/sutas.jpg" fill />
          </div>
          <div className="relative md:w-[180px] md:h-[150px] w-[70px] h-[60px]">
            <Image alt="" src="/img/ulker.jpg" fill />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
