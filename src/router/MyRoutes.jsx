import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import {  ProjectPage } from '../pages/ProjectPage/ProjectPage';



export const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>                    
                    <Route path="/projectpage" element={<ProjectPage/>}/>                    
                    <Route path="/*" element={<Navigate to="/home"/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
