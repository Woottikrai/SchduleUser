import "./card.css";
import { MoreOutlined } from "@ant-design/icons";
type CardProps = {
  className?: string;
  id?: string | number;
  title: string;
  description: string;
  position: string;
};
export default function CardUserList({
  className,
  title,
  description,
  position,
  id,
}: CardProps) {
  return (
    <div className={`${className}`}>
      <h4 className="text-md font-semibold text-gray-500 tracking-tight mb-1 flex justify-between">
        <div>{title}</div>
        <div>
          <MoreOutlined style={{ fontSize: "1.25rem" }} />
        </div>
      </h4>
      <h1 className="text-5xl font-bold text-black leading-6 my-5">
        {description}
      </h1>
    </div>
  );
}
