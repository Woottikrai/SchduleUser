import axios from "axios";
import { IUser } from "../../models/IUser";

const BASE_URL = "http://localhost:8080/user/";

export async function Get() {
  return await axios.get<Array<IUser>>(`${BASE_URL}`);
}

export async function Post(params?: any) {
  if (params) {
    return await axios.post<IUser>(`${BASE_URL}create`, params);
  }
}

export async function GetId(id?: number) {
  if (id) {
    return await axios.get<IUser>(`${BASE_URL}user/${id}`);
  }
}

export async function Update(id?: number, params?: IUser) {
  if (id) {
    return await axios.patch<IUser>(`${BASE_URL}patch/${id}}`, params);
  }
}

export async function Delete(id?: number) {
  if (id) {
    return await axios.delete<IUser>(`${BASE_URL}delete/${id}`);
  }
}
