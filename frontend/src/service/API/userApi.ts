import axios from "axios";
import IUser from "../../models/IUser";

const BASE_URL = "http://localhost:8080/user";

export async function Get<T>() {
  return await axios.get<Array<T>>(`${BASE_URL}`);
}

export async function Post<T>(params?: IUser) {
  if (params) {
    return await axios.post<T>(`${BASE_URL}/create`, params);
  }
}

export async function GetId<T>(id?: number) {
  if (id) {
    return await axios.get<T>(`${BASE_URL}/${id}`);
  }
}

export async function Update<T>(id?: number, params?: IUser) {
  if (id) {
    return await axios.patch<T>(`${BASE_URL}/update/${id}}`, params);
  }
}

export async function Delete<T>(id?: number) {
  if (id) {
    return await axios.delete<T>(`${BASE_URL}/${id}`);
  }
}
