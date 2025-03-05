import { useEffect, useState } from "react";

import ArrowRight from "~/common/icons/arrow-right";
import Flame from "~/common/icons/flame";

import CarImg1 from "~/common/assets/car_1.webp";
import CarImg2 from "~/common/assets/car_2.webp";
import CarImg3 from "~/common/assets/car_3.webp";
import CarImg4 from "~/common/assets/car_4.webp";
import style from "./styles/light.module.scss";
import ContactForm from "../../components/contact-form";

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
    url: CarImg1,
  },
  {
    url: CarImg2,
  },
  {
    url: CarImg3,
  },
  {
    url: CarImg4,
  },
];

const Service = () => {
  const [hoveredRow, setHoveredRow] = useState<number>(1);
  const [contactForm, setContactForm] = useState(false);

  useEffect(() => {
    if (contactForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [contactForm]);

  return (
    <div id="Услуги" className={style.service}>
      <div className={style.sectionContainer}>
        <div className={style.titleContainer}>
          <span>[ Наши автомобили ]</span>
          <span>Наши услуги</span>
          <div className={style.flame1}>
            <Flame width={65} opacity={0.8} />
          </div>
          <div className={style.flame2}>
            <Flame width={65} opacity={0.8} />
          </div>
          <div className={style.flame3}>
            <Flame width={65} opacity={0.8} />
          </div>
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
              <a href="#Оставить заявку" onClick={() => setContactForm(true)}>
                Оставить заявку
              </a>
              <ArrowRight />
              <div className={style.flame1}>
                <Flame width={15} />
              </div>
              <div className={style.flame2}>
                <Flame width={15} />
              </div>
              <div className={style.flame3}>
                <Flame width={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {contactForm && (
        <div
          onClick={(e) =>
            e.target === e.currentTarget && setContactForm((prev) => !prev)
          }
          className={style.contactFormContainer}
        >
          <ContactForm setContactForm={setContactForm} />
        </div>
      )}
    </div>
  );
};

export default Service;
