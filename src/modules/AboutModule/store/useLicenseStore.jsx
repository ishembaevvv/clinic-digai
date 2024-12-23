import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    licenseInfo: "digai_manager/certificate/?page=1",
};

export const useLicenseStore = create((set) => ({
    data: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const response = await requester.get(ENDPOINTS.licenseInfo);
            const fileUrl = response.data.image;
            set({ data: fileUrl, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
