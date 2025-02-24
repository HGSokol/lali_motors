import Logo from "../../components/logo";

import insta from "~/common/assets/instagram_3D.png";
import whatsapp from "~/common/assets/whatsapp_3D.png";

import style from "./styles/light.module.scss";

const linkData = ["Главная", "Услуги", "Каталог", "Вопросы", "Контакты"];

const Footer = () => {
  const handleUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={style.reviews}>
      <div className={style.sectionContainer}>
        <div className={style.linkContainer}>
          <Logo widthImg="40" textSize="34" />
          <ul className={style.pageLinkWrapper}>
            {linkData.map((e, i) => {
              return (
                <li key={i} className={style.link}>
                  <a
                    href={`#${e}`}
                    onClick={() => {
                      if (e.includes("Главная")) handleUp();
                    }}
                  >
                    {e}
                  </a>
                  {linkData.length !== i + 1 && <span>/</span>}
                </li>
              );
            })}
          </ul>
          <div className={style.linkPolicy}>[ Политика конфидициальности ]</div>
        </div>
        <div className={style.contactInfoBlock}>
          <div className={style.infoBlock}>
            <div>Телефон</div>
            <div>+7 999 888-76-54</div>
          </div>
          <div className={style.infoBlock}>
            <div>Email</div>
            <div>hello@logoipsum.com</div>
          </div>
        </div>
        <div className={style.contactInfoBlock}>
          <div className={style.infoBlock}>
            <div>Адрес</div>
            <div>Россия, г. Москва</div>
          </div>
          <div className={style.infoBlock}>
            <div>Социальные сети</div>
            <div>
              <div
                style={{
                  backgroundImage: `url(${insta})`,
                  width: "24px",
                  height: "24px",
                }}
              />
              <div
                style={{
                  backgroundImage: `url(${whatsapp})`,
                  width: "24px",
                  height: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div className={style.inc}>
          <span>[ Политика конфидициальности ]</span>
          <span>© 2025</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
