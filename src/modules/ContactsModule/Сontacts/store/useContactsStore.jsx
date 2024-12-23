import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    contactsInfo: "/digai_manager/contacts/",
};

export const useContactsStore = create((set) => ({
    data: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const { data } = await requester.get(ENDPOINTS.contactsInfo);
            set({ data: data.results[0], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
