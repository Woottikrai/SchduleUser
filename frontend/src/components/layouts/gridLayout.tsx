import React from "react";
import ICreateder from "../../models/ICreateder";
import { IUser } from "../../models/IUser";
type GridLayoutProps<T> = {
  className?: string;
  items: Array<T>;
  renderItem: (itemProps: {
    item: T;
    idx: number;
    key: string | number;
    array: Array<T>;
  }) => React.ReactNode;
  emptyList?: React.ReactNode;
};
export default function GridLayout({
  className,
  items,
  renderItem,
}: GridLayoutProps<any>) {
  return (
    <div className={`${className}`}>
      {items?.map((item, idx, array) => {
        return (
          <React.Fragment key={item.id}>
            {renderItem({ item, idx, array, key: item.id })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
