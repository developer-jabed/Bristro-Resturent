import React, { useEffect, useState } from "react";
import OfferMenu from "./OfferMenu";

const Offer = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())

      .then((data) => {
        const popularItems = data.filter((item) => item.category === "offered");

        setMenu(popularItems);
      });
  }, []);
  return (
    <div>
      <div className="mt-4 flex flex-col space-y-3 justify-center items-center ">
        <p className="text-[#d99904] text-center border-b-2 p-5">
          {" "}
          ---Check it out---
        </p>

        <h1 className="font-bold text-xl"> /* FROM OUR MENU */ </h1>
      </div>
      <div className="grid grid-cols-1 gap-3 mt-3 md:grid-cols-2 lg:grid-cols-3 ">
        {menu.map((item) => (
          <OfferMenu item={item} key={item._id}></OfferMenu>
        ))}
      </div>
     <div className="flex justify-center">
     <button
        className="mt-10 border-b-2 border-black hover:bg-amber-200 p-3 text-center rounded-lg duration-700 font-bold flex justify-center "
        to="readMore"
      >
        {" "}
        ORDER YOUR FAVOURITE FOOD
      </button>
     </div>
    </div>
  );
};

export default Offer;
