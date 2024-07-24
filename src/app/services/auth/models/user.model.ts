import { AuthModel } from "./auth.mode";


export class UserModel extends AuthModel {
  id!: number;
  name!: string;
  email!: string;
  permissions!: any[];
  isSuperadmin!: number;
  isAdmin!: number;



}
