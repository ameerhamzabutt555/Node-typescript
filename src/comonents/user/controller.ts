
import { StatusCodes } from 'http-status-codes';
import  profileService  from './view';
import { Request, Response } from 'express';
 
async function profileController(req:Request, res:Response) {
  try {
    const data = await profileService(req);
    return res.status(StatusCodes.OK).json({
      message: 'User Profile Updated successfully.',
      data,
    });
  } catch (error) {
    if ((error as any).isOperational) {
      return res.status((error as any).httpCode).json({
        message: (error as any).description,
      });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: (error as any).message,
    });
  }
}





export default profileController