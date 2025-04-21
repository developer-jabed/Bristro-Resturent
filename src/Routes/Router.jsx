import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/OurMenu/Menu";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path:"menu",
                element: <Menu></Menu>
            }
        ]
    }
]);

export default router;