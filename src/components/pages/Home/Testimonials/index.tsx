import { useTranslation } from "react-i18next";
import TestimonialCard from "components/pages/Home/TestimonialCard";
import { Customers } from "interfaces/main.model";
import "./Testimonials.css";
type TestimonialsProps = {
  customers: Customers[];
};
const Testimonials: React.FC<TestimonialsProps> = (
  props: TestimonialsProps
) => {
  const { t } = useTranslation("common");
  const { customers } = props;
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>{t("testimonials.title")}</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
