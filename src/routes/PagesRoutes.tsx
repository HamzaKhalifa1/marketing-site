import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import React from "react";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import Error from "../pages/Error";

const PagesRoutes=()=>{
    const route = createBrowserRouter([
        {path:'/',element:<Layout/>,
            children:[
                {index:true,element:<Home/>},
                {path:'contact',element:<Contact/>},
                {path:'about',element:<div>About</div>},
                {path:'wishlist',element:<Wishlist/>},
                {path:'cart',element:<Cart/>},
                {path:'cart/checkOut',element:<CheckOut/>},
                { path: '*', element: <Error /> }
            ]}
    ])


    return(
        <RouterProvider router={route}/>
    );
}

export default PagesRoutes;
