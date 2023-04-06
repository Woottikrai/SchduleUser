import { Input } from "antd";
import React from "react";
type InputTitleProps = {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
};
export default function InputLastname({
  type,
  className,
  placeholder,
  name,
  value,
  onChange,
  autoComplete,
}: InputTitleProps) {
  return (
    <div className="input-lastname">
      <Input
        {...{
          type,
          className,
          placeholder,
          name,
          value,
          onChange,
          autoComplete,
        }}
      />
    </div>
  );
}
