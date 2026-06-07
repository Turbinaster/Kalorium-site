export const SITE_NAME = "Калориум";
export const SITE_URL = "https://kalorium.su";
export const SITE_DESCRIPTION =
  "Официальный сайт приложения Калориум: подсчёт калорий по фото, дневник питания, норма КБЖУ, вода, графики и установка через Google Play или RuStore.";
export const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=online.neurochef.dietolog";
export const RUSTORE_URL =
  "https://www.rustore.ru/catalog/app/online.neurochef.dietolog";
export const STORE_DOWNLOAD_LINKS = [
  {
    id: "google-play",
    label: "Скачать в Google Play",
    shortLabel: "Google Play",
    href: GOOGLE_PLAY_URL,
    eventName: "click_download_google_play",
  },
  {
    id: "rustore",
    label: "Скачать в RuStore",
    shortLabel: "RuStore",
    href: RUSTORE_URL,
    eventName: "click_download_rustore",
  },
] as const;
export const SITE_LOCALE = "ru_RU";
export const APP_PLATFORM_LABEL = "Android";
