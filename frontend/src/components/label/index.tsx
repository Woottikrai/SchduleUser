import React from "react";
type LabelProps = {
  className?: string;
  htmlFor: string;
  label?: string;
};
export default function LabelItem({ className, htmlFor, label }: LabelProps) {
  return (
    <label className={`${className}`} htmlFor={htmlFor}>
      {label}
    </label>
  );
}
