import ContactForm from "../../components/contact-form";
import style from "./styles/light.module.scss";

const Contact = () => {
  return (
    <div id="Контакты" className={style.reviews}>
      <div className={style.sectionContainer}>
        <div className={style.infoWrapper}>
          <span>[ Свяжитесь с нами ]</span>
          <span>Наши контакты</span>
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
