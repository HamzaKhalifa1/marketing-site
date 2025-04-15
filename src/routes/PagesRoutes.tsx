import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import React from "react";
import Wishlist from "../pages/Wishlist";

const PagesRoutes=()=>{
    const route = createBrowserRouter([
        {path:'/',element:<Layout/>,
            children:[
                {index:true,element:<Home/>},
                {path:'Contact',element:<div>Contact</div>},
                {path:'About',element:<div>About</div>},
                {path:'cart',element:<div>Cart</div>},
                {path:'wishlist',element:<Wishlist/>},
            ]}
    ])


    return(
        <RouterProvider router={route}/>
    );
}

export default PagesRoutes;
