import React from "react";
import Banner from "./Banner/Banner";
import Swipe from "./Swiper/Swipe";
import Menu from "./Shared/Menu";
import Bristo from "./Bristo/Bristo";
import { Link } from "react-router-dom";
import CheckBistro from "./Bristo/CheckBistro";
import Testimonials from "./TESTIMONIALS/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="mt-[65px] rounded-lg">
        <Banner></Banner>
      </div>
      <div>
        <div className="mt-4 flex flex-col space-y-3 justify-center items-center ">
          <p className="text-[#d99904] text-center border-b-2 p-5">
            {" "}
            ---From 11:00am to 10:00pm---
          </p>

          <h1 className="font-bold text-xl"> /* ORDER ONLINE */</h1>
        </div>
        <Swipe></Swipe>
        <div>
          <Bristo></Bristo>
          <div className="w-44 mx-auto">
            <Link
              className="mt-10 border-b-2 border-black hover:bg-amber-200 p-3 text-center rounded-lg duration-700 font-bold flex justify-center "
              to="/menu"
            >
              {" "}
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Menu></Menu>
        <div className="flex justify-center cursor-pointer bg-black mt-10 rounded-lg py-10 text-white font-bold">
          <h1 className="text-center "> Call Us: +88 0192345678910</h1>
        </div>
      </div>
      <div className="mt-4 flex flex-col space-y-3 justify-center items-center ">
        <p className="text-[#d99904] text-center border-b-2 p-5">
          {" "}
          ---Should Try---
        </p>

        <h1 className="font-bold border-b-2 space-y-3 text-xl"> /* CHEF RECOMMENDS*/</h1>
      </div>


      <div className="mt-10">
        <CheckBistro></CheckBistro>
        
      </div>
      <div className="mt-10">
        <Testimonials></Testimonials>
        </div>           
    </div>
  );
};

export default Home;
