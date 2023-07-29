import React, { useState } from "react";

const GidaItem = ({
  title,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ul>
        <li
          onClick={() => setOpen(!open)}
          className="md:w-[600px] w-full h-[50px] bg-gray-100 border border-gray-300 cursor-pointer rounded-t-md rounded-l-md rounded-r-md rounded-b-none"
        >
          <h1 className="flex items-center h-full px-10 select-none text-[12px] md:text-[15px] font-bold font-mono">
            {title}
          </h1>
        </li>
        {open && (
          <div className="w-full py-5 bg-white border-r border-b border-l border-gray-300 flex items-center px-10 overflow-hidden duration-500 rounded-l-md rounded-r-md rounded-b-md rounded-t-none">
            <ul className="space-y-2 text-gray-500">
              <li>
                <i>{item1}</i>
              </li>
              <li>
                <i>{item2}</i>
              </li>
              <li>
                <i>{item3}</i>
              </li>
              <li>
                <i>{item4}</i>
              </li>
              <li>
                <i>{item5}</i>
              </li>
              <li>
                <i>{item6}</i>
              </li>
              <li>
                <i>{item7}</i>
              </li>
              <li>
                <i>{item8}</i>
              </li>
              <li>
                <i>{item9}</i>
              </li>
              <li>
                <i>{item10}</i>
              </li>
              <li>
                <i>{item11}</i>
              </li>
            </ul>
          </div>
        )}
      </ul>
    </div>
  );
};

export default GidaItem;
