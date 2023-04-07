import React from "react";
import { Input } from "antd";
type InputTitleProps = {
  type: string;
  className?: string;
  placeholder?: string;
  name: string;
  value?: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  autoComplete?: string;
};
export default function InputFirstname({
  type,
  className,
  placeholder,
  name,
  value,
  onChange,
  autoComplete,
}: InputTitleProps) {
  return (
    <div className="input-firstname">
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
