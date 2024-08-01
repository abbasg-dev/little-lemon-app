import { User } from "./user.model";

export class UserInfo {
  token?: string;
  user?: User;
}

export interface AuthProps {
  fullname?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
