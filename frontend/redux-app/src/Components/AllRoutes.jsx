import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import AuthPage from "../Pages/AuthPage";
import SingleProductPage from "../Pages/SingleProdectPage";

const AllRoutes=()=>{
    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/:id" element={<SingleProductPage/>}/>
        </Routes>
    </>
}

export default AllRoutes