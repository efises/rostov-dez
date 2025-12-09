import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Главная',
      href: getPermalink('/'),
    },
    {
      text: 'Услуги',
      href: getPermalink('/services'),
    },
    {
      text: 'О нас',
      href: getPermalink('/about'),
    },
    {
      text: 'Контакты',
      href: getPermalink('/contact'),
    },
    {
      text: 'FAQ',
      href: getPermalink('/faq'),
    },
  ],
  actions: [{ text: 'Заказать звонок', href: '#contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Навигация',
      links: [
        { text: 'Главная', href: '/' },
        { text: 'Услуги', href: '/services' },
        { text: 'О нас', href: '/about' },
        { text: 'Контакты', href: '/contact' },
        { text: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Услуги',
      links: [
        { text: 'Дезинсекция', href: '/services#bugs' },
        { text: 'Дератизация', href: '/services#rats' },
        { text: 'Дезинфекция', href: '/services#disinfection' },
        { text: 'Документы для СЭС', href: '/services#docs' },
        { text: 'Профилактика', href: '/services#docs' },
      ],
    },
    {
      title: 'Контакты',
      links: [
        { text: 'Телефон: +7 (863) 123-45-67', href: 'tel:+78631234567' },
        { text: 'Email: info@rostov-dez.ru', href: 'mailto:info@rostov-dez.ru' },
        { text: 'Ростов-на-Дону', href: '/contact#map' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Политика конфиденциальности', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: '#' },
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: '#' },
    { ariaLabel: 'Viber', icon: 'tabler:phone', href: '#' },
  ],
  footNote: `
    \u0420\u043e\u0441\u0442\u043e\u0432 \u0414\u0435\u0437\u2014\u0441\u0430\u043d\u0438\u0442\u0430\u0440\u043d\u0430\u044f \u0437\u0430\u0449\u0438\u0442\u0430 800+ \u043f\u0440\u0435\u0434\u043f\u0440\u0438\u044f\u0442\u0438\u0439 \u0420\u043e\u0441\u0442\u043e\u0432\u0430-\u043d\u0430-\u0414\u043e\u043d\u0443. \u0420\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043d\u043e\u0447\u044c\u044e, \u0447\u0442\u043e\u0431\u044b \u0432\u0430\u0448 \u0431\u0438\u0437\u043d\u0435\u0441 \u0431\u044b\u043b \u0447\u0438\u0441\u0442\u044b\u043c \u0434\u043d\u0451\u043c.
  `,
};
