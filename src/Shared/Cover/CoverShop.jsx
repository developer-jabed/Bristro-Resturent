import React from "react";
import img from "../../assets/shop/banner2.jpg";

const CoverShop = () => {
  return (
    <div
      className="hero h-[700px] rounded-lg"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content bg-[#151515] opacity-80 p-40 text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Our Menu </h1>
          <p className="mb-5">Would you like to try a dish?</p>
        </div>
      </div>
    </div>
  );
};

export default CoverShop;
