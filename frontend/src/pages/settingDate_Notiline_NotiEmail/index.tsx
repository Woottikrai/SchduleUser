import React from "react";
import { TimePicker, Select, Empty } from "antd";
import dayjs from "dayjs";
import * as ApiNotiEmail from "../../service/API/NotiEmailApi";
import * as ApiNotiLine from "../../service/API/NotiLineApi";
import PacmanLoader from "react-spinners/PacmanLoader";
import line from "../../assets/line_logo.png";
import email from "../../assets/email_logo.png";
import SettingForm from "../../components/form/settingForm";
export default function SettingDate() {
  const format = "HH:mm";
  const [valueNotiLine, setNotiLine] = React.useState<string>("");
  const [valueNotiEmail, setNotiEmail] = React.useState<string>("");

  const onChangeNotiEmail = (time: unknown, timeString: string) => {
    setNotiEmail(timeString);
    ApiNotiEmail.Post(valueNotiEmail);
  };

  const onChangeNotiLine = (time: unknown, timeString: string) => {
    setNotiLine(timeString);
    ApiNotiLine.Post(valueNotiLine);
  };

  return (
    <div className="container mt-10 mx-auto max-w-xl">
      <div className="flex justify-between my-2">
        <h1>setting</h1>
      </div>

      <hr className="bg-gray-200 " />
      <div className="my-10"></div>
      <>
        <SettingForm
          alt="line-image"
          format={format}
          size="large"
          src={line}
          width={255}
          height={255}
          onChange={onChangeNotiLine}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-center h-96 text-sm w-full mx-auto p-2.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <div className="my-5"></div>
        <SettingForm
          alt="email-image"
          format={format}
          size="large"
          src={email}
          width={255}
          height={255}
          onChange={() => onChangeNotiEmail}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-center h-96 text-sm w-full mx-auto p-2.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </>
    </div>
  );
}
