import React, { useEffect, useState } from "react";
import OfferMenu from "./OfferMenu";
import { Link } from "react-router-dom";

const Offer = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
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
        <Link
          to="/shop/drink"
          className="mt-10 border-b-2 border-black hover:bg-amber-200 p-3 text-center rounded-lg duration-700 font-bold"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default Offer;
