import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { LProject } from '../pages/ProjectsPages/LProject/LProject';
import { MBProject } from '../pages/ProjectsPages/MBProject/MBProject';
import { ClockProject } from '../pages/ProjectsPages/ClockProject/ClockProject';
import { WeatherProject } from '../pages/ProjectsPages/WeatherProject/WeatherProject';
import { CalcProject } from '../pages/ProjectsPages/CalcProject/CalcProject';
import { GifProject } from '../pages/ProjectsPages/GifProject/GifProject';


export const MyRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/lproject" element={<LProject />} />
                    <Route path="/mbproject" element={<MBProject />} />
                    <Route path="/clockproject" element={<ClockProject />} />
                    <Route path="/weatherproject" element={<WeatherProject />} />
                    <Route path="/calcproject" element={<CalcProject />} />
                    <Route path="/gifproject" element={<GifProject />} />
                    <Route path="/*" element={<Navigate to="/home" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
