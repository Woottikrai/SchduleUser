import React from "react";
import { Button, Space } from "antd";
import "./home.css";
// import { Card } from "antd";
import GridLayout from "../../components/layouts/gridLayout";
import ICreateder from "../../models/ICreateder";
import * as DataCreateder from "../../data/createder";
import Card from "../../components/card";
export default function Home() {
  const [create, setCreate] = React.useState([] as Array<ICreateder>);
  const handleToLocation = () => {
    window.location.href = "https://github.com/Woottikrai/SchduleUser";
  };

  React.useEffect(() => {
    (async () => {
      setCreate(DataCreateder.createder);
    })();
  }, []);
  return (
    <div>
      <div className="bg-gray-200 p-28 w-full bg-animation shadow-sm block">
        <h1 className="fontThai text-7xl text-transparent">ระบบจองเวร</h1>
      </div>
      <section className=" p-10 text-center tracking-normal">
        <h1 className="text-7xl capitalize font-bold mb-5">booking system</h1>
        <p className="text-lg font-normal mb-8">
          Help designers/developers building beautiful products more flexible
          and working with happiness
        </p>
        <Space wrap>
          <Button type="primary" size="large" onClick={handleToLocation}>
            View Code
          </Button>
          <div className="mx-.5"></div>
          <Button size="large">Default Button</Button>
        </Space>
        <GridLayout
          className="container mx-auto grid grid-cols-4 gap-10 mt-24"
          items={create}
          renderItem={({
            item,
          }: {
            item: ICreateder;
            idx: number;
            array: Array<ICreateder>;
            key: string | number;
          }) => {
            return (
              <Card
                id={item.id}
                title={item.name}
                description={item.description}
                position={item.position}
                className="text-start rounded-lg transition-all delay-75 p-5 card cursor-pointer hover:shadow-xl "
              />
            );
          }}
        />
      </section>
    </div>
  );
}
