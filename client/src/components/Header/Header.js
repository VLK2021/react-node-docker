import React from 'react';
import {NavLink} from "react-router-dom";

import './HeaderStyle.css';


const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/users'}>users</NavLink>
            <NavLink to={'/create-user'}>create user</NavLink>
        </div>
    );
};

export {Header};