import type { ColumnsType } from "antd/es/table";
import { Row, Col, Avatar } from "antd";
import { IUser } from "../models/IUser";

export const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "columnName",
    key: "columnName",
    align: "center",
    render: (_, rc, index) => {
      return (
        <Row key={rc.index}>
          <Col span={""}>
            <Avatar src={rc.columnName.image} />
          </Col>
          <Col span={""}>
            <p>{rc.columnName.name}</p>
            <p>{rc.columnName.email}</p>
          </Col>
        </Row>
      );
    },
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    align: "center",
  },
  { title: "Status", dataIndex: "status", key: "status", align: "center" },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "center",
  },
  {},
];
