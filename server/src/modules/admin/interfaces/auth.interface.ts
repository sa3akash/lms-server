import { Role } from '@middleware/auth';

export interface IUserDocument {
  _id: string;
  name: string;
  email: string;
  role: Role;
  password: string;
  phoneNumber: string;
  resetPasswordToken?: string;
  updatedAt: string;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

export interface ISubjectDocument {
  _id: string;
  subjectName: string;
  grade: string;
}