import { FC } from "react";

import ArrowRight from "~/common/icons/arrow-right";
import Flame from "~/common/icons/flame";

import defaultCardImg from "~/common/assets/default-card.png";
import style from "./styles/light.module.scss";

interface IReviewCard {
  image: string;
  title: string;
  comment: string;
  user: string;
  rotate?: string;
  zIndex?: string;
  alt?: boolean;
}

const ReviewCard: FC<IReviewCard> = ({
  image,
  title,
  comment,
  user,
  rotate,
  zIndex,
  alt,
}) => {
  return (
    <div
      style={{ rotate: `${rotate}deg`, zIndex: `${zIndex}` }}
      className={style.cardWrapper}
    >
      <img
        src={`${image || defaultCardImg}`}
        className={style.cardImage}
        alt={`car-image-${user}`}
        loading="lazy"
      />
      <div className={style.infoWrapper}>
        <div className={style.infoDescription}>
          <div className={`${style.title} ${alt ? style.altTitle : ""}`}>
            <span>{title}</span>
            {alt && <ArrowRight />}
            {alt && (
              <>
                <div className={style.flame1}>
                  <Flame width={30} />
                </div>
                <div className={style.flame2}>
                  <Flame width={30} />
                </div>
                <div className={style.flame3}>
                  <Flame width={30} />
                </div>
              </>
            )}
          </div>
          <span className={style.comment}>{comment}</span>
        </div>
        <span className={style.user}>{`- ${user}`}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
