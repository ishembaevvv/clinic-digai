import { PATH } from "@utils/Constants/Constants";
import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";
import { transliterate } from "transliteration";

const ENDPOINTS = {
    newsInfo: "/digai_manager/news/",
};

const fetchPaginatedData = async (url) => {
    let data = [];
    let page = 1;
    let moreData = true;

    while (moreData) {
        const response = await requester.get(`${url}?page=${page}`);
        data = data.concat(response.data.results);
        moreData = response.data.next !== null;
        page++;
    }
    return data;
};

export const useNewsStore = create((set, get) => ({
    data: null,
    selectedNews: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const newsData = await fetchPaginatedData(ENDPOINTS.newsInfo);
            set({ data: newsData, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    handleCardClick: (selectedNews, navigate) => {
        const normalizedTitle = selectedNews.title.trim().toLowerCase();
        const transliteratedTitle = transliterate(normalizedTitle).replace(
            /\s+/g,
            "-"
        );

        const foundNews = get().data?.find(
            (news) => news.title.toLowerCase() === normalizedTitle
        );

        if (foundNews) {
            set({ selectedNews: foundNews });
            localStorage.setItem("breadcrumb", foundNews.title);
            navigate(`${PATH.news}/${transliteratedTitle}`, {
                state: { news: foundNews, crumbEl: foundNews.title },
            });
        }
    },

    loadSelectedNewsFromStorage: () => {
        const newsFromStorage = localStorage.getItem("selectedNews");
        if (newsFromStorage) {
            set({ selectedNews: JSON.parse(newsFromStorage) });
        }
    },
}));
