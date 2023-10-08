import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Register from "../componets/Register";
import Login from "../componets/Login";
import Contact from "../componets/Contact";
import SigleService from "../componets/SigleService";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../componets/ErrorPage";
import Book from "../componets/Book";
import SingleNews from "../componets/SingleNews";
import Galary from "../componets/Galary";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path:'news',
                element:<Book></Book>,
                loader:()=>fetch('https://api.itbook.store/1.0/new')
            },
            {
                path:'/news/:id',
                element:<SingleNews></SingleNews>,
                loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
            },
            {
                path:'gallery',
                element:<PrivateRoutes><Galary></Galary></PrivateRoutes>
            }

        ]
    },
]);