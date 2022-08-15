import { useRouter } from "next/router";
import en from "../locales/en";
import pt from "../locales/pt";


export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en: pt;
  return { t, locale };
};
