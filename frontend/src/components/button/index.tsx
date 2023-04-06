import React from "react";
import { Button } from "antd";

type ButtonType = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | any;
  value: string;
  type?: any | string;
  size?: string | any;
  loading?: any;
};
export default function ButtonCPN({
  className,
  onClick,
  value,
  type,
  size,
  loading,
}: ButtonType) {
  return (
    <div>
      <Button {...{ onClick, type, size, loading }} className={`${className}`}>
        {value}
      </Button>
    </div>
  );
}
