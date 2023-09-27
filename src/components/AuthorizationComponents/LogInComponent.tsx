"use client";
import TextField from "@mui/material/TextField";
import "./authorizationStyle.css";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { useRouter } from "next/navigation";
import {
  eyeOpen,
  eyeClosed,
  googleIcon,
  appleIcon,
  vkIcon,
  yandexIcon,
} from "@/assets/image";

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
              src={eyeOpen}
              alt="open"
              className="passwordIcon"
              onClick={() => setIsPassword(false)}
            />
          ) : (
            <Image
              src={eyeClosed}
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
        onClick={() => router.push("/?authoriz=1")}
      >
        Войти
      </Button>
      <div className="otherLogInLine">
        <hr /> <div className="orWrapper">или</div> <hr />
      </div>
      <div className="otherSiteConnection" style={{ marginLeft: "20px" }}>
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
