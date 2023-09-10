import {Router} from "express";

import {userRouter} from "./userRouter";


const router = Router();

router.use('/users', userRouter);
// router.use('/create', userRouter);

export const maineRouter = router;
