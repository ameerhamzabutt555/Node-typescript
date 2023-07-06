import mongoose, { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

interface User extends Document {
  uuid: string;
  email: string;
  firstName: string;
}

const userSchema: Schema<User> = new mongoose.Schema({
  uuid: {
    type: String,
    trim: true,
    unique: true,
    default: uuidv4,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
  },
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
