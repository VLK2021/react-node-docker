import {Column, Entity} from "typeorm";

import {CommonFields} from "./commonFields";


export interface IUser {
    id: number;
    firstName: string;
    secondName: string;
    age: number;
    city: string;
    phone: string;
    email: string;
    password: string;
}


@Entity('users', {database: 'doker'})
export class User extends CommonFields implements IUser {

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    secondName: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    age: number;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    city: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
    phone: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
        unique: true,
    })
    email: string;

    @Column({
        type: 'varchar',
        width: 250,
        nullable: false,
    })
    password: string;
}



