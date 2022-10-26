import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/shared/Footer';
import Header from '../component/shared/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;