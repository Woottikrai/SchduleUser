import React from "react";
type SearchUserProps = {
  className?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  value: string;
};
export default function SearchUser({
  className,
  onChange,
  type,
  value,
}: SearchUserProps) {
  return <input {...{ className, onChange, type, value }}></input>;
}
