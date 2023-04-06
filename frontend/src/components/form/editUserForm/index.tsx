import React from "react";
import ButtonCPN from "../../button";
import InputConfirmPassword from "../../input/inputConfirmPassword";
import InputEmail from "../../input/inputEmail";
import InputFirstname from "../../input/inputFirstname";
import InputIdLine from "../../input/inputIdline";
import InputImage from "../../input/inputImage";
import InputLastname from "../../input/inputLastname";
import InputPassword from "../../input/inputPassword";
import InputTel from "../../input/inputTel";
import SelectPosition from "../../input/selectPosition";
import LabelItem from "../../label";
type FormProps = {
  className?: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  fileInputRef: HTMLInputElement | any;
  onChangeImage: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputEmail: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputFirstname: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputLastname: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputTel: React.ChangeEventHandler<HTMLInputElement>;
  onChangeSelectPosition: React.ChangeEventHandler<HTMLSelectElement>;
  onChangeInputPassword: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputConfirmPassword: React.ChangeEventHandler<HTMLInputElement>;
  onChangeInputIdline: React.ChangeEventHandler<HTMLInputElement>;
  onClickButtonImage: React.MouseEventHandler<HTMLButtonElement>;
  onClickImage: React.MouseEventHandler<HTMLButtonElement>;
  onClickButton: React.MouseEventHandler<HTMLButtonElement> | any;
  onClickReset?: React.MouseEventHandler<HTMLButtonElement>;
  preview: string;
  valueInputImage?: string;
  valueInputEmail?: string;
  valueInputFirstname?: string;
  valueInputLastname?: string;
  valueInputeTel?: string;
  valueSelectPosition: string;
  valueInputPassword: string;
  valueInputConfirmPassword?: string;
  valueInputIdline: string;
  loading: any;
};
export default function FormEditUser({
  className,
  onSubmit,
  fileInputRef,
  onChangeImage,
  onChangeInputEmail,
  onChangeInputFirstname,
  onChangeInputLastname,
  onChangeInputTel,
  onChangeSelectPosition,
  onChangeInputPassword,
  onChangeInputConfirmPassword,
  onChangeInputIdline,
  onClickButton,
  onClickButtonImage,
  onClickImage,
  onClickReset,
  preview,
  valueInputEmail,
  valueInputFirstname,
  valueInputImage,
  valueInputLastname,
  valueInputeTel,
  valueSelectPosition,
  valueInputPassword,
  valueInputConfirmPassword,
  valueInputIdline,
  loading,
}: FormProps) {
  return (
    <form className={`${className}`} {...{ onSubmit }}>
      <aside className="bg-blue-400 w-1/4 mr-10 rounded-tl-xl rounded-bl-xl">
        <InputImage
          name="image"
          id="image"
          accept="image/*"
          alt="image"
          className="appearance-none px-5 py-10 rounded w-full mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
          fileInputRef={fileInputRef}
          onChange={onChangeImage}
          onClickButton={onClickButtonImage}
          onClickImage={onClickImage}
          type="file"
          preview={preview}
          value={valueInputImage}
        />
      </aside>
      <div className="w-3/4 p-10 ">
        <div className="grid md:grid-cols-1 my-3">
          <div className="grid-tem">
            <LabelItem
              htmlFor="grid-email"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Email"
            />

            <InputEmail
              id="email"
              name="email"
              onChange={onChangeInputEmail}
              type="email"
              autoComplete="off"
              className="border-0 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
              placeholder="Email address"
              value={valueInputEmail}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-1 my-3">
          <div className="grid-tem">
            <LabelItem
              htmlFor="grid-password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Password"
            />

            <InputPassword
              id="password"
              name="password"
              onChange={onChangeInputPassword}
              type="password"
              autoComplete="off"
              className="border-0 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
              placeholder="Password"
              value={valueInputPassword}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-1 my-3">
          <div className="grid-tem">
            <LabelItem
              htmlFor="grid-confirm-password"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Confirm password"
            />

            <InputConfirmPassword
              id="password"
              name="confirmpassword"
              onChange={onChangeInputConfirmPassword}
              type="password"
              autoComplete="off"
              className="border-0 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
              placeholder="Confirm password"
              value={valueInputConfirmPassword}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-2 my-3">
          <div className="grid-item">
            <LabelItem
              htmlFor="grid-first-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Firstname"
            />

            <InputFirstname
              id="firstname"
              name="firstname"
              onChange={onChangeInputFirstname}
              type="text"
              autoComplete="off"
              className="border-0 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
              placeholder="Firstname"
              value={valueInputFirstname}
            />
          </div>

          <div className="grid-item">
            <LabelItem
              htmlFor="grid-last-name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Lastname"
            />
            <InputLastname
              id="lastname"
              name="lastname"
              onChange={onChangeInputLastname}
              type="text"
              autoComplete="off"
              className="border-0 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
              placeholder="Lastname"
              value={valueInputLastname}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-2 my-3">
          <div className="grid-item">
            <LabelItem
              htmlFor="grid-tel"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Phone number (123-456-7890)"
            />

            <InputTel
              id="tel"
              name="tel"
              onChange={onChangeInputTel}
              type="text"
              autoComplete="off"
              className="border-0 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
              placeholder="Phone number"
              value={valueInputeTel}
            />
          </div>

          <div className="grid-item">
            <LabelItem
              htmlFor="grid-id-line"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Id-Line"
            />
            <InputIdLine
              id="idline"
              name="idline"
              onChange={onChangeInputIdline}
              type="text"
              autoComplete="off"
              className="border-0 appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline focus:bg-white focus:border-blue-700"
              placeholder="Id line"
              value={valueInputIdline}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 my-3">
          <div className="grid-item">
            <LabelItem
              htmlFor="grid-position"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              label="Position"
            />
            <SelectPosition
              id="position"
              name="position"
              onChange={onChangeSelectPosition}
              value={valueSelectPosition}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex justify-between mt-12">
          <ButtonCPN
            onClick={onClickButton}
            className="uppercase"
            value="submit"
            type="primary"
            size="large"
            loading={loading}
          />
        </div>
      </div>
    </form>
  );
}
