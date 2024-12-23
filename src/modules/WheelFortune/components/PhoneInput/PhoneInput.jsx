import { useState } from "react";
import {
    usePhoneInput,
    useWheelStore,
} from "@modules/WheelFortune/store/useWheelStore";

export const PhoneInput = ({ onChange = () => {} }) => {
    const [value, setValue] = useState("+996 ");
    const [validationError, setValidationError] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { fetchData, loading, error } = usePhoneInput();
    const { setPhoneNumber } = useWheelStore();

    const formatPhoneNumber = (input) => {
        let cleaned = input.replace(/\D/g, "").slice(3);
        if (cleaned.length <= 3) {
            cleaned = `(${cleaned}`;
        } else if (cleaned.length <= 5) {
            cleaned = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else if (cleaned.length <= 7) {
            cleaned = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
        } else {
            cleaned = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 5)}-${cleaned.slice(5, 7)}-${cleaned.slice(7, 9)}`;
        }
        return `+996 ${cleaned}`;
    };
    const handleChange = (e) => {
        let inputValue = e.target.value;
        if (!inputValue.startsWith("+996")) {
            inputValue = "+996 " + inputValue.replace(/\+996\s*/, "");
        }
        const formatted = formatPhoneNumber(inputValue);
        setValue(formatted);
        const isValid = /^\+996 \(\d{3}\) \d{2}-\d{2}-\d{2}$/.test(formatted);
        if (isValid) {
            setPhoneNumber(formatted);
        } else {
            setPhoneNumber(formatted);
        }
        setValidationError(
            !isValid ? "Некорректный формат номера телефона." : false
        );
        onChange(formatted);
    };

    const handleFocus = () => {
        if (!value.startsWith("+996")) {
            setValue("+996 ");
        }
        setIsFocused(true);
    };

    const handleSubmit = async () => {
        if (validationError || isSubmitting) return;
        let prizeName = useWheelStore.getState().prizeName;
        let prizeNameId = useWheelStore.getState().prizeNameId;
        let phone = useWheelStore.getState().phoneNumber;
        let discount = useWheelStore.getState().discount;
        let retries = 10;
        while (!prizeName && retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            phone = useWheelStore.getState().phoneNumber;
            prizeName = useWheelStore.getState().prizeName;
            prizeNameId = useWheelStore.getState().prizeNameId;
            discount = useWheelStore.getState().discount;
            retries--;
        }
        if (!prizeName) {
            setIsSubmitting(false);
            return;
        }
        if (!phone) {
            setIsSubmitting(false);
            return;
        }
        try {
            await fetchData(phone, prizeName, prizeNameId, discount);
        } catch (err) {
            console.error("Ошибка при отправке:", err);
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleBlur = () => setIsFocused(false);
    return {
        value,
        validationError,
        isFocused,
        loading,
        error,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleFocus,
        handleBlur,
    };
};
