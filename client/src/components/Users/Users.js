import React, {useEffect, useState} from 'react';

import './UsersStyle.css';
import {userService} from "../../services/user.service";
import {User} from "../User/User";


const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={'users'}>
            <h1>Users:</h1>

            {users &&
            users.map(obj => <User key={obj.id} user={obj}/>)
            }
        </div>
    );
};

export {Users};