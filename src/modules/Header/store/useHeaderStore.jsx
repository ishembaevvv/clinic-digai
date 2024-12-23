import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    priceInfo: "/digai_manager/price/",
};

export const useHeaderStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await requester.get(ENDPOINTS.priceInfo);
            const fileUrl = response.data.results[0]?.file;
            set({ data: fileUrl, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
