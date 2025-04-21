import React from "react";
import featuredImg from "../../../assets/home/featured.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Bristo = () => {
  return (
    <motion.div
      className="bg-cover bg-center bg-no-repeat py-20 text-white px-4 md:px-20"
      style={{ backgroundImage: `url(${featuredImg})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white text-black  backdrop-blur-sm p-8 rounded-xl max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">BISTRO BOSS</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </motion.div>
  );
};

export default Bristo;
