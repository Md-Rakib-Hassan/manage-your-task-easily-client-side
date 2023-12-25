import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";
import Dashboard from "../layout/Dashboard";
import DashHome from "../pages/dashboard/DashHome";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/about-us',
            element:<AboutUs></AboutUs>
        },
        {
            path:'/contact',
            element:<ContactUs></ContactUs>
        },
        {
            path:'/login',
            element:<Login></Login>,
        },
        {
            path:'/registeration',
            element:<Registration></Registration>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'',
          element:<DashHome></DashHome>,
        }
      ]
    }
  ]);

export default router;