import { SizeType } from "antd/es/config-provider/SizeContext";

export default interface ISettingTime {
  id: number;
  image: string;
  alt: string;
  format: string;
  width: number;
  height: number;
  size: SizeType;
}
