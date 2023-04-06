import React from "react";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import "./inputImage.css";
type InputImageProps = {
  name: string;
  preview?: string;
  onClickImage: any;
  onClickButton: React.FormEvent | any;
  id: string;
  fileInputRef: HTMLInputElement | any;
  type: string;
  accept: string;
  value?: string;
  alt: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
};
export default function InputImage({
  preview,
  onClickImage,
  onClickButton,

  fileInputRef,
  type,
  accept,
  value,
  alt,
  onChange,
  className,
}: InputImageProps) {
  return (
    <div className={`${className}`}>
      {preview ? (
        <img
          src={preview}
          alt={alt}
          className="Image object-cover"
          onClick={onClickImage}
        />
      ) : (
        <button className="buttonImage bg-gray-100" onClick={onClickButton}>
          <UserOutlined
            style={{
              fontSize: "5rem",
            }}
          />
        </button>
      )}
      <input
        type={type}
        className="hidden"
        ref={fileInputRef}
        accept={accept}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
