import Flame from "~/common/icons/flame";
import BackgroundImg from "~/common/assets/preview-car.webp";

import style from "./styles/light.module.scss";

const Preview = () => {
  return (
    <div
      className={style.preview}
      style={{
        backgroundImage: `url(${BackgroundImg})`,
      }}
    >
      <div className={style.sectionContainer}>
        <div className={style.titleContainer}>
          <span>Автомобили</span>
          <span>для вашего</span>
          <span>Статуса</span>
          <div className={style.flame1}>
            <Flame width={70} />
          </div>
          <div className={style.flame2}>
            <Flame width={70} />
          </div>
          <div className={style.flame3}>
            <Flame width={70} />
          </div>
          <div className={style.flame4}>
            <Flame width={70} />
          </div>
          <div className={style.flame5}>
            <Flame width={70} />
          </div>
          <div className={style.flame6}>
            <Flame width={70} />
          </div>
          <div className={style.flame7}>
            <Flame width={70} />
          </div>
        </div>
        <div className={style.infoContainer}>
          <div className={style.infoWrapper}>
            <span className={style.infoTitle}>
              Эксклюзивные премиум-автомобили для тех, кто ценит стиль и статус.
              Мы поможем вам выбрать автомобиль, который станет отражением вашей
              личности.
            </span>
            <div className={style.infoLinks}>
              <div className={style.infoLinksContainer}>
                <span className={style.infoLinksTitle}>Instagram</span>
                <span className={style.infoLinksDescription}>
                  [ следи за нами ]
                </span>
              </div>
              <div className={style.infoLinksContainer}>
                <span className={style.infoLinksTitle}>Whatsapp</span>
                <span className={style.infoLinksDescription}>
                  [ свяжись с нами ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
