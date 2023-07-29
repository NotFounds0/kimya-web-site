import GidaItem from "@/components/Cards/Gidaitem";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import YerBelirt from "@/components/ui/YerBelirt";
import React, { useState } from "react";

const Tarim = () => {
  return (
    <>
      <Header />
      <YerBelirt title={"Gıda"} desc={"Anasayfa / Gıda"} />
      <div className="flex flex-col items-center gap-1 mt-5">
        <GidaItem
          title={"GENEL TARIM KİMYASALLARI"}
          item1="- Kalsiyum Dodesil Benzen Sülfonat / Stero Cabs"
          item2="- Kalsiyum Klorür"
          item3="- Kalsiyum Nitrat"
          item4="- Kalsiyum Ligno Sülfonat"
          item5="- Mangan Sülfat0"
          item6="- Bakır Sülfat "
          item7="- Borik Asit"
          item8="- Çinko Sülfat"
          item9="- Demir Sülfat"
          item10="- Di Amonyum Fosfat"
          item11="- Mono Amonyum Fosfat"
          item12="- Mono Potasyum Fosfat"
          item13="- Potas Kostik"
          item14="- Potasyum Karbonat"
          item15="- Potasyum Nitrat"
          item16="- Potasyum Sülfat"
          item17="- Üre Sülfat"
          item18="- Di Etilen Glikol"
          item19="- Edta "
          item20="- Gliserin"
          item21="- Fosforik Asit 85 %"
          item22="- Mono Amonyum Fosfat"
          item23="- Mono Etanol Amin"
        />
      </div>
      <Footer />
    </>
  );
};

export default Tarim;
