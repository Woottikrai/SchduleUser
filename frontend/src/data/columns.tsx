import type { ColumnsType } from "antd/es/table";
import { Row, Col, Avatar, Tag } from "antd";
import { IUser, IUserTable } from "../models/IUser";

export const columns: ColumnsType<any> = [
  {
    title: "Name",
    dataIndex: "columnName",
    key: "columnName",
    align: "center",

    render: (_, rc) => {
      return (
        <div className="ms-10">
          <Row className="flex align-middle justify-start">
            <Col>
              <Avatar src={rc.columnName.image} className="" size={50} />
            </Col>
            <Col className="ms-3 text-start">
              <p className="text-black tracking-wider capitalize text-md font-bold">
                {rc.columnName.name}
              </p>
              <p className="text-gray-600 tracking-wide lowercase text-sm font-thin">
                {rc.columnName.email}
              </p>
            </Col>
          </Row>
        </div>
      );
    },
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    align: "center",
    className:
      "text-gray-600 tracking-wide lowercase text-sm font-normal capitalize",
  },
  {
    title: "Social",
    dataIndex: "social",
    key: "social",
    align: "center",
    render: (_, rc: Pick<IUserTable, "social">) => {
      //
      const Colors: Array<string> = [
        "geekblue",
        "green",
        "volcano",
        "skyblue",
        "gray",
        "orange",
        "pink",
        "purple",
        "black",
        "red",
        "yellow",
      ];
      const randomColorTag1: string =
        Colors[Math.floor(Math.random() * Colors.length)];
      const randomColorTag2: string =
        Colors[Math.floor(Math.random() * Colors.length)];

      return (
        <div className="flex justify-center align-middle ">
          <Tag color={randomColorTag1} key={rc.social.tel}>
            <p>{rc.social.tel}</p>
          </Tag>
          <Tag color={randomColorTag2} key={rc.social.idline}>
            <p>{rc.social.idline}</p>
          </Tag>
        </div>
      );
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    align: "center",
    render: (_, rc, index) => {
      return (
        <div className="flex justify-center align-middle">
          {rc.action.edit}
          <span className="mx-2"></span>
          {rc.action.delete}
        </div>
      );
    },
  },
];
