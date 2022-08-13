import { useRouter } from "next/router";
import en from "../locales/en";


export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === "en" ? en: en;
  return { t, locale };
};
