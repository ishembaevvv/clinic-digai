import { create } from "zustand";
import { persist } from "zustand/middleware";
import { transliterate } from "transliteration";
import { requester } from "@utils/Requester/Requester";
import { PATH } from "@utils/Constants/Constants";

const ENDPOINTS = {
    serviceInfo: "/digai_manager/services/",
    serviceProcedures: (serviceId) =>
        `/digai_manager/services/${serviceId}/procedures/`,
};

const fetchPaginatedData = async (url) => {
    let allData = [];
    let page = 1;
    let moreData = true;

    while (moreData) {
        const response = await requester.get(`${url}?page=${page}`);
        allData = allData.concat(response.data.results);
        moreData = response.data.next !== null;
        page++;
    }
    return allData;
};

export const useServiceStore = create(
    persist(
        (set, get) => ({
            data: null,
            procedure: null,
            procedures: [],
            serviceTitle: null,
            breadcrumb: null,
            loading: false,
            error: null,
            lastFetched: null,
            fetchData: async () => {
                set({ loading: true, error: null });
                try {
                    const allServices = await fetchPaginatedData(
                        ENDPOINTS.serviceInfo
                    );
                    set({
                        data: allServices,
                        loading: false,
                        lastFetched: Date.now(),
                    });
                } catch (error) {
                    set({ error: error.message, loading: false });
                }
            },

            handleCardClick: async (selectedService, navigate) => {
                const normalizedTitle = selectedService.title
                    ?.trim()
                    .toLowerCase();
                const transliteratedTitle = transliterate(
                    normalizedTitle
                ).replace(/\s+/g, "-");
                const foundService = get().data?.find(
                    (service) => service.id === selectedService.id
                );

                if (foundService) {
                    const { id: serviceId } = foundService;
                    try {
                        const { data: proceduresData } = await requester.get(
                            ENDPOINTS.serviceProcedures(serviceId)
                        );
                        set({
                            serviceTitle: foundService.title,
                            procedures: proceduresData.results,
                        });
                        localStorage.setItem("breadcrumb", foundService.title);
                        navigate(
                            `${PATH.services}/${transliteratedTitle}/procedures/`,
                            {
                                state: { crumbEl: foundService.title },
                            }
                        );
                    } catch (error) {
                        set({ error: error.message });
                    }
                }
            },
        }),
        {
            name: "service-store",
            getStorage: () => localStorage,
        }
    )
);
