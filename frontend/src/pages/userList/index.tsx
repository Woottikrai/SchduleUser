import React from "react";
import RowTable from "../../components/rowTable";
import Table from "../../components/tablecomponent";
import { columns } from "../../data/columns";
import { users } from "../../data/users";
import * as User from "../../models/IUser";

export default function UserList() {
  const [initialUsers, setUsers] = React.useState([] as Array<User.IUser>);
  React.useEffect(() => {
    setUsers(users);
  }, []);
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

      <Table className="" columns={columns} dataSource={users} />
    </div>
  );
}
