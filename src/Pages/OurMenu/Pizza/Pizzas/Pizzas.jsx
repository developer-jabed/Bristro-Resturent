import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";
const Pizzas = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())

      .then((data) => {
        const popularItems = data.filter((item) => item.category === "dessert");

        setMenu(popularItems);
      });
  }, []);
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-3 mt-3 md:grid-cols-2 lg:grid-cols-3 ">
        {menu.map((item) => (
          <Pizza item={item} key={item._id} ></Pizza>
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

export default Pizzas;
