import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../componets/Register";
import Login from "../componets/Login";
import Contact from "../componets/Contact";
import SigleService from "../componets/SigleService";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <p>404 page not allow</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:()=>fetch('/education.json')
            },
            {
                path: '/resgister',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'contact',
                element:<Contact></Contact>
            },
            {
                path:'/book/:id',
                element:<PrivateRoutes><SigleService></SigleService></PrivateRoutes>,
                loader:()=>fetch('/education.json')
            }

        ]
    },
]);