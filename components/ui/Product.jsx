import Image from "next/image";
import React from "react";

const Product = ({img,desc,title}) => {
  return (
    <div className="relative">
      <div className="relative md:w-[300px] w-[260px] h-[300px]  overflow-hidden">
        <Image
          alt=""
          src={img}
          fill
          className="hover:scale-110 duration-500 rounded-xl"
        />
      </div>
      <div className=" space-y-2">
        <h1 className="bg-black text-white py-2 px-5 absolute bottom-14 bg-opacity-75">
          {title}
        </h1>
        <p className="bg-black text-white py-1 absolute bottom-3 md:w-[300px] w-[260px] text-center bg-opacity-75">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Product;
