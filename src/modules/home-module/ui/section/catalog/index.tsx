import ArrowDown from "~/common/icons/arrow-down";
import CarCard from "../../components/car-card";
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
    id: 21,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 13,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
  {
    id: 131,
    brand: "Mercedes-Benz",
    model: "BRABUS Timotue G800",
    isAvailable: true,
    price: "32500000",
    year: "2024",
    photoUrl: "",
  },
];
// TODO: добавить flame

const Catalog = () => {
  return (
    <div id="Каталог" className={style.catalog}>
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
      <div className={style.loadBlock}>
        <span>Загрузить еще каталог</span>
        <ArrowDown />
      </div>
    </div>
  );
};

export default Catalog;
