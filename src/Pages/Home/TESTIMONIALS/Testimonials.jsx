import React from "react";
import Review from "./Review";


const Testimonials = () => {
  return (
    <div>
      <div className=" flex flex-col  space-y-3 justify-center items-center ">
        <p className="text-[#d99904] text-center text-xl border-b-2 p-5">
          {" "}
          ---What our client say---
        </p>

        <h1 className="font-bold border-b-2 space-y-3 text-2xl">
          {" "}
          TESTIMONIALS
        </h1>
      </div>
      <div className="mt-10">
        <Review></Review>
      </div>
    </div>
  );
};

export default Testimonials;
