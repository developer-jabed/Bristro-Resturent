import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import TodaysOffer from "./Offer/TodaysOffer";
import DessertBanner from "./Dessert/DessertBanner";
import DessertMenu from "./Dessert/DesserMenu/DessertMenu";
import PizzaBanner from "./Pizza/Pizzas/PizzaBanner";
import Pizzas from "./Pizza/Pizzas/Pizzas";
import SaladBanner from "./Salads/Salad/SaladBanner";
import Salads from "./Salads/Salads";
import SoupBanner from "./Soups/Soup/SoupBanner";
import Soups from "./Soups/Soups";

const Menu = () => {
  return (
    <div className="">
      <Helmet>
        <title>Bristro Boss|| Menu</title>
      </Helmet>
      <Cover img={menuImg}></Cover>
      <div className="mt-10">
        <TodaysOffer></TodaysOffer>
      </div>
      <DessertBanner></DessertBanner>
      <div>
        <DessertMenu></DessertMenu>
      </div>
      <PizzaBanner></PizzaBanner>
      <Pizzas></Pizzas>
      <div>
        <SaladBanner></SaladBanner>
        <Salads></Salads>
      </div>
      <div>
        <SoupBanner></SoupBanner>
        <Soups></Soups>
      </div>
    </div>
  );
};

export default Menu;
