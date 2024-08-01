import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { links, socials, contacts } from "data";
import "./index.css";
const Layout = () => {
  return (
    <div className="layout-container">
      <Header links={links} />
      <main id="home">
        {" "}
        <Outlet />
      </main>
      <Footer links={links} socials={socials} contacts={contacts} />
    </div>
  );
};
export default Layout;
