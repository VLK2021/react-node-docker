import {Request, Response} from 'express';

import {IUser} from "../entity";
import {userService} from "../services/userService";


class UserController {
    public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        return res.json(users);
    }

    public async createdUser(req: Request, res: Response): Promise<Response<IUser>> {
        const createUser = await userService.createUser(req.body);
        return res.json(createUser);
    }
}

export const userController = new UserController();

