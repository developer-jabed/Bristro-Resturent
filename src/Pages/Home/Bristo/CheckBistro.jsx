import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const CheckBistro = () => {
  return (
    <motion.div
      className="bg-cover bg-center bg-no-repeat py-20 text-white px-4 md:px-20"
      style={{ backgroundImage: `url(${featuredImg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className=" flex flex-col  space-y-3 justify-center items-center ">
        <p className="text-[#d99904] text-center text-xl border-b-2 p-5">
          {" "}
          ---Check it out---
        </p>

        <h1 className="font-bold border-b-2 space-y-3 text-2xl">
          {" "}
          /*  FROM OUR MENU*/
        </h1>
      </div>
      <div className=" text-white gap-6 flex justify-between items-center mt-4 p-8 rounded-xl max-w-4xl mx-auto text-center">
        <img className="w-[400px] h-full rounded-lg" src={featuredImg} alt="" />
       <div className="flex flex-col">
       <h1 className="text-4xl font-bold mb-4">BISTRO BOSS</h1>
        <p className="text-lg text-center flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
        <button
              className="mt-10 border-b-2 border-black hover:bg-amber-200 p-3 text-center rounded-lg duration-700 font-bold flex justify-center "
              to="readMore"
            >
              {" "}
              View Full Menu
            </button>
       </div>
      </div>
    </motion.div>
  );
};

export default CheckBistro;
