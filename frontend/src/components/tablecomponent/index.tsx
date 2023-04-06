import React from "react";
import { IUser } from "../../models/IUser";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
type TableProps<T> = {
  className?: string;
  columns: ColumnsType<T>;
  dataSource: Array<T>;
};
export default function TableComponent({
  className,
  columns,
  dataSource,
}: TableProps<IUser>) {
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      className={`${className}`}
    />
  );
}
