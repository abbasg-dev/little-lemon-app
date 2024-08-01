import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import * as ROUTES from "constants/routes";
import Images from "assets/images";
import "./Hero.css";
const Hero = () => {
  const { t } = useTranslation("common");
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1>{t("title")}</h1>
          <h2>{t("hero.area")}</h2>
          <div className="description">{t("hero.desc")}</div>
          <HashLink className="button-primary" to={ROUTES.BOOKING_FORM}>
            {t("hero.reserve")}
          </HashLink>
        </div>
        <img
          className="hero-image"
          src={Images.BANNER_1}
          alt="Restaurant food"
        />
      </div>
    </section>
  );
};
export default Hero;
