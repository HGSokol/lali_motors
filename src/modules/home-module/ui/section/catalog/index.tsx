import CarCard from "~/modules/home-module/ui/components/car-card";

import ArrowDown from "~/common/icons/arrow-down";
import Flame from "~/common/icons/flame";

import style from "./styles/light.module.scss";

const carData = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 2,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 3,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 4,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 6,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 7,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 8,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 9,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
];

const Catalog = () => {
  return (
    <div id="Каталог" className={style.catalogWrapper}>
      <div className={style.catalog}>
        <div className={style.sectionContainer}>
          <div className={style.infoContainer}>
            <div className={style.title}>
              <span>[ Наши автомобили ]</span>
              <span>Каталог</span>
            </div>
            <span className={style.description}>
              Мы подберем автомобиль, который полностью соответствует вашим
              запросам — от эксклюзивных коллекционных и роскошных моделей до
              самых актуальных новинок.
            </span>
          </div>
          <div className={style.catalogContainer}>
            {carData.map((e) => {
              return (
                <CarCard
                  key={e.id}
                  brand={e.brand}
                  model={e.brand}
                  isAvailable={e.isAvailable}
                  price={e.price}
                  year={e.year}
                  photoUrl={e.photoUrl}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={style.loadBlock}>
        <div className={style.content}>
          <span>Загрузить еще каталог</span>
          <ArrowDown />
          <div className={style.flame1}>
            <Flame width={15} />
          </div>
          <div className={style.flame2}>
            <Flame width={15} />
          </div>
          <div className={style.flame3}>
            <Flame width={15} />
          </div>
          <div className={style.flame4}>
            <Flame width={15} />
          </div>
          <div className={style.flame5}>
            <Flame width={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
