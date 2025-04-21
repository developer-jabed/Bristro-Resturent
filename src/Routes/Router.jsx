import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";
import Shop from "../Shop/ShopNow/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path:"shop/:category",
        element: <Shop></Shop>,
      }
    ],
  },
]);

export default router;
