import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../authentication/Login";
import Registration from "../authentication/Registration";

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
  ]);

export default router;