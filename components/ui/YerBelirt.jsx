import React from "react";

const YerBelirt = ({ title, desc }) => {
  return (
    <div>
      <div className="bg-blue-600 w-full h-[130px] flex flex-col justify-center md:px-32 items-center md:items-start text-white">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default YerBelirt;
