import axios from "axios";
import IUser from "../../models/IUser";

const BASE_URL = "http://localhost:8080/calendar/";

export async function Get<T>() {
  return await axios.get<Array<T>>(`${BASE_URL}get`);
}

export async function Post(params?: any) {
  if (params) {
    return await axios.post(`${BASE_URL}post`, params);
  }
}

export async function GetId<T>(id?: number) {
  if (id) {
    return await axios.get<T>(`${BASE_URL}get/${id}`);
  }
}

export async function Update<T>(id?: number, params?: IUser) {
  if (id) {
    return await axios.patch<T>(`${BASE_URL}patch/${id}}`, params);
  }
}

export async function Delete<T>(id?: number) {
  if (id) {
    return await axios.delete<T>(`${BASE_URL}delete/${id}`);
  }
}
