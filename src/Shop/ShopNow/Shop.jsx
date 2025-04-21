import React, { useEffect, useState } from "react";
import CoverShop from "../../Shared/Cover/CoverShop";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SaladShop from "./MenuShop/SaladShop";
import Pizza from "./MenuShop/Pizza";
import SoupShop from "./MenuShop/SoupShop";
import DessertShop from "./MenuShop/DessertShop";
import DrinkShop from "./MenuShop/DrinkShop";
import { useParams } from "react-router";

const Shop = () => {
  const [salad, setSalad] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [soup, setSoup] = useState([]);
  const [dessert, setDessert] = useState([]);
  const [drink, setDrinks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const categories = ["salad", "pizza", "soup", "dessert", "drink"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  // Reset pagination when tab changes
  useEffect(() => {
    const newIndex = categories.indexOf(category);
    setTabIndex(newIndex !== -1 ? newIndex : 0);
    setCurrentPage(1);
  }, [category]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        const saladItems = data.filter((item) => item.category === "salad");
        const pizzaItems = data.filter((item) => item.category === "pizza");
        const soupItems = data.filter((item) => item.category === "soup");
        const dessertItems = data.filter((item) => item.category === "dessert");
        const drinkItems = data.filter((item) => item.category === "drinks");

        setSalad(saladItems);
        setPizza(pizzaItems);
        setSoup(soupItems);
        setDessert(dessertItems);
        setDrinks(drinkItems);
      });
  }, []);

  const paginate = (items) => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  };

  const renderPagination = (items) => {
    const pageCount = Math.ceil(items.length / itemsPerPage);
    const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
    return (
      <div className="flex justify-center mt-6 gap-2">
        {pages.map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 border rounded ${
              currentPage === num
                ? "bg-yellow-500 text-white"
                : "bg-white text-yellow-500"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <CoverShop />
      <div className="mt-10">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
            setCurrentPage(1);
          }}
          selectedTabClassName="bg-green-600 text-white font-semibold rounded-t-lg"
        >
          <TabList className="flex flex-wrap gap-2 mb-6">
            <Tab className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-t-lg cursor-pointer hover:bg-yellow-100 hover:text-yellow-600 transition">
              SALADS
            </Tab>
            <Tab className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-t-lg cursor-pointer hover:bg-yellow-100 hover:text-yellow-600 transition">
              PIZZA
            </Tab>
            <Tab className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-t-lg cursor-pointer hover:bg-yellow-100 hover:text-yellow-600 transition">
              SOUPS
            </Tab>
            <Tab className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-t-lg cursor-pointer hover:bg-yellow-100 hover:text-yellow-600 transition">
              DESSERTS
            </Tab>
            <Tab className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-t-lg cursor-pointer hover:bg-yellow-100 hover:text-yellow-600 transition">
              DRINKS
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginate(salad).map((item) => (
                <SaladShop salad={item} key={item._id} />
              ))}
            </div>
            {renderPagination(salad)}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginate(pizza).map((item) => (
                <Pizza pizza={item} key={item._id} />
              ))}
            </div>
            {renderPagination(pizza)}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginate(soup).map((item) => (
                <SoupShop soup={item} key={item._id} />
              ))}
            </div>
            {renderPagination(soup)}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginate(dessert).map((item) => (
                <DessertShop dessert={item} key={item._id} />
              ))}
            </div>
            {renderPagination(dessert)}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginate(drink).map((item) => (
                <DrinkShop drink={item} key={item._id} />
              ))}
            </div>
            {renderPagination(drink)}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
