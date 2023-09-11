import React from 'react';

import './UserStyle.css';


const User = ({user}) => {
    const {id, firstName, secondName, age, city, phone, email, password} = user;


    return (
        <div className={'user'}>
            {id}) {firstName} - {secondName} - {age} - {city}
        </div>
    );
};

export {User};