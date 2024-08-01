import React from "react";
import ThemeSwitcher from "../utils/Theme/ThemeSwitcher";
import LanguageSwitcher from "../utils/i18n/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="dark:bg-black dark:text-white">
      <h1>{t("greeting")}</h1>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
