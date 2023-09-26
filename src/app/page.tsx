"use client";
import { MainLayout } from "@/components/MainLayout";
import DOBRE from "@/assets/image/DOBRE.svg";
import Image from "next/image";
import { LogInComponent } from "@/components/AuthorizationComponents/LogInComponent";
import autorizBanner from "@/assets/image/leftBanner.png";
import { CreateAccountComponent } from "@/components/AuthorizationComponents/CreateAccountComponent";
import { useState } from "react";
import { ResetPasswordComponent } from "@/components/AuthorizationComponents/ResetPasswordComponent";
import whiteLogo from "@/assets/image/whiteLogo.svg";

export default function Autorization() {
  const [activeStep, setActiveStep] = useState("create");

  return (
    <MainLayout>
      <div className="autorizationWrapper">
        <div className="componentWrapper">
          <div
            className="leftBanner"
            style={{ backgroundImage: `url(${autorizBanner.src}` }}
          >
            <div className="leftBannerTitle">
              <img alt="logo" src={whiteLogo.src} />
            </div>
            <div className="leftBannerDescr">
              Легко арендовать и безопасно сдавать
            </div>
          </div>
          {activeStep === "login" && (
            <LogInComponent setActiveStep={setActiveStep} />
          )}
          {activeStep === "create" && (
            <CreateAccountComponent setActiveStep={setActiveStep} />
          )}
          {activeStep === "reset" && <ResetPasswordComponent />}
        </div>

        <Image src={DOBRE} alt="DOBRE" className="dobreImage" />
      </div>
    </MainLayout>
  );
}
