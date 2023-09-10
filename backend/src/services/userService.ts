import {getManager} from "typeorm";

import {IUser, User} from "../entity";


class UserService {
    public async getUsers(): Promise<IUser[]> {
        return getManager().getRepository(User).find();
    }

    public async createUser(user: IUser): Promise<IUser> {
        return getManager().getRepository(User).save(user);
    }
}

export const userService = new UserService();



