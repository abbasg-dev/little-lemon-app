import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Icons from "assets/icons";
import "./scroll-to-top.css";
type Props = { children: React.ReactNode };
const ScrollToTop = (props: Props) => {
  const { children } = props;
  const location = useLocation();
  const [showScroll, setShowScroll] = useState<boolean>(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const checkScrollTop = () => {
    if (window.pageYOffset > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {children}
      <div
        className={`scroll-to-top ${showScroll ? "show" : "hide"}`}
        onClick={scrollToTop}
        style={{ width: 95 }}
      >
        <Icons.SCROLL />
      </div>
    </>
  );
};
export default ScrollToTop;
