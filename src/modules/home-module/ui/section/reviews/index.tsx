import ReviewCard from "../../components/review-card";
import image from "~/common/assets/default-card.png";

import style from "./styles/light.module.scss";

const cardData = [
  {
    zIndex: "10",
    rotate: "0",
    image: image,
    title: `Больше отзывов`,
    comment:
      "Здесь вы найдете отзывы наших клиентов. Узнайте, что говорят о нас те, кто уже выбрал качество, стиль и надежность!",
    user: "LALI MOTORS",
  },
  {
    zIndex: "0",
    rotate: "-3",
    image: image,
    title: `Отличный сервис`,
    comment:
      "Спасибо за помощь в выборе автомобиля! Доставили все вовремя, машина в отличном состоянии. Очень доволен покупкой!",
    user: "Даниил Белов",
  },
  {
    zIndex: "20",
    rotate: "0",
    image: image,
    title: `Рекомендую\nданную компанию!`,
    comment:
      "Прекрасный опыт покупки. Машина была доставлена в обещанный срок, все в порядке. Благодарен за внимание к деталям.",
    user: "Кирилл Стрельцов",
  },
  {
    zIndex: "30",
    rotate: "-2",
    image: image,
    title: `Профессионалы своего дела :)`,
    comment:
      "Купила машину и сразу же получила помощь с доставкой. Все четко, без задержек. Очень довольна своей покупкой!",
    user: "Екатерина Минаева",
  },
];

const Reviews = () => {
  return (
    <div id="Отзывы" className={style.reviews}>
      <div className={style.sectionContainer}>
        <span className={style.title}>[ Отзывы ]</span>
        <div className={style.cardContainer}>
          {cardData.map((e, i) => {
            return (
              <ReviewCard
                zIndex={e.zIndex}
                rotate={e.rotate}
                image={e.image}
                title={e.title}
                comment={e.comment}
                user={e.user}
                alt={i == 0}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
