import { FC } from "react";

import Arrow from "~/common/icons/arrow";

import defaultCardImg from "~/common/assets/default-card.png";
import style from "./styles/light.module.scss";

interface ICarCard {
  brand: string;
  model: string;
  year: string;
  price: string;
  isAvailable: boolean;
  photoUrl: string;
}

const CarCard: FC<ICarCard> = ({
  brand,
  model,
  year,
  price,
  isAvailable,
  photoUrl,
}) => {
  return (
    <div className={style.cardWrapper}>
      <div
        style={{
          backgroundImage: `url(${photoUrl || defaultCardImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={style.photoWrapper}
      >
        <span
          className={`${isAvailable ? style.available : style.unavailable}`}
        >
          {isAvailable ? "В наличии" : "Нет в наличии"}
        </span>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.titleInfo}>
          <span>{brand}</span>
          <span>{model}</span>
          <div className={style.link}>
            <Arrow />
          </div>
        </div>
        <div className={style.descriptionWrapper}>
          <div className={style.leftInfo}>
            <span>Год выпуска</span>
            <span>{year}</span>
          </div>
          <div className={style.rightInfo}>
            <span>Цена</span>
            <span>{`${price}₽`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
