import { Content } from "antd/es/layout/layout";
import React from "react";
import SideBar from "./sidebar";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SideBar>{children}</SideBar>
    </div>
  );
}
