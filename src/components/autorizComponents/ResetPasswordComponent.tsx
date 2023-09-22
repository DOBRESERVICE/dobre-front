"use client";
import TextField from "@mui/material/TextField";
import "./autorizStyle.css";
import Image from "next/image";
import { useState } from "react";
import { Button, Checkbox } from "@mui/material";
import googleIcon from "@/assets/image/google.svg";
import appleIcon from "@/assets/image/apple.svg";
import vkIcon from "@/assets/image/vk.svg";
import yandexIcon from "@/assets/image/yandex.svg";

export const ResetPasswordComponent = () => {
  const [isSavePass, setIsSavePass] = useState(false);

  console.log("isSavePass", isSavePass);

  return (
    <div className="wrapper">
      <div className="title">Восстановление пароля</div>
      <div className="resetText">
        Введите e-mail адрес на который был зарегистрирован ваш аккаунт и мы
        отправим ссылку для восстановления
      </div>
      <div className="inputWrapper">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="inputSyle"
          size="small"
        />
      </div>
      <Button variant="contained" className="logInButton">
        Получить ссылку
      </Button>
    </div>
  );
};
