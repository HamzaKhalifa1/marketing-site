import React from 'react';
import {Outlet}  from 'react-router-dom';
import Footer from "../../components/layout/Footer";
import Navbar from '../../components/layout/Header/Navbar';



const Layout     = () => {

    return (
        <div >
            <Navbar property1={"active"} />
            <div id='outletCss'>
               <Outlet /> 
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
