import {EntityRepository, getManager, Repository} from "typeorm";

import {User, IUser} from "../../entity";
import {IUserRepositoryInterface} from "./userRepository.interface";



@EntityRepository(User)
class UserRepository extends Repository<User> implements IUserRepositoryInterface {

    public async getUsers() {
        return getManager().getRepository(User).find();
    }

    public async createdUser(user: IUser) {
        return getManager().getRepository(User).save(user);
    }

}
export const userRepository = new UserRepository();


