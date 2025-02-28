import { FC } from "react";

import LogoIMG from "~/common/assets/logo.png";
import style from "./styles/light.module.scss";

interface Logo {
  widthImg?: string;
  textSize?: string;
}

const Logo: FC<Logo> = ({ widthImg, textSize }) => {
  return (
    <div className={style.logoWrapper}>
      <img src={LogoIMG} width={`${widthImg}px`} alt="Lali Motors Logo" />
      <span style={{ fontSize: `${textSize}px` }} className={style.logoText}>
        LALI MOTORS
      </span>
    </div>
  );
};

export default Logo;
