import { Fragment, useEffect, useState } from "react";
import Logo from "~/modules/home-module/ui/components/logo";

import ArrowLink from "~/common/icons/arrow-link";
import Flame from "~/common/icons/flame";
import BurgerMenu from "~/common/icons/burger-menu";
import ArrowDown from "~/common/icons/arrow-down";
import Cross from "~/common/icons/cross";

import style from "./styles/light.module.scss";

const linkList = [
  "Услуги",
  "Каталог",
  "Отзывы",
  "Контакты",
  "+7 495 888-76-54",
  "Оставить заявку",
];

const isCurrentList = (
  linkList: string[],
  i: number,
  choice: [unknown, unknown]
) => {
  return linkList.length !== i + 1 ? choice[0] : choice[1];
};

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menu]);

  const filterList = linkList.filter((e) => !e.includes("+"));

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
          {filterList.map((e, i) => {
            return (
              <Fragment key={`${e}-${i}`}>
                <li
                  className={
                    isCurrentList(filterList, i, [
                      style.regularList,
                      style.lastList,
                    ]) as string
                  }
                >
                  <a href={`#${e}`}>
                    {
                      isCurrentList(filterList, i, [
                        e,
                        <>
                          <p>{e}</p>
                          <ArrowLink />
                        </>,
                      ]) as React.ReactNode | string
                    }
                  </a>
                </li>
                <>
                  {
                    isCurrentList(filterList, i, [
                      <></>,
                      <>
                        <div className={style.flame1}>
                          <Flame width={15} />
                        </div>
                        <div className={style.flame2}>
                          <Flame width={10} />
                        </div>
                        <div className={style.flame3}>
                          <Flame width={19} />
                        </div>
                        <div className={style.flame4}>
                          <Flame width={29} />
                        </div>
                      </>,
                    ]) as React.ReactNode | string
                  }
                </>
              </Fragment>
            );
          })}
        </ul>
        <div
          onClick={() => setMenu((prev) => !prev)}
          className={style.burgerMenu}
        >
          {menu ? <Cross /> : <BurgerMenu />}
        </div>
        {menu && (
          <div
            onClick={(e) =>
              e.target === e.currentTarget && setMenu((prev) => !prev)
            }
            className={style.burgerMenuContainer}
          >
            <ul className={style.burgerBody}>
              {linkList.map((e, i) => {
                return (
                  <Fragment key={i}>
                    <li
                      className={
                        isCurrentList(linkList, i, [
                          style.regularList,
                          style.lastList,
                        ]) as string
                      }
                      onClick={() => setMenu((prev) => !prev)}
                    >
                      <a
                        href={`${
                          e.includes("+")
                            ? `tel:${e.replace(/ /g, "").replace(/-/g, "")}`
                            : `#${e}`
                        }`}
                      >
                        {
                          isCurrentList(linkList, i, [
                            e,
                            <>
                              <p>{e}</p>
                              <ArrowDown />
                              <div className={style.flame1}>
                                <Flame width={11} />
                              </div>
                              <div className={style.flame3}>
                                <Flame width={11} />
                              </div>
                              <div className={style.flame4}>
                                <Flame width={11} />
                              </div>
                            </>,
                          ]) as React.ReactNode | string
                        }
                      </a>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
