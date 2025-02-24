import Header from "~/modules/home-module/ui/section/header";
import Preview from "~/modules/home-module/ui/section/preview";
import Catalog from "~/modules/home-module/ui/section/catalog";
import Service from "~/modules/home-module/ui/section/service";
import About from "~/modules/home-module/ui/section/about";
import Reviews from "~/modules/home-module/ui/section/reviews";
import Contact from "~/modules/home-module/ui/section/contact";
import Footer from "~/modules/home-module/ui/section/footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Preview />
      <Catalog />
      <Service />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
