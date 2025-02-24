import carDefault from "~/common/assets/default-card.png";

import style from "./styles/light.module.scss";
import { useState } from "react";
import ArrowRight from "~/common/icons/arrow-right";

const tableData = [
  {
    keyRow: "100+ автомобилей",
    title: "Продажа премиальных автомобилей из наличия",
    description:
      "В нашем каталоге представлен широкий выбор автомобилей — от стандартных до премиальных моделей, чтобы удовлетворить любые предпочтения и запросы клиентов.",
  },
  {
    keyRow: "2300+ клиентов",
    title: "Комплексный подбор автомобилей под заказ",
    description:
      "Вы оставляете заявку или связываетесь с нами, указываете параметры авто и вносите задаток. Мы находим подходящий автомобиль в Европе и организуем его доставку после вашего одобрения.",
  },
  {
    keyRow: "8000+ заказов",
    title: "Покупка автомобиля по конфигуратору",
    description:
      "Вы собираете нужную комплектацию на официальных сайтах BMW, Porsche или Mercedes и отправляете нам через форму. После внесения 10% предоплаты мы заказываем автомобиль с завода и доставляем его.",
  },
  {
    keyRow: "500+ городов",
    title: "Собственная логистика",
    description:
      "Мы имеем лицензию на перевозку автомобилей, что позволяет нам самостоятельно контролировать весь процесс доставки без участия посредников.",
  },
];

const carData = [
  {
    url: carDefault,
  },
  {
    url: carDefault,
  },
  {
    url: carDefault,
  },
  {
    url: carDefault,
  },
];

const Service = () => {
  const [hoveredRow, setHoveredRow] = useState<number>(1);
  return (
    <div id="Услуги" className={style.service}>
      <div className={style.sectionContainer}>
        <div className={style.titleContainer}>
          <span>[ Наши автомобили ]</span>
          <span>Наши услуги</span>
        </div>
        <div className={style.serviceContainer}>
          <div className={style.serviceTable}>
            {tableData.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`${style.tableRow}`}
                  onMouseEnter={() => setHoveredRow(i + 1)}
                  onMouseLeave={() => setHoveredRow(1)}
                >
                  <div className={style.table}>
                    <span
                      className={`${style.keyRow} ${
                        hoveredRow == i + 1 ? style.active : style.disable
                      }`}
                    >
                      {e.keyRow}
                    </span>
                    <div className={`${style.desctiptionContainer}`}>
                      <span>{e.title}</span>
                      <span>{e.description}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={style.serviceRightSection}>
            <div className={style.cardWrapper}>
              {carData.map((e, i) => {
                return (
                  <div
                    key={i}
                    style={{
                      zIndex: i * 10,
                      top: `${i * 40}px`,
                      display: hoveredRow === i + 1 ? "block" : "none",
                    }}
                    className={style.cardInfo}
                  >
                    <div
                      className={style.backgrundCard}
                      style={{ backgroundImage: `url(${e.url})` }}
                    ></div>
                    <div className={style.cardDescription}>
                      <span>[ Выбери свой авто ]</span>
                      <span>
                        Нужна помощь в подборе автомобиля или остались вопросы?
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={style.serviceButton}>
              <span>Оставить заявку</span>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
