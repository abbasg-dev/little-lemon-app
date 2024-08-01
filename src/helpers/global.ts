import { UserInfo } from "interfaces/auth.model";
import * as CONSTANTS from "constants/constants";

/* LocalStorage Functions */

export const setLocalStorageItems = (data: UserInfo) => {
  let token = data.token;
  let user = data.user;
  localStorage.setItem(CONSTANTS.KEY_ACCESS_TOKEN, JSON.stringify({ token }));
  localStorage.setItem(CONSTANTS.KEY_USER_INFO, JSON.stringify({ user }));
};

export function getUserInfo() {
  return JSON.parse(localStorage.getItem(CONSTANTS.KEY_USER_INFO) || "");
}

export function getUserToken() {
  try {
    return JSON.parse(localStorage.getItem(CONSTANTS.KEY_ACCESS_TOKEN));
  } catch (error) {
    return null;
  }
}

export const clearLocalStorageItems = () => {
  localStorage.removeItem(CONSTANTS.KEY_ACCESS_TOKEN);
  localStorage.removeItem(CONSTANTS.KEY_USER_INFO);
};

export const setLanguagePreference = (lang: string) => {
  localStorage.setItem("selectedLanguage", lang);
};

export const getLanguagePreference = () => {
  return localStorage.getItem("selectedLanguage") || "en";
};
