'use client';
import autorizBanner from "@/assets/image/leftBanner.png";
import whiteLogo from "@/assets/image/whiteLogo.svg";
import {LogInComponent} from "@/components/AuthorizationComponents/LogInComponent";
import {CreateAccountComponent} from "@/components/AuthorizationComponents/CreateAccountComponent";
import {ResetPasswordComponent} from "@/components/AuthorizationComponents/ResetPasswordComponent";
import Image from "next/image";
import DOBRE from "@/assets/image/DOBRE.svg";
import {useState} from "react";
import {AuthLayout} from "@/components/authLayout/AuthLayout";

export default function LoginPage() {
    const [activeStep, setActiveStep] = useState("create");

    return (
      <AuthLayout>
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
      </AuthLayout>
    )
}