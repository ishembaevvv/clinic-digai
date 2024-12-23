import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    mainBlockInfo: "/digai_manager/main_page/active",
};

export const useMainBlockStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await requester.get(ENDPOINTS.mainBlockInfo);
            const fileUrl = response.data.background_image;
            if (fileUrl) {
                set({ data: fileUrl, loading: false });
                console.log(data);
                return;
            }
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
