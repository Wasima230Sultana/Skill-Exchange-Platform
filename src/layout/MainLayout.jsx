import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <header className='w-11/12 min-h-screen mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 min-h-screen mx-auto'>
                <Outlet></Outlet>
            </main>
            <footer className='w-11/12 min-h-screen mx-auto'>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;