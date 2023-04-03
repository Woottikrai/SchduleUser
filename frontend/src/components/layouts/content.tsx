import React from "react";

type ContentProps = {
  children: React.ReactNode;
};

export default function content({ children }: ContentProps) {
  return <div>{children}</div>;
}
