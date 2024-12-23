import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    serviceInfo: "/digai_manager/services/",
};

export const useServiceBlockStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const { data } = await requester.get(ENDPOINTS.serviceInfo);
            set({ data: data.results, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
