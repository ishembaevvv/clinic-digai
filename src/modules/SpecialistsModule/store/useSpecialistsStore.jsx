import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    specialistsInfo: "/digai_manager/specialists/",
    teamImageInfo: "/digai_manager/team_photo/",
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

export const useSpecialistsStore = create((set) => ({
    dataSpecialists: null,
    dataTeamImage: null,
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const specialists = await fetchPaginatedData(
                ENDPOINTS.specialistsInfo
            );
            const teamImages = await fetchPaginatedData(
                ENDPOINTS.teamImageInfo
            );

            set({
                dataSpecialists: specialists,
                dataTeamImage: teamImages.map((item) => item.image),
                loading: false,
            });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
