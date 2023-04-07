import { positions } from "../../../data/position";
import React from "react";
type SelectPositionProps = {
  id: string;
  name: string;
  autoComplete?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  className?: string;
};
export default function SelectPosition({
  id,
  name,
  autoComplete,
  value,
  onChange,
  className,
}: SelectPositionProps) {
  return (
    <select {...{ id, name, autoComplete, value, onChange, className }}>
      <option selected>Choose your position</option>
      {positions.map((item) => {
        return (
          <option value={item.position} key={item.id}>
            {item.position}
          </option>
        );
      })}
    </select>
  );
}
