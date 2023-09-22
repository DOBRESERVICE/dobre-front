import { MainLayout } from "@/components/MainLayout";
import DOBRE from "@/assets/image/DOBRE.svg";
import Image from "next/image";
import { LogInComponent } from "@/components/autorizComponents/LogInComponent";
import autorizBanner from "@/assets/image/leftBanner.png";

export default function Autorization() {
  return (
    <MainLayout>
      <div className="autorizationWrapper">
        <div
          className="leftBanner"
          style={{ backgroundImage: `url(${autorizBanner.src}` }}
        >
          <div className="leftBannerTitle">DOBRE</div>
          <div className="leftBannerDescr">
            Легко арендовать и безопасно сдавать
          </div>
        </div>
        <div className="contentWrapper">
          <LogInComponent />
        </div>
        <Image src={DOBRE} alt="DOBRE" className="dobreImage" />
      </div>
    </MainLayout>
  );
}
