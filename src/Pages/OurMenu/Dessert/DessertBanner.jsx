import React from "react";
import img from "../../../assets/home/chef-service.jpg";

const DessertBanner = () => {
  return (
    <div
      className="hero h-[700px] mt-10 rounded-lg"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content bg-[#151515] opacity-80 p-40 text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">DESSERTS </h1>
          <p className="mb-5">
            Lorem Ipsum has been the industry’s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DessertBanner;
