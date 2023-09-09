import { Request, Response } from 'express';

import {userService} from "../services/userService";
import {IUser} from "../entity";



class UserController {

    public async getAll(req: Request, res: Response): Promise<Response<IUser[]>> {
        const users = await userService.getUsers();
        return res.json(users);
    }

    public async createdUser(req: Request, res: Response): Promise<Response<IUser[]>> {
        const createdUser = await userService.createdUser(req.body);
        return res.json(createdUser);
    }

}
export const userController = new UserController();