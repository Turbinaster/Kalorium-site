import { RUSTORE_URL } from "@/data/site";

export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const headerNavigation: NavigationItem[] = [
  { label: "Калькулятор", href: "/calculator" },
  { label: "Подсчёт по фото", href: "/photo" },
  { label: "Дневник питания", href: "/diary" },
  { label: "FAQ", href: "/faq" },
  { label: "Отзывы", href: "/reviews" },
  { label: "О приложении", href: "/about" },
];

export const mobileNavigation: NavigationItem[] = [
  { label: "Главная", href: "/" },
  ...headerNavigation,
  { label: "Обновления", href: "/updates" },
  { label: "Контакты", href: "/contacts" },
  { label: "Политика конфиденциальности", href: "/privacy-policy" },
  { label: "Удаление аккаунта", href: "/account-deletion" },
];

export const footerNavigation: ReadonlyArray<{
  title: string;
  items: ReadonlyArray<NavigationItem>;
}> = [
  {
    title: "Возможности",
    items: [
      { label: "Калькулятор калорий", href: "/calculator" },
      { label: "Подсчёт по фото", href: "/photo" },
      { label: "Дневник питания", href: "/diary" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "О сервисе",
    items: [
      { label: "Отзывы", href: "/reviews" },
      { label: "Обновления", href: "/updates" },
      { label: "О приложении", href: "/about" },
      { label: "Контакты", href: "/contacts" },
    ],
  },
  {
    title: "Документы",
    items: [
      { label: "Политика конфиденциальности", href: "/privacy-policy" },
      { label: "Удаление аккаунта", href: "/account-deletion" },
      { label: "RuStore", href: RUSTORE_URL, external: true },
    ],
  },
];
