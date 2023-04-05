import React from "react";
type RowTable = {
  className?: string;
  fullname: string;
  email: string;
  position: string;
  image?: string;
  tel?: string;
};
export default function RowTable({
  className,
  fullname,
  email,
  image,
  tel,
  position,
}: RowTable) {
  return (
    <tr
      className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${className}`}
    >
      <td
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          className="w-10 h-10 rounded-full"
          src={image}
          alt={`${fullname} image`}
        />
        <div className="pl-3">
          <div className="text-base font-semibold">{`${fullname}`}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </td>
      <td className="px-6 py-4">{position}</td>
      <td className="px-6 py-4">
        <div className="flex items-center">{tel}</div>
      </td>
      <td className="px-6 py-4">
        <button></button>
        <button></button>
      </td>
    </tr>
  );
}
