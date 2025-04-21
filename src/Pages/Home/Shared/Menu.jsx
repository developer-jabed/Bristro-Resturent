import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())

      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");

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
        {
            menu.map(item => <MenuItem item={item} key={item._id} ></MenuItem>)
        }
      </div>
    </div>
  );
};

export default Menu;
