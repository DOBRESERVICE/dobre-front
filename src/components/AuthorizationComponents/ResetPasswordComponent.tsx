"use client";
import TextField from "@mui/material/TextField";
import "./authorizationStyle.css";
import { useState } from "react";
import { Button } from "@mui/material";

export const ResetPasswordComponent = () => {
  const [isSavePass, setIsSavePass] = useState(false);

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
