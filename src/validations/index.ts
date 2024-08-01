import { BookingData } from "interfaces/main.model";

export const validateFormData = (formData) => {
  let errors: BookingData = {};
  if (!formData.date) {
    errors.date = "Date is required";
  }
  if (!formData.time) {
    errors.time = "Time is required";
  }
  if (!formData.occasion) {
    errors.occasion = "Occasion is required";
  }
  if (formData.guests < 1 || formData.guests > 10) {
    errors.guests = "Number of guests must be between 1 and 10";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
