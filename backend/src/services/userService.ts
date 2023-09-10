import bcrypt from 'bcrypt';

import {config} from "../config";
import {IUser} from "../entity";
import {userRepository} from "../repositiries/users/userRepository";


class UserService {
    public async getUsers(): Promise<IUser[]> {
        return userRepository.getUsers();
    }

    public async createdUser(user: IUser): Promise<IUser> {
        const { password } = user;
        const hashedPassword = await this._hashPassword(password);
        const dataToSave = { ...user, password: hashedPassword };

        return userRepository.createdUser(dataToSave);
    }

    private async _hashPassword(password: string): Promise<string> {
        return  await bcrypt.hash(password, Number(config.USER_SALT_ROUNDS));
    }
}
export const userService = new UserService();



