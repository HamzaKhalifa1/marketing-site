import React from 'react';
import { Outlet, useLocation}  from 'react-router-dom';
import Footer from "../../components/layout/Footer";
import Navbar from '../../components/layout/Header/Navbar';
import Breadcrumb from '../../common/Breadcrumb';

const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div >
            <Navbar property1={"active"} />
            <div id='outletCss'>
            {!isHomePage && <Breadcrumb />}
               <Outlet /> 
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;
