import * as User from "../models/IUser";
import { DataType } from "../pages/testPage";

export const users: Array<DataType> = [
  {
    name: "Thanawat Launakorn",
    address: "dfe",
    age: 22,
  },

  {
    name: "Jame John",
    address: "dfe",
    age: 22,
  },
];

export const dataSource: any = [
  {
    key: "1",
    position: "frontend developer",
    status: "online",
    columnName: {
      name: "Thanawat Launakorn",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RWHO_ItDM66Uol3WboX1tlgVGJjxRfM_uA&usqp=CAU",
      email: "@testgmail.co1m",
    },
  },
  {
    key: "2",
    position: "backend developer",
    status: "offline",
    columnName: {
      name: "Thanawat Launakorn",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-RWHO_ItDM66Uol3WboX1tlgVGJjxRfM_uA&usqp=CAU",
      email: "@testgmail.com",
    },
  },
];
