import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchAPI, submitAPI } from "utils/helpers";
import { BookingData, BookingProps } from "interfaces/main.model";
import { validateFormData } from "validations";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "constants/routes";
import "./BookingForm.css";
const BookingForm: React.FC<BookingProps> = ({ availableTimes, dispatch }) => {
  const { t } = useTranslation("common");
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BookingData>({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });
  const [formErrors, setFormErrors] = useState<BookingData>({});
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    fetchTimes(today);
  }, []);
  const fetchTimes = async (date) => {
    try {
      const times = await fetchAPI(new Date(date));
      dispatch({ type: "update_times", times });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "date") {
      fetchTimes(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, errors } = validateFormData(formData);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    const success = await submitAPI(formData);
    if (success) {
      navigate(ROUTES.CONFIRMED);
    } else {
      alert(
        "There was an error submitting your reservation. Please try again."
      );
    }
  };
  return (
    <div className="container reservations">
      <h2>{t("reservation.title")}</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label htmlFor="res-date">{t("reservation.choose-date")}</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="res-time">{t("reservation.choose-time")}</label>
        <select
          id="res-time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">{t("reservation.guests-num")}</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          placeholder="1"
          min="1"
          max="10"
          required
        />
        <label htmlFor="occasion">{t("reservation.occasion")}</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">{t("reservation.select-occasion")}</option>
          <option value="Birthday">{t("reservation.birthday")}</option>
          <option value="Anniversary">{t("reservation.anniversary")}</option>
        </select>
        <input type="submit" value={t("reservation.make")} />
        {Object.values(formErrors).map((error, index) => (
          <div key={index} className="error">
            {error}
          </div>
        ))}
      </form>
    </div>
  );
};
export default BookingForm;
