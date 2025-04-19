import React from 'react';
import './App.css';
import PagesRoutes from "./routes/PagesRoutes.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <>
            <PagesRoutes/>
            <ToastContainer/>
        </>

    );
}

export default App;