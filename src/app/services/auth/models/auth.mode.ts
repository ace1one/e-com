import { UserModel } from "./user.model";


export class AuthModel {
  authToken!: string;
  refreshToken!: string;
  expiresIn!: String;
  token_type!: string;
  user!: UserModel
  constructor(init?: Partial<AuthModel>) {
    if (init) {
      Object.assign(this, init);
    }
  }

  setAuth(auth: Partial<AuthModel>) {
    Object.assign(this, auth);
  }
}
