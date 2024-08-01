import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { logout } from "store/slices/authSlice";
import { userLogout } from "api/services/user.services";
import { Links } from "interfaces/main.model";
import { useTranslation } from "react-i18next";
import {
  setLanguagePreference,
  getUserInfo,
  clearLocalStorageItems,
} from "helpers/global";
import * as ROUTES from "constants/routes";
import Icons from "assets/icons";
import Images from "assets/images";
import "./header.css";

type HeaderProps = {
  links?: Links[];
};
const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { i18n, t } = useTranslation("common");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { links } = props;
  const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
  const onLanguageClick = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
    setLanguagePreference(newLanguage);
  };
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const userInfo = getUserInfo();
  const logoutFunc = useMutation(userLogout, {
    async onSuccess() {
      clearLocalStorageItems();
      navigate(ROUTES.LOGIN);
    },
  });
  const onLogout = () => {
    dispatch(logout());
    logoutFunc.mutate();
  };
  return (
    <header>
      <nav className="container grid nav-bar">
        <HashLink className="nav-bar-logo" to={ROUTES.MAIN}>
          <img src={Images.LOGO_1} alt="Little Lemon logo" />
        </HashLink>
        <button
          className="nav-bar-hamburger"
          type="button"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          {isNavExpanded ? <Icons.X_MARK /> : <Icons.MENU />}
        </button>
        <ul
          className={isNavExpanded ? "nav-bar-links expanded" : "nav-bar-links"}
        >
          {links?.map((navLink) => (
            <li
              key={navLink.name}
              onClick={() => setIsNavExpanded(false)}
              className="hover-underline-animation"
            >
              {navLink.hashLink ? (
                <HashLink to={navLink.path}>
                  {t(`links.${navLink.name}`)}
                </HashLink>
              ) : (
                <Link to={navLink.path}>
                  {isLoggedIn && userInfo && navLink.name === "login" ? (
                    <div className="user-info">
                      <li>{userInfo?.user?.fullname} </li>
                      <button className="logout-btn" onClick={onLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                      </button>
                    </div>
                  ) : (
                    t(`links.${navLink.name}`)
                  )}
                </Link>
              )}
            </li>
          ))}
          <li onClick={onLanguageClick}>
            {i18n.language === "en" ? "Fr" : "En"}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
