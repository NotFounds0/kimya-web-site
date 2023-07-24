import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Product from "@/components/ui/Product";
import YerBelirt from "@/components/ui/YerBelirt";
import Head from "next/head";
import React from "react";

const urun = () => {
  return (
    <>
    <Head>
        <title>AEM Kimya - Ürünler</title>
    </Head>
      <Header />
      <YerBelirt title={"ÜRÜNLER"} desc={"Anasayfa / Ürünler"} />
      <div className="mt-10">
        <h1 className="border-b border-blue-600 text-2xl font-bold flex flex-col items-center text-center">
          Ürünlerimiz
          <p className="text-sm md:w-[400px] w-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            facilis ratione fugiat corrupti, nihil sapiente!
          </p>
        </h1>

        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <Product
            img={"/img/sliderFoto.jpg"}
            title={"DENEME ÜRÜN 0614"}
            desc={"Kaliteli ürünler deneme"}
          />
          <Product
            img={"/img/sliderFoto.jpg"}
            title={"DENEME ÜRÜN 0614"}
            desc={"Kaliteli ürünler deneme"}
          />
          <Product
            img={"/img/sliderFoto.jpg"}
            title={"DENEME ÜRÜN 0614"}
            desc={"Kaliteli ürünler deneme"}
          />
          <Product
            img={"/img/sliderFoto.jpg"}
            title={"DENEME ÜRÜN 0614"}
            desc={"Kaliteli ürünler deneme"}
          />
          <Product
            img={"/img/sliderFoto.jpg"}
            title={"DENEME ÜRÜN 0614"}
            desc={"Kaliteli ürünler denemesss"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default urun;
