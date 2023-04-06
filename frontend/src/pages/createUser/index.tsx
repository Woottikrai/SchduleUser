import React from "react";
import Form from "../../components/form/createUserForm";
import * as ApiUser from "../../service/API/UserApi";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../models/IUser";
import { delay, wait } from "../../utils/wait";
export default function CreateUser() {
  const fileInputRef = React.useRef<HTMLInputElement | any>();
  const [loadingButton, setLoadingButton] = React.useState(false as boolean);
  const [inputUser, setInputUser] = React.useState({} as IUser);
  const [preview, setPreview] = React.useState<string | any>();
  const [inputImage, setInputImage] = React.useState<File>();
  const [error, setError] = React.useState("");
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

  const handleClick = async () => {
    try {
      setLoadingButton(true);
      setTimeout(() => {
        setLoadingButton(false);
      }, 3000);

      inputUser.name = `${inputUser.firstname} ${inputUser.lastname}`;
      // const data = await ApiUser.Post(inputUser);
      // console.log(data);
      // console.log(inputUser);

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

  const handleReset = async () => {
    setInputUser({
      email: "",
      firstname: "",
      fullname: "",
      idline: "",
      image: "",
      lastname: "",
      password: "",
      confirmpassword: "",
      position: "",
      tel: "",
    });

    setPreview(null);
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
  }, [inputImage]);

  return (
    <div className="container max-w-5xl shadow-xl rounded-xl mx-auto mt-20">
      <Form
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
        onClickReset={handleReset}
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
