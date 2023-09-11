import React from 'react';

import './CreateUserStyle.css';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";


const CreateUser = () => {
    const {register, handleSubmit, reset} = useForm();

    const submit = async (data) => {
        await userService.create(data);
        reset();
    };


    return (
        <div className={'createUser'}>
            <form onSubmit={handleSubmit(submit)}>
                <label>firstName:<input type="text" {...register('firstName')}/></label>
                <label>secondName:<input type="text" {...register('secondName')}/></label>
                <label>age:<input type="text" {...register('age')}/></label>
                <label>city:<input type="text" {...register('city')}/></label>
                <label>phone:<input type="text" {...register('phone')}/></label>
                <label>email:<input type="text" {...register('email')}/></label>
                <label>password:<input type="text" {...register('password')}/></label>

                <button>submit</button>
            </form>
        </div>
    );
};

export {CreateUser};