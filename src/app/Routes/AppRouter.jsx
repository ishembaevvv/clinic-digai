import { createBrowserRouter } from "react-router-dom";
import { PATH } from "@utils/Constants/Constants";
import { ServicePage } from "@pages/ServicePage/ServicePage";
import { ServiceOpenPage } from "@pages/ServiceOpenPage/ServiceOpenPage";
import { AboutPage } from "@pages/AboutPage/AboutPage";
import { HomePage } from "@pages/HomePage/HomePage";
import { Found404 } from "@pages/Found404/Found404";
import { NewsPage } from "@pages/NewsPage/NewsPage";
import { Layout } from "@app/Layout/Layout";
import { SpecialistsPage } from "@pages/SpecialistsPage/SpecialistsPage";
import { NewsOpenPage } from "@pages/NewsOpenPage/NewsOpenPage";
import { ContactsCard } from "@modules/ContactsModule/ContactsCard";

export const AppRouter = createBrowserRouter([
    {
        path: PATH.home,
        element: <Layout />,
        children: [
            {
                path: PATH.home,
                element: <HomePage />,
            },
            {
                path: PATH.services,
                element: <ServicePage />,
            },
            {
                path: `${PATH.services}/:id/procedures/`,
                element: <ServiceOpenPage />,
            },
            {
                path: PATH.contacts,
                element: <ContactsCard />,
            },
            {
                path: PATH.news,
                element: <NewsPage />,
            },
            {
                path: `${PATH.news}/:id`,
                element: <NewsOpenPage />,
            },
            {
                path: PATH.about,
                element: <AboutPage />,
            },
            {
                path: PATH.specialists,
                element: <SpecialistsPage />,
            },
        ],
    },
    {
        path: "*",
        element: <Found404 />,
    },
]);
