import React from "react";
import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";
import { Links, Socials, Contacts } from "interfaces/main.model";
import Images from "assets/images";
import "./footer.css";
type FooterProps = {
  links?: Links[];
  socials?: Socials[];
  contacts?: Contacts[];
};
const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { t } = useTranslation("common");
  const { links, socials, contacts } = props;
  return (
    <footer className="site-footer">
      <img
        className="site-footer-logo"
        src={Images.LOGO_2}
        alt="Little Lemon"
      />
      <nav className="site-footer-nav">
        <h4>{t("footer.sitemap")}</h4>
        <ul>
          {links?.map((link, index) => (
            <li key={index}>
              <HashLink to={link.path}>{t(`links.${link.name}`)}</HashLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-footer-contact">
        <h4>{t("footer.contact-us")}</h4>
        <address>
          {contacts?.map((contact, index) => (
            <p key={index}>
              <contact.icon /> {contact.info}
            </p>
          ))}
        </address>
      </div>
      <div className="site-footer-social">
        <h4>{t("footer.connect")}</h4>
        {socials?.map((social, index) => (
          <a
            key={index}
            href={`https://www.${social.name}.com`}
            target="_blank"
            rel="noreferrer"
          >
            <social.icon />
          </a>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
