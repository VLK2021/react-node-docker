import {IUser} from "../../entity";


export interface IUserRepositoryInterface {
    getUsers(): Promise<IUser[]>;

    createdUser(user: IUser): Promise<IUser>;
}