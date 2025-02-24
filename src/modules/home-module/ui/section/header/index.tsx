import Logo from "~/modules/home-module/ui/components/logo";

import ArrowLink from "~/common/icons/arrow-link";
import Flame from "~/common/icons/flame";

import style from "./styles/light.module.scss";
import BurgerMenu from "~/common/icons/burger-menu";

const linkList = ["Услуги", "Каталог", "Отзывы", "Контакты", "Оставить заявку"];

const isCurrentList = (
  linkList: string[],
  i: number,
  choice: [unknown, unknown]
) => {
  return linkList.length !== i + 1 ? choice[0] : choice[1];
};

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.sectionContainer}>
        <div className={style.leftSide}>
          <Logo widthImg="38" />
          <a href="tel:+74958887654" className={style.phone}>
            +7 495 888-76-54
          </a>
        </div>
        <ul className={style.rightSide}>
          {linkList.map((e, i) => {
            return (
              <>
                <li
                  key={i}
                  className={
                    isCurrentList(linkList, i, [
                      style.regularList,
                      style.lastList,
                    ]) as string
                  }
                >
                  <a href={`#${e}`}>
                    {
                      isCurrentList(linkList, i, [
                        e,
                        <>
                          <p>{e}</p>
                          <ArrowLink />
                          <div className={style.flame1}>
                            <Flame width={10} />
                          </div>
                          <div className={style.flame2}>
                            <Flame width={10} />
                          </div>
                          <div className={style.flame3}>
                            <Flame width={10} />
                          </div>
                          <div className={style.flame4}>
                            <Flame width={10} />
                          </div>
                        </>,
                      ]) as React.ReactNode | string
                    }
                  </a>
                </li>
              </>
            );
          })}
        </ul>
        <BurgerMenu className={style.burgerMenu} />
      </div>
    </div>
  );
};

export default Header;
