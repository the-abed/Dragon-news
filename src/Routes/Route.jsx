import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:
        [
            {
                path: "",
                Component: Home
            },
            {
                path: "/category/:id",
                Component: CategoryNews,
                loader: ()=>fetch("/news.json")
            }
        ]
    },
     {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
        {
            path: "/auth/login" , 
            element: <Login></Login>
        },
        {
            path: "/auth/register" ,
            element: <Register></Register>
        }
    ]
  },
  {
    path: "/news-details/:id",
    element: <PrivateRoute>
        <NewsDetails></NewsDetails>
    </PrivateRoute>,
     loader: ()=>fetch("/news.json"),
     hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
])

export default router