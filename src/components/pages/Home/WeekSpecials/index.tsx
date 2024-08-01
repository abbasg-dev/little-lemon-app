import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import * as ROUTES from "constants/routes";
import MealCard from "components/pages/Home/MealCard";
import { Meals } from "interfaces/main.model";
import "./WeekSpecials.css";
type SpecialsProps = {
  meals: Meals[];
};
const WeekSpecials: React.FC<SpecialsProps> = (props: SpecialsProps) => {
  const { t } = useTranslation("common");
  const { meals } = props;
  return (
    <section className="container grid week-specials" id="menu">
      <div className="week-specials-header">
        <h2>{t("week-specials.specials")}!</h2>
        <HashLink className="button-primary" to={`/#${ROUTES.MENU}`}>
          {t("week-specials.menu")}
        </HashLink>
      </div>
      {meals.map((meal, index) => (
        <MealCard key={index} meal={meal} />
      ))}
    </section>
  );
};
export default WeekSpecials;
