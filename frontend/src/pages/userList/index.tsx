import React from "react";
import { Button } from "antd";
import Table from "../../components/tableComponent";
import "./userList.css";
import { UserDeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { columns } from "../../data/columns";
import * as ApiUser from "../../service/API/UserApi";
import { IUser, IUserTable } from "../../models/IUser";
import { PlusOutlined, CloudDownloadOutlined } from "@ant-design/icons";

import SearchUser from "../../components/input/searchUser";

export default function UserList() {
  const [initialUsers, setUsers] = React.useState([] as Array<IUser>);
  const navigate = useNavigate();
  const handleEditUser = (idx?: number) => {
    navigate(`${idx}/EditUser`);
  };

  const handleDelete = async (idx?: number) => {
    window.location.reload();
    await ApiUser.Delete(idx);
  };

  const handleAddUser = () => {
    navigate("/createUser");
  };
  const dataTable = initialUsers.map((item: IUserTable) => {
    return {
      ...item,
      columnName: { name: item.name, image: item.image, email: item.email },

      social: {
        tel: item.tel,
        idline: item.idline,
      },
      action: {
        edit: (
          <button
            className="bg-transparent border-0 text-lg cursor-pointer text-blue-500"
            onClick={() => handleEditUser(item.id)}
          >
            <EditOutlined />
          </button>
        ),
        delete: (
          <button
            className="bg-transparent border-0 text-lg cursor-pointer text-red-500"
            onClick={() => handleDelete(item.id)}
          >
            <UserDeleteOutlined />
          </button>
        ),
      },
    };
  });

  console.log(dataTable);

  React.useEffect(() => {
    (async () => {
      const { data } = await ApiUser.Get();
      setUsers(data);
    })();
  }, []);
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex justify-between">
        <span className="text-3xl tracking-wide font-semibold uppercase text-gray-900">
          Users
        </span>
        <div>
          <Button onClick={() => {}} size="middle">
            <CloudDownloadOutlined />
            Import
          </Button>
          <span className="mx-2"></span>
          <Button
            onClick={handleAddUser}
            type="primary"
            className=""
            size="middle"
          >
            <PlusOutlined /> Add user
          </Button>
        </div>
      </div>
      {/* card layout grid-cols-3 */}
      <div></div>
      {/* SearchUser */}
      <SearchUser onChange={() => {}} type="text" value="" className="" />
      <Table
        className=" mx-auto text-center shadow-md mt-10"
        columns={columns}
        dataSource={dataTable}
      />
    </div>
  );
}
