import React from 'react';
import {Outlet} from 'react-router-dom';

import './LayoutStyle.css';
import {Header} from "../components";


const Layout = () => {
    return (
        <div className={'layout'}>
            <div className={'layoutHeader'}>
                <Header/>
            </div>

            <div className={'outlet'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};