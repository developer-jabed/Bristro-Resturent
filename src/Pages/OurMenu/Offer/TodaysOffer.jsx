import React from "react";
import Offer from "./Offer";

const TodaysOffer = () => {
  return (
    <div>
      <div className=" flex flex-col  space-y-3 justify-center items-center ">
        <p className="text-[#d99904] text-center text-xl border-b-2 p-5">
          {" "}
          ---Don't miss---
        </p>

        <h1 className="font-bold border-b-2 space-y-3 text-2xl">
          {" "}
          /* TODAY'S OFFER */
        </h1>
      </div>
      <div className="mt-10">
        <Offer></Offer>
      </div>
    </div>
  );
};

export default TodaysOffer;
