import GidaItem from "@/components/Cards/Gidaitem";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import YerBelirt from "@/components/ui/YerBelirt";
import React, { useState } from "react";

const Tekstil = () => {
  return (
    <>
      <Header />
      <YerBelirt title={"Gıda"} desc={"Anasayfa / Gıda"} />
      <div className="flex flex-col items-center gap-1 mt-5">
        <GidaItem
          title={"ALKOL ETOKSİLATLAR"}
          item1="- C10 Alkol 3 Eo"
          item2="- C10 Alkol 5 Eo"
          item3="- C10 Alkol 6 Eo"
          item4="- C10 Alkol 8 Eo"
          item5="- C12 Alkol 2 Eo"
          item6="- C12 Alkol 6 Eo"
          item7="- C12 C14 7 Eo"
          item8="- C13 3 Eo"
          item9="- C13 5 Eo"
          item10="- C13 6 Eo"
          item11="- C13 8 Eo"
          item12="- C13 12 Eo"
          item13="- C13 20 Eo"
        />
      </div>
      <Footer />
    </>
  );
};

export default Tekstil;
