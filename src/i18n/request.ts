import { getRequestConfig } from "next-intl/server";
import en from "../locales/en.json";
import es from "../locales/es.json";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) return { locale: "es", messages: es };

  return {
    locale,
    messages: locale === "en" ? en : es,
  };
});
