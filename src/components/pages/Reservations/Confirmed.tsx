import Icons from "assets/icons";
import "./BookingForm.css";
const Confirmed = () => {
  return (
    <div className="confirmed-reservation">
      <Icons.SUCCESS />
      <h2>Your table has been confirmed!</h2>
      <p>
        An email confirmation containing all the details will be sent to you
        shortly.
      </p>
    </div>
  );
};
export default Confirmed;
