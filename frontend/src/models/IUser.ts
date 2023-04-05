export interface IUser {
  id?: number;
  key?: string;
  name?: string;
  fullname: string;
  email: string;
  position: string;
  image?: string;
  tel?: string;
  columnName: IUserName;
}

export interface IUserName extends IUser {
  data: Pick<IUser, "fullname" | "email" | "image">;
}
