import React from "react";
import { TimePicker, Select, Empty, message } from "antd";
import dayjs from "dayjs";
import * as Api from "../../service/API/Api";
import line from "../../assets/line_logo.png";
import email from "../../assets/email_logo.png";
import SettingForm from "../../components/form/settingForm";
import INotiEmail from "../../models/INotiEmail";
import INotiLine from "../../models/INotiLine";
import SettingScrollLayout from "../../components/layouts/settingScroll";
import ISettingTime from "../../models/ISettingTime";
import _default from "antd/es/time-picker";
export default function SettingDate() {
  const format = "HH:mm";
  const [messageApi, contextHolder] = message.useMessage();
  const [initialSettingTime, setInitialSettingTime] = React.useState([
    {
      id: 1,
      width: 255,
      height: 255,
      alt: "image-email",
      image: line,
      format: "HH:mm",
      size: "large",
    },
    {
      id: 2,
      width: 255,
      height: 255,
      alt: "image-line",
      image: email,
      format: "HH:mm",
      size: "large",
    },
  ] as Array<ISettingTime>);
  const [valueNotiLine, setNotiLine] = React.useState<Omit<INotiLine, "id">>({
    date: "",
  });
  const [valueNotiEmail, setNotiEmail] = React.useState<Omit<INotiEmail, "id">>(
    { date: "" }
  );
  const BASE_URL_NOTILINE = "http://localhost:8080//";
  const BASE_URL_NOTIEMAIL = "http://localhost:8080//";

  const onChangeNotiEmail = (time: unknown, timeString: string) => {
    success("email");
    setNotiEmail({ date: timeString });
    console.log("send email");
    Api.Post<Omit<INotiEmail, "id">>(valueNotiEmail, BASE_URL_NOTIEMAIL);
  };

  const onChangeNotiLine = (time: unknown, timeString: string) => {
    success("line");
    setNotiLine({ date: timeString });
    console.log("send line");
    Api.Post<Omit<INotiLine, "id">>(valueNotiLine, BASE_URL_NOTILINE);
  };

  console.log();

  const success = (ms: string) => {
    messageApi.open({
      type: "success",
      content: <span className="font-bold">{`success setting ${ms}`}</span>,
    });
  };

  return (
    <div className="container mt-10 mx-auto max-w-xl">
      <div className="flex justify-between my-2">
        <h1>setting</h1>
      </div>

      <hr className="" />
      <div className="my-10"></div>
      <SettingScrollLayout
        className=""
        items={initialSettingTime}
        renderItem={({
          item,
          key,
        }: {
          item: ISettingTime;
          key: string | number;
        }) => {
          return (
            <>
              {contextHolder}
              <SettingForm
                alt={item.alt}
                src={item.image}
                format={item.format}
                width={item.width}
                height={item.height}
                size={item.size}
                onChange={item.id === 1 ? onChangeNotiLine : onChangeNotiEmail}
                className="m-10 bg-gray-50 border border-gray-300 text-gray-900 h-96 text-sm w-full mx-auto p-2.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                key={item.id}
              />
            </>
          );
        }}
      />
    </div>
  );
}
