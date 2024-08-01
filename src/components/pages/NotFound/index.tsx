import { useTranslation } from "react-i18next";
import "./NotFound.css";
const NotFound = () => {
  const { t } = useTranslation("common");
  return (
    <div className="page-not-found">
      <h1>404</h1>
      <h2>{t("not-found")}</h2>
    </div>
  );
};
export default NotFound;
