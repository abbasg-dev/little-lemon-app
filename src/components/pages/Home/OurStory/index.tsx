import { useTranslation } from "react-i18next";
import Images from "assets/images";
import "./OurStory.css";
const OurStory = () => {
  const { t } = useTranslation("common");
  return (
    <section className="container grid our-story" id="about">
      <div className="our-story-description">
        <h2>{t("our-story.title")}</h2>
        <p>{t("our-story.desc")}</p>
      </div>
      <div className="our-story-chefs">
        <img src={Images.BANNER_2} alt="Chef James" />
        <img src={Images.BANNER_3} alt="Chef Daniel" />
      </div>
    </section>
  );
};
export default OurStory;
