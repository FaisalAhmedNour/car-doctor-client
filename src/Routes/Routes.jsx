import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheakOut from "../Pages/CheakOut/CheakOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoutes from "./PrivetRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            },
            {
                path: "cheakout/:id",
                element: <CheakOut></CheakOut>,
                loader: ({ params }) => fetch(`https://car-doctor-server-faisalahmednour.vercel.app/services/${params.id}`)
            },
            {
                path: "bookings",
                element: <PrivetRoutes><Bookings></Bookings></PrivetRoutes>
            }
        ]
    }
])

export default routes;