import { Content } from "antd/es/layout/layout";
import React from "react";
import HideOnScroll from "../../utils/hideOnScroll";
import Navbar from "./header";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <Content>{children}</Content>
    </div>
  );
}
