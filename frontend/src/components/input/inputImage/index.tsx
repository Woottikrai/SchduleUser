import React from "react";
type InputImageProps = {
  preview?: string;
  onClickImage: any;
  onClickButton: React.FormEvent | any;
  icon?: IconDefinition;
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
  icon,
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
        <button
          className="buttonImage bg-gray-200"
          onClick={onClickButton}
        ></button>
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
