import React from "react";
import { Space, Table, Tag, Row, Col, Avatar } from "antd";
import type { ColumnsType } from "antd/es/table";
import { users } from "../../data/users";

export interface DataType {
  key?: string;
  name: string;
  age: number;
  address: string;
  tags?: Array<Pick<DataType, "name" | "address" | "age">>;
  // [{name: '', address: '', age: ''}]
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, rc) => {
      // <>
      //   {rc.tags?.map((it) => {
      //     return <div></div>;
      //   })}
      // </>
      const name = rc.name;
      return (
        <Row>
          <Col span={""}>
            <Avatar src={""} />
          </Col>
          <Col span={""}>
            <p>{name}</p>
            <p>dfeadfe</p>
          </Col>
        </Row>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: [
      {
        name: "dfe",
        address: "",
        age: 0,
      },
    ],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={users} />;

export default App;
