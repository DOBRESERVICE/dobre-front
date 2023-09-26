"use client";
import TextField from "@mui/material/TextField";
import "./autorizStyle.css";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import closePass from "@/assets/image/eyeClosed.png";
import openPass from "@/assets/image/eyeOpen.png";
import { Button, Checkbox } from "@mui/material";
import googleIcon from "@/assets/image/google.svg";
import appleIcon from "@/assets/image/apple.svg";
import vkIcon from "@/assets/image/vk.svg";
import yandexIcon from "@/assets/image/yandex.svg";
import { useRouter } from "next/navigation";

export type AutorizPropsType = {
  setActiveStep: Dispatch<SetStateAction<string>>;
};

export const LogInComponent = ({ setActiveStep }: AutorizPropsType) => {
  const [isPassword, setIsPassword] = useState(false);

  const router = useRouter();

  const [isSavePass, setIsSavePass] = useState(false);

  return (
    <div className="wrapper">
      <div className="title">Вход</div>
      <div className="rowContent">
        <p className="text">Новый пользователь?</p>
        <span
          className="blueText"
          style={{ marginLeft: "6px" }}
          onClick={() => setActiveStep("create")}
        >
          Создать учетную запись
        </span>
      </div>
      <div className="inputWrapper">
        <TextField
          id="outlined-basic"
          label="Телефон или Email"
          variant="outlined"
          className="inputSyle"
          size="small"
        />
        <div className="passwordWrapper">
          <TextField
            id="outlined-basic"
            label="Пароль"
            type={!isPassword ? "password" : "text"}
            variant="outlined"
            className="inputSyle"
            size="small"
          />
          {isPassword ? (
            <Image
              src={openPass}
              alt="open"
              className="passwordIcon"
              onClick={() => setIsPassword(false)}
            />
          ) : (
            <Image
              src={closePass}
              alt="close"
              className="passwordIcon"
              onClick={() => setIsPassword(true)}
            />
          )}
        </div>
      </div>
      <div className="passActionsWrapper">
        <div className="savePass">
          <Checkbox onChange={() => setIsSavePass(!isSavePass)} /> Запомнить
          пароль
        </div>
        <div className="hidePass" onClick={() => setActiveStep("reset")}>
          Забыли пароль?
        </div>
      </div>
      <Button
        variant="contained"
        className="logInButton"
        onClick={() => router.push("/home?authoriz=1")}
      >
        Войти
      </Button>
      <div className="otherLogInLine">
        <hr /> <div className="orWrapper">или</div> <hr />
      </div>
      <div className="otherSiteConnection">
        <div className="siteConnect">
          <Image src={googleIcon} alt="google" />
        </div>
        <div className="siteConnect">
          <Image src={appleIcon} alt="apple" />
        </div>
        <div className="siteConnect">
          <Image src={vkIcon} alt="vk" />
        </div>
        <div className="siteConnect">
          <Image src={yandexIcon} alt="yandex" />
        </div>
      </div>
    </div>
  );
};