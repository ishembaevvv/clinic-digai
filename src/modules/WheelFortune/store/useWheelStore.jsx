import { requester } from "@utils/Requester/Requester";
import { create } from "zustand";

const ENDPOINTS = {
    prizeInfo: "/fortune/prizes/",
    playFortune: "/fortune/play/",
};

export const useWheelStore = create((set) => ({
    data: [],
    loading: false,
    error: null,

    fetchData: async () => {
        set({ loading: true, error: null });
        try {
            const { data } = await requester.get(ENDPOINTS.prizeInfo);
            set({ data: data.results || [], loading: false });
        } catch (error) {
            set({
                error: error.message,
                loading: false,
            });
        }
    },
    setPrizeName: (name) => set({ prizeName: name }),
    setPrizeNameId: (id) => set({ prizeNameId: id }),
    setPhoneNumber: (number) => set({ phoneNumber: number }),
    setDiscount: (discount) => set({ discount: discount }),
}));

export const usePhoneInput = create((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchData: async (phoneNumber, prizeName, prizeNameId, discount) => {
        const phoneRegex = /^\+996 \(\d{3}\) \d{2}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phoneNumber)) {
            set({ error: "Неверный формат номера телефона.", loading: false });
            return;
        }
        let retries = 10;
        while (!prizeNameId && retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            retries--;
        }
        set({ loading: true, error: null, data: null });
        try {
            const response = await requester.post(
                ENDPOINTS.playFortune,
                {
                    phone_number: String(phoneNumber),
                    prize_name: String(prizeName),
                    prize_name_id: String(prizeNameId),
                    discount: String(discount),
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFTOKEN":
                            "nEgIzadnZQ3ZjvCi09pb38fsYuQ8wwFG41fapVNyUUyUfdwwWGPXV3keCI1ceRIG",
                    },
                }
            );
            if (!response.ok) {
                let errorMessage = `Ошибка: ${response.status}`;
                const errorText = await response.text();
                errorMessage += ` - ${errorText}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();
            set({ data: data.prizes || [], loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));
