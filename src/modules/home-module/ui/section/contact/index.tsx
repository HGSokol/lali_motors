import ContactForm from "~/modules/home-module/ui/components/contact-form";

import Flame from "~/common/icons/flame";

import style from "./styles/light.module.scss";

const Contact = () => {
  return (
    <div id="Контакты" className={style.reviews}>
      <div className={style.sectionContainer}>
        <div className={style.infoWrapper}>
          <span>[ Свяжитесь с нами ]</span>
          <div>
            <span>Наши контакты</span>
            <div className={style.flame1}>
              <Flame width={55} opacity={0.8} />
            </div>
            <div className={style.flame2}>
              <Flame width={55} opacity={0.8} />
            </div>
            <div className={style.flame3}>
              <Flame width={55} opacity={0.8} />
            </div>
          </div>
          <span>
            Остались вопросы? Мы всегда готовы помочь и предоставить все нужные
            ответы!
          </span>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
