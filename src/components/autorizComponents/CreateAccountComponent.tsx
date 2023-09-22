"use client";
import TextField from "@mui/material/TextField";
import "./autorizStyle.css";
import Image from "next/image";
import { useState } from "react";
import closePass from "@/assets/image/eyeClosed.png";
import openPass from "@/assets/image/eyeOpen.png";
import { Button, Checkbox } from "@mui/material";
import googleIcon from "@/assets/image/google.svg";
import appleIcon from "@/assets/image/apple.svg";
import vkIcon from "@/assets/image/vk.svg";
import yandexIcon from "@/assets/image/yandex.svg";
import { ModalComponent } from "@/components/ModalComponent";
// import { CreateAccountMess } from "../notificationMessageModal/createAccount";
import { LinkResetMess } from "../notificationMessageModal/LinkReset";

export const CreateAccountComponent = () => {
  const [isPassword, setIsPassword] = useState(false);

  const [isAccept, setIsAccept] = useState(false);

  const [isGoodPass, setIsGoodPass] = useState(false);

  const [test, setTest] = useState(false);

  return (
    <div className="wrapper">
      <div className="title">Создание аккаунта</div>
      <div className="rowContent">
        <p className="text">Вы уже зарегистрированны?</p>
        <span className="blueText" style={{ marginLeft: "6px" }}>
          Войти
        </span>
      </div>

      <div
        className="otherSiteConnection"
        style={{ justifyContent: "flex-start" }}
      >
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

      <div className="inputWrapper">
        <TextField
          id="outlined-basic"
          label="Email"
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

      <div className="checkLvlPass">
        <div className="checkPassLvl">Уровень сложности пароля</div>
        <div
          className="valuePassLvl"
          style={{ color: `${isGoodPass ? "green" : "red"}` }}
        >
          {isGoodPass ? "Надёжный" : "Не надёжный"}
        </div>
      </div>
      <div className="createWrapperAccept">
        <Checkbox
          onChange={() => setIsAccept(!isAccept)}
          style={{ margin: "0 10px;" }}
        />
        <div className="savePass">
          Я принимаю <span>условия пользовательского соглашения</span>
        </div>
      </div>
      <Button
        variant="contained"
        className="logInButton"
        disabled={!isAccept}
        onClick={() => setTest(true)}
      >
        Создать аккаунт
      </Button>
      <ModalComponent open={test} handleClose={() => setTest(false)}>
        {/* <CreateAccountMess /> */}
        <LinkResetMess />
      </ModalComponent>
    </div>
  );
};
