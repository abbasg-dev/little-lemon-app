import { useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "utils/helpers";
import { BookingData, BookingProps } from "interfaces/main.model";
import { validateFormData } from "validations";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "constants/routes";
import "./BookingForm.css";
const BookingForm: React.FC<BookingProps> = ({ availableTimes, dispatch }) => {
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
      <h2>Table reservation</h2>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
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
        <label htmlFor="guests">Number of guests</label>
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
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" />
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
