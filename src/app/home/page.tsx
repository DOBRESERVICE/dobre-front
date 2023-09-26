"use client";
import { ModalComponent } from "@/components/ModalComponent";
import "./home.css";
import { CreateAccountMess } from "@/components/NotificationMessageModal/CreateAccount";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const currentUrl = window.location;
  const router = useRouter();
  const [showModal, setIsShowModal] = useState<boolean>();

  useEffect(() => {
    setIsShowModal(!!currentUrl?.search.split("=")[1]);
  }, [currentUrl]);

  return (
    <>
      <ModalComponent
        open={showModal}
        handleClose={() => {
          router.push("/home");
          setIsShowModal(false);
        }}
      >
        <CreateAccountMess />
        {/* <LinkResetMess /> */}
      </ModalComponent>
    </>
  );
}
