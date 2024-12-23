import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    aboutInfo: "/digai_manager/about/",
};

export const useAboutStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const { data } = await requester.get(ENDPOINTS.aboutInfo);
            set({ data: data.results, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
