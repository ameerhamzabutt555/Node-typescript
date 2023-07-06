import { StatusCodes } from 'http-status-codes';
import User from '../../../models/user.model';
import { Request, Response} from 'express';

class AppError extends Error {
  public httpCode: number;
  public description: string;
  public isOperational: boolean;

  constructor(httpCode: number, description: string, isOperational: boolean) {
    super(description);
    this.httpCode = httpCode;
    this.description = description;
    this.isOperational = isOperational;
  }
}


async function profileService(req: Request) {
  const {  uuid,email,...body } = req.body;
  const profileUpdated = await User.findOneAndUpdate(
    { uuid: uuid },
    { $set: { ...body, updatedAt: new Date(), updatedBy: email } },
    {
      fields: {
        firstName: 1, lastName: 1, phoneNo: 1, userPhoto: 1,
      },
      new: true,
    },
  );
  if (profileUpdated) {
    return profileUpdated;
  }

  throw new AppError(StatusCodes.CONFLICT, 'NOT_FOUND', true);
}


  




export default profileService;
