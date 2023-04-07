import React from "react";
import * as ApiUser from "../../service/API/UserApi";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";
import { delay, wait } from "../../utils/wait";
import { useParams } from "react-router-dom";

import FormEditUser from "../../components/form/editUserForm";
export default function EditUser() {
  const fileInputRef = React.useRef<HTMLInputElement | any>();
  const [loadingButton, setLoadingButton] = React.useState(false as boolean);
  const [inputUser, setInputUser] = React.useState({} as IUser);
  const [preview, setPreview] = React.useState<string | any>();
  const [inputImage, setInputImage] = React.useState<File>();
  const [error, setError] = React.useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputUser((prevItem: any) => {
      return { ...prevItem, [e.target.name]: e.target.value };
    });
  };

  const handleButtonImage = (e: React.FormEvent) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    const file = e.target.files[0];
    file && setInputImage(file);
  };

  const handleClickImage = () => {
    setPreview(null);
  };

  const getValueUser = async (id?: string | number) => {
    const data = await ApiUser.GetId(id);

    if (data) {
      setInputUser({
        email: data.data.email,
        firstname: data.data.name?.split(" ")[0],
        lastname: data.data.name?.split(" ")[1],
        idline: data.data.idline,
        image: data.data.image,
        position: data.data.position,
        tel: data.data.tel,
        password: data.data.password,
      });
    }
  };

  const handleClick = async () => {
    try {
      setLoadingButton(true);
      setTimeout(() => {
        setLoadingButton(false);
      }, 3000);

      inputUser.name = `${inputUser.firstname} ${inputUser.lastname}`;
      inputUser.image = `${inputUser.image}`;
      // inputUser.name = "thanawat ";
      const resData: IUser = {
        email: inputUser.email,
        idline: inputUser.idline,
        image: inputUser.image,
        password: inputUser.password,
        position: inputUser.position,
        tel: inputUser.tel,
        name: inputUser.name,
      };

      console.log(resData);

      const data = await ApiUser.Update(Number(id), resData);

      setError("");
    } catch (error) {
      alert(error);
      console.error("❌ Error", error);
      setError("Something went wrong");
    } finally {
      setTimeout(() => {
        navigate("/userList");
      }, 3000);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    if (inputImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(inputImage);
      reader.onload = () => {
        inputUser.image = reader.result;
      };
    } else {
      setPreview(null);
    }

    getValueUser(id);
  }, [inputImage]);

  return (
    <div className="container max-w-5xl shadow-xl rounded-xl mx-auto mt-20">
      <FormEditUser
        fileInputRef={fileInputRef}
        preview={preview}
        onChangeImage={handleChangeImage}
        onChangeInputEmail={handleChange}
        onChangeInputFirstname={handleChange}
        onChangeInputLastname={handleChange}
        onChangeInputTel={handleChange}
        onChangeSelectPosition={handleChange}
        onClickButton={handleClick}
        onClickButtonImage={handleButtonImage}
        onClickImage={handleClickImage}
        onChangeInputConfirmPassword={() => {}}
        onChangeInputIdline={handleChange}
        onChangeInputPassword={handleChange}
        onSubmit={handleSubmit}
        valueSelectPosition={inputUser.position}
        valueInputEmail={inputUser.email}
        valueInputFirstname={inputUser.firstname}
        valueInputImage={""}
        valueInputLastname={inputUser.lastname}
        valueInputeTel={inputUser.tel}
        valueInputConfirmPassword={inputUser.confirmpassword}
        valueInputIdline={inputUser.idline}
        valueInputPassword={inputUser.password}
        loading={loadingButton}
        className="flex"
      />
    </div>
  );
}
