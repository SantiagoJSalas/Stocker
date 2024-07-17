import React from 'react';
import {Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import Screen1 from './Screen1';
import NavBar from '../../components/NavBar';
import Food from './Food';
import Resources from './Resources';
import Furniture from './Furniture';

const Layout = () => {
    return (
      <div className="flex h-screen p-5 space-x-8 bg-st_gray">
        <NavBar />
        <div className='w-full'>   
          <Outlet />
        </div>
      </div>
    );
  }

function WebApp() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="food" element={<Food />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="furniture" element={<Furniture />} />
                    <Route path="tests" element={<Screen1 />} />
                </Route>
            </Routes>
        </>
    );
}

export default WebApp;