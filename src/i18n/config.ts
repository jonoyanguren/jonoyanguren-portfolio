import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) locale = "es";
  return {
    messages: (await import(`../locales/${locale}.json`)).default,
    locale,
  };
});
