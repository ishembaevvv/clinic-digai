import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    resultsInfo: "/digai_manager/results/",
};

export const useResultsStore = create((set) => ({
    data: [],
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const { data } = await requester.get(ENDPOINTS.resultsInfo);
            set({ data: data.results || [], loading: false });
        } catch (error) {
            set({
                error: error.message,
                loading: false,
            });
        }
    },
}));
