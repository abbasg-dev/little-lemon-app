import { useTranslation } from "react-i18next";
import Icons from "assets/icons";
import "./BookingForm.css";
const Confirmed = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container confirmed-reservation">
      <Icons.SUCCESS />
      <h2>{t("reservation.confirmed")}!</h2>
      <p>{t("reservation.confirmation-msg")}</p>
    </div>
  );
};
export default Confirmed;
