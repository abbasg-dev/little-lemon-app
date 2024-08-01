import { useTranslation } from "react-i18next";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { Customers } from "interfaces/main.model";
import "./TestimonialCard.css";
type TestimonialProps = {
  customer: Customers;
};
const TestimonialCard: React.FC<TestimonialProps> = (
  props: TestimonialProps
) => {
  const { t } = useTranslation("common");
  const { customer } = props;
  return (
    <article className="testimonial-card">
      <img src={customer.image} alt={customer.fullName} />
      <h4>{t(`testimonials.${customer.fullName}`)}</h4>
      <span>
        {customer.rating.map((ratingPoint, idx) =>
          ratingPoint === 1 ? (
            <IoMdStar key={idx} />
          ) : ratingPoint === 0.5 ? (
            <IoMdStarHalf key={idx} />
          ) : ratingPoint === 0 ? (
            <IoMdStarOutline key={idx} />
          ) : null
        )}
        <p>
          {customer.rating.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          )}{" "}
          / 5
        </p>
      </span>
      <blockquote>
        <p>"{t(`testimonials.${customer.says}`)}"</p>
      </blockquote>
    </article>
  );
};
export default TestimonialCard;
