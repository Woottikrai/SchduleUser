import "./cardBooking.css";
import { Avatar } from "antd";
type CardProps = {
  className?: string;
  id?: string | number;
  name?: string;
  email?: string;

  position: string;
  image: string;
};
export default function CardBooking({
  className,
  name,

  image,
  position,
  id,
}: CardProps) {
  return (
    <div className={`${className}`}>
      <div className="flex justify-between align-middle">
        <Avatar src={image} size={50} />
        <h1 className="text-xs font-bold text-black tracking-tight mb-1 relative left-2 top-2">
          {name}
        </h1>
      </div>
      <div className="my-5"></div>
      <span className="text-xs font-normal text-blue-600 tracking-wider uppercase">
        {position}
      </span>
    </div>
  );
}
