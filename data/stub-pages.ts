import { GOOGLE_PLAY_URL } from "@/data/site";

export const stubPages = {
  "/calculator": {
    eyebrow: "Этап 1 из 7",
    title: "Калькулятор калорий и КБЖУ",
    description:
      "На следующем этапе здесь будет реализован полноценный интерактивный калькулятор нормы калорий, КБЖУ, воды и пояснений к расчёту.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
  },
  "/photo": {
    eyebrow: "Этап 1 из 7",
    title: "Подсчёт калорий по фото",
    description:
      "На следующем этапе здесь будет реализована полная продуктовая страница о том, как работает подсчёт калорий по фото в Калориуме.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
  },
  "/diary": {
    eyebrow: "Этап 1 из 7",
    title: "Дневник питания",
    description:
      "На следующем этапе здесь будет реализована полная страница о дневнике питания, контроле КБЖУ, воды и прогресса.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
  },
  "/faq": {
    eyebrow: "Этап 1 из 7",
    title: "Частые вопросы",
    description:
      "На следующем этапе здесь будет реализована большая FAQ-страница с разделами по приложению, расчёту, фотоанализу, данным и питанию.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Открыть калькулятор", href: "/calculator" },
  },
  "/reviews": {
    eyebrow: "Этап 1 из 7",
    title: "Отзывы о приложении",
    description:
      "На следующем этапе здесь будет реализована страница с реальными отзывами пользователей из RuStore.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
  },
  "/download": {
    eyebrow: "Этап 1 из 7",
    title: "Скачать приложение",
    description:
      "На следующем этапе здесь будет реализована конверсионная страница установки приложения Калориум через Google Play и RuStore.",
    primaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
    secondaryCta: { label: "Вернуться на главную", href: "/" },
  },
  "/updates": {
    eyebrow: "Этап 1 из 7",
    title: "Обновления Калориума",
    description:
      "На следующем этапе здесь будет реализована страница с историей версий и обновлений приложения.",
    primaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
    secondaryCta: { label: "Вернуться на главную", href: "/" },
  },
  "/about": {
    eyebrow: "Этап 1 из 7",
    title: "О приложении Калориум",
    description:
      "На следующем этапе здесь будет реализована страница об официальном сайте, приложении, подходе сервиса и поддержке.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
  },
  "/contacts": {
    eyebrow: "Этап 1 из 7",
    title: "Контакты",
    description:
      "На следующем этапе здесь будет реализована страница с контактами и способами связи.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
  },
  "/privacy-policy": {
    eyebrow: "Этап 1 из 7",
    title: "Политика конфиденциальности",
    description:
      "На следующем этапе здесь будет размещён полный текст политики конфиденциальности.",
    primaryCta: { label: "Вернуться на главную", href: "/" },
    secondaryCta: { label: "Скачать Калориум", href: GOOGLE_PLAY_URL, external: true },
  },
} as const;

export type StubPagePath = keyof typeof stubPages;
