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
export default function InputTel({
  id,
  type,
  className,
  placeholder,
  name,
  value,
  onChange,
  autoComplete,
}: InputTitleProps) {
  return (
    <div className="input-tel">
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
