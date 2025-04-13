import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import React from "react";

const PagesRoutes=()=>{
    const route = createBrowserRouter([
        {path:'/',element:<Layout/>,
            children:[
                {index:true,element:<Home/>},
            ]}
    ])


    return(
        <RouterProvider router={route}/>
    );
}

export default PagesRoutes;
