import { Router} from "express";

import {userController} from "../controllers/userController";


const router = Router();

router.get('/', userController.getAll);
// router.post('/', userController.createdUser);

export const userRouter = router;