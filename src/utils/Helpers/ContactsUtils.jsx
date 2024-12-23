import { useEffect, useState } from "react";
import { TimeThin } from "@assets/Icons/TimeThin";
import { LocationThin } from "@assets/Icons/LocationThin";
import { PhoneThin } from "@assets/Icons/PhoneThin";
import { InstagramThin } from "@assets/Icons/InstagramThin";
import { MailThin } from "@assets/Icons/MailThin";
import { useContactsStore } from "@modules/ContactsModule/Сontacts/store/useContactsStore";

export const useContactsInfo = () => {
    const { data, fetchData } = useContactsStore();
    const [contactsInfo, setContactsInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        if (data) {
            setContactsInfo({
                working_hours: data.working_hours,
                address: data.address,
                phone: data.phone,
                instagram: data.instagram,
                email: data.email,
                map_link: data.map_link,
            });
        }
    }, [data]);

    return contactsInfo;
};

export const GetContactInfo = (contactsInfo) => [
    {
        className: "location",
        title: "Время работы",
        details: contactsInfo?.working_hours
            ? contactsInfo.working_hours.split(",").map((item) => item.trim())
            : [],
        icon: TimeThin,
    },
    {
        className: "address",
        title: "Адрес",
        details: [contactsInfo?.address],
        link: contactsInfo?.map_link,
        icon: LocationThin,
    },
    {
        className: "phone",
        title: "Телефон",
        details: [contactsInfo?.phone],
        link: `tel:${contactsInfo?.phone}`,
        icon: PhoneThin,
    },
    {
        className: "instagram",
        title: "Инстаграм",
        details: [contactsInfo?.instagram],
        link: `https://instagram.com/${contactsInfo?.instagram}`,
        icon: InstagramThin,
    },
    {
        className: "email",
        title: "Эл.почта",
        details: [contactsInfo?.email],
        link: `mailto:${contactsInfo?.email}`,
        icon: MailThin,
    },
];
