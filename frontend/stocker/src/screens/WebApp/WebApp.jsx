import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import Screen1 from './Screen1';
import NavBar from '../../components/NavBar';

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
                    <Route path="screen1" element={<Screen1 />} />
                </Route>
            </Routes>
        </>
    );
}

export default WebApp;