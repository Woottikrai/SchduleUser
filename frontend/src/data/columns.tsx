import type { ColumnsType } from "antd/es/table";
import * as User from "../models/IUser";

export const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "columnName",
    key: "columnName",
    render: (_, { columnName }) => {
      return (
        <>
          {columnName.map((it: User.IUserName) => {
            return <div>{}</div>;
          })}
        </>
      );
    },
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Tel",
    dataIndex: "tel",
    key: "tel",
  },
];
