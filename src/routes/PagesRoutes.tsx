import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import React from "react";

const PagesRoutes=()=>{
    const route = createBrowserRouter([
        {path:'/',element:<Layout/>,
            children:[
                {index:true,element:<Home/>},
                {path:'Contact',element:<div>Contact</div>},
                {path:'About',element:<div>About</div>},
                {path:'cart',element:<div>Cart</div>},
                {path:'wishlist',element:<div>Wishlist</div>},
            ]}
    ])


    return(
        <RouterProvider router={route}/>
    );
}

export default PagesRoutes;
