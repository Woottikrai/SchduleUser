import React from "react";

import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
export default function Date() {
  const [startDate, setStartDate] = React.useState<any>();
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(typeof `${dayjs(date).format("YYYY-MM-DD")}`);
  };
  const showDate = (date?: string) => {
    // console.log(date);
  };
  showDate(startDate);
  return (
    <div>
      <DatePicker onChange={onChange} />

      {startDate}
    </div>
  );
}
