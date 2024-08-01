// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Sample translation resources
const resources = {
  en: {
    translation: {
      greeting: "Hello, World!",
      xexe: "Interesting ?",
    },
  },
  ru: {
    translation: {
      greeting: "Привет Мир!",
      xexe: "Прикольно ?",
    },
  },
  uz: {
    translation: {
      greeting: "Salom Dunyo!",
      xexe: "Qiziqarlimi ?",
    },
  },
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: "en", // Default language
    interpolation: {
      escapeValue: false, // Not needed for React
    },
  });

export default i18n;
