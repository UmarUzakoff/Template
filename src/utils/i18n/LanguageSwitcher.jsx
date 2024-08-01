import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const lang = localStorage.getItem("language");

  useEffect(() => {
    if (!lang) {
      localStorage.setItem("language", "ru");
    }
  }, []);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <div className="relative max-w-[120px]">
      <select
        aria-label="Language switcher"
        defaultValue={localStorage.getItem("language")}
        onChange={handleLanguageChange}
        className="cursor-pointer border !outline-none rounded-sm bg-transparent">
        <option value="uz">uz</option>
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
