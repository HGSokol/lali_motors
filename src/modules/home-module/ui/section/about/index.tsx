import BackgroundImg from "~/common/assets/about-car.webp";
import LogoIMG from "~/common/assets/logo.png";
import style from "./styles/light.module.scss";

const About = () => {
  return (
    <div
      className={style.about}
      style={{
        backgroundImage: `url(${BackgroundImg})`,
      }}
    >
      <div className={style.sectionContainer}>
        <div className={style.descriptionContainer}>
          <span>[ О компании ]</span>
          <span>
            Мы — надежная команда, предлагающая широкий выбор автомобилей и
            качественное обслуживание. Помогаем найти идеальный автомобиль и
            гарантируем полную поддержку на каждом этапе.
          </span>
        </div>
        <div className={style.logo}>
          <img className={style.logoImg} src={LogoIMG} alt="Lali Motors Logo" />
          <div className={style.infoContainer}>
            <span>LALI MOTORS</span>
            <span>Основатели компании</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
