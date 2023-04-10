import axios from "axios";

const BASE_URL = "http://localhost:8080/user/";

export async function Get() {
  return await axios.get<Array<IUser>>(`${BASE_URL}get`);
}

export async function Post(params?: IUser) {
  if (params) {
    return await axios.post<IUser>(`${BASE_URL}create`, params);
  }
}

export async function GetId(id?: number | string) {
  if (id) {
    return await axios.get<IUser>(`${BASE_URL}find/${id}`);
  }
}

export async function Update(
  id?: number,
  params?: Omit<IUser, "firstname" | "lastname">
) {
  if (id && params) {
    return await axios.patch<IUser>(`${BASE_URL}update/${id}`, params);
  }
}

export async function Delete(id?: number) {
  if (id) {
    return await axios.delete<IUser>(`${BASE_URL}delete/${id}`);
  }
}
