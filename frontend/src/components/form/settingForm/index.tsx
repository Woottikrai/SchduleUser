import React from "react";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { DatePickRef } from "antd/es/date-picker/generatePicker/interface";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { DateRange } from "@mui/icons-material";
type SettingFormProps = {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
  format: string;
  onChange: any;
  size: SizeType;
};
export default function SettingForm({
  src,
  className,
  alt,
  width,
  height,
  format,
  onChange,
  size,
}: SettingFormProps) {
  return (
    <div className={`${className}`}>
      {" "}
      <center>
        <img
          src={src}
          alt={alt}
          className="object-cover bg-center"
          width={width}
          height={height}
        />
        <div className="my-10"></div>
        <div className="relative left-0">
          <TimePicker
            defaultValue={dayjs("00" + ":" + "00", format)}
            format={format}
            onChange={onChange}
            size={size}
            className=""
          />
        </div>
      </center>
    </div>
  );
}
