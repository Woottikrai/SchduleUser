import axios from "axios";
import { IUser } from "../../models/IUser";

export async function Get<IModel>(BASE_URL: string) {
  return await axios.get<Array<IModel>>(`${BASE_URL}get`);
}

export async function Random<IModel>(BASE_URL: string) {
  return await axios.get<Array<IModel>>(`${BASE_URL}random`);
}

export async function Post<IModel>(params?: IModel, BASE_URL?: string) {
  if (params) {
    return await axios.post<IModel>(`${BASE_URL}create`, params);
  }
}

export async function GetId<IModel>(id?: number | string, BASE_URL?: string) {
  if (id) {
    return await axios.get<IModel>(`${BASE_URL}find/${id}`);
  }
}

export async function Update<IModel>(
  id?: number,
  params?: Omit<IUser, "firstname" | "lastname">,
  BASE_URL?: string
) {
  if (id && params) {
    return await axios.patch<IModel>(`${BASE_URL}update/${id}`, params);
  }
}

export async function Delete<IModel>(id?: number, BASE_URL?: string) {
  if (id) {
    return await axios.delete<IModel>(`${BASE_URL}delete/${id}`);
  }
}
