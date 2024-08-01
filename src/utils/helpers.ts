import { addHours, eachHourOfInterval, format } from "date-fns";
import * as Keys from "constants/constants";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case Keys.SET_AVAILABLE_TIMES:
      return action.payload;
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const submitAPI = (formData) => {
  return true;
};

export const fetchAPI = (date: Date): string[] => {
  const endDate = addHours(date, 6);
  const hours = eachHourOfInterval({ start: date, end: endDate });
  const availableTimes = hours.map((hour) => format(hour, "HH:mm"));
  return availableTimes;
};
