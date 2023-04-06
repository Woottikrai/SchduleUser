import React from "react";
import RowTable from "../../components/rowTableComponent";
import Table from "../../components/tableComponent";
import "./userList.css";
import { columns } from "../../data/columns";

import * as User from "../../models/IUser";
import { dataSource } from "../../data/users";

export default function UserList() {
  const [initialUsers, setUsers] = React.useState([] as Array<User.IUser>);

  return (
    <div className="">
      <div className="flex justify-between">
        <span>Users</span>
        <div>
          <button>Import</button>
          <button>Add user</button>
        </div>
      </div>
      {/* card layout grid-cols-3 */}
      <div></div>
      {/* SearchUser */}

      <Table
        className="max-w-4xl mx-auto text-center shadow-md"
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
}
