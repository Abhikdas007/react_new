import React from "react";
import {Routes, Route} from 'react-router';
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes =()=>{
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    )
}

export default AppRoutes;