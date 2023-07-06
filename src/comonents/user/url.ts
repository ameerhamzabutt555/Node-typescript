import express from 'express';
import profileController  from './controller';

const router = express.Router();


router.patch('/profile', profileController);


export default router;
