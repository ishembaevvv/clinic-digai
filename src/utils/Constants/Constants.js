export const BASE_URL = import.meta.env.VITE_API_URL;

export const PATH = {
    notFound: "*",
    home: "/",
    about: "/about",
    services: "/services",
    specialists: "/specialists",
    news: "/news",
    serviceOpen: "/services/:id/procedures", // Обновил путь с /procedures
    newsOpen: "/news/:id",
    error500: "/500",
};

export const NavLinks = [
    {
        title: "О клинике",
        path: PATH.about,
    },
    {
        title: "Услуги",
        path: PATH.services,
    },
    {
        title: "Специалисты",
        path: PATH.specialists,
    },
    {
        title: "Новости",
        path: PATH.news,
    },
];

export const PathTranslations = {
    home: "Главная",
    about: "О клинике",
    services: "Услуги",
    news: "Новости",
    contacts: "Контакты",
    specialists: "Специалисты",
};
