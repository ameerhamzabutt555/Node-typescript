import express from 'express';
import userRouter from '../comonents/user/url';

const router = express.Router();


router.use('/users', userRouter);

export default router;