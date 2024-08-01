import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Hero from "./Hero";
import WeekSpecials from "./WeekSpecials";
import Testimonials from "./Testimonials";
import OurStory from "./OurStory";
import { meals, customers } from "data";
const Home = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Helmet>
        <title>{t("title")}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Helmet>
      <Hero />
      <WeekSpecials meals={meals} />
      <Testimonials customers={customers} />
      <OurStory />
    </>
  );
};
export default Home;
