import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import * as ROUTES from "constants/routes";
import { Meals } from "interfaces/main.model";
import Icons from "assets/icons";
import "./MealCard.css";
type MealProps = {
  meal?: Meals;
};
const MealCard: React.FC<MealProps> = (props: MealProps) => {
  const { t } = useTranslation("common");
  const { meal } = props;
  return (
    <article className="meal-card">
      <div className="meal-card-image">
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className="meal-card-header">
        <h3>{t(`week-specials.meal.${meal.name}`)}</h3>
        <span>{meal.price}</span>
      </div>
      <div className="meal-card-body-footer">
        <p>{t(`week-specials.meal.${meal.description}`)}</p>
        <HashLink to={ROUTES.ORDER_ONLINE}>
          {t("week-specials.meal.order")} <Icons.MOTOR_CYCLE />
        </HashLink>
      </div>
    </article>
  );
};
export default MealCard;
