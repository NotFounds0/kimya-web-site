import GidaItem from "@/components/Cards/Gidaitem";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import YerBelirt from "@/components/ui/YerBelirt";
import React, { useState } from "react";

const Gida = () => {
  return (
    <>
      <Header />
      <YerBelirt title={"Gıda"} desc={"Anasayfa / Gıda"} />
      <div className="flex flex-col items-center gap-1 mt-5">
        <GidaItem
          title={"ANTİMİKROBİALLER"}
          item1="- Potasyum Sorbat"
          item2={"- Sodyum Benzoat"}
        />
        <GidaItem
          title={"ANTİOKSİDANLAR"}
          item1="- Askorbik Asit ( Vitamin C )"
        />
        <GidaItem
          title={"ASİTLİK DÜZENLEYİCİLER"}
          item1="- Sitrik Asit Anh"
          item2={"- Sitrik Asit Mono"}
          item3={"- Tartarik Asit Anh"}
          item4={"- Trisodyum Sitrat"}
        />
        <GidaItem
          title={"GIDA BOYALARI"}
          item1="- Allura Red"
          item2={"- Brillant Blue"}
          item3={"- Carmoisine"}
          item4={"- Chocolate Brown"}
          item5={"- Dark Chocolate Brown "}
          item6={"- Erythrosine"}
          item7={"- Pea Green"}
          item8={"- Ponceau 4r"}
          item9={"- Quinoline Yellow"}
          item10={"- Sunset Yellow"}
          item11='- Tartrasine '
        />
        <GidaItem
          title={"TATLANDIRICILAR VE LEZZET VERİCİLER"}
          item1="- Sucralose"
          item2={"- Aspartam "}
          item3={"- Acesülfam K"}
          item4={"- Sodyum Sakarin"}
          item5={"- Sodyum Siklamat"}
          item6={"- Monosodyum Glutamat"}
        />
      </div>
      <Footer />
    </>
  );
};

export default Gida;
