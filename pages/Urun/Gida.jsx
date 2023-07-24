import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import YerBelirt from "@/components/ui/YerBelirt";
import React, { useState } from "react";

const Gida = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header />
      <YerBelirt title={"Gıda"} desc={"Anasayfa / Gıda"} />
      <div className="flex flex-col items-center">
        <ul>
          <li className="w-[500px] h-[50px] bg-red-100"></li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Gida;
