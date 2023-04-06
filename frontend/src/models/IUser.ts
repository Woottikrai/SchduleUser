export interface IUser {
  id?: number;
  key?: string;
  name?: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmpassword: string;
  idline: string;
  fullname: string; //createUser
  email: string; //createUser
  position: string; //createUser
  image: any; //createUser
  tel: string; //createUser
}
