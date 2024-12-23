import { Location } from "@assets/Icons/Location";
import style from "./FooterContacts.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Phone } from "@assets/Icons/Phone";
import { Watch } from "@assets/Icons/Watch";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";

export const FooterContacts = () => {
    const contactsInfo = useContactsInfo();

    const handlePhoneClick = () => {
        const confirmed = window.confirm(
            `Вы хотите позвонить на номер ${contactsInfo?.phone}?`
        );
        if (confirmed) {
            window.location.href = `tel:${contactsInfo?.phone}`;
        }
    };

    const formattedWorkingHours = contactsInfo?.working_hours
        .split(/[.,;]/)
        .map((line, index) => (
            <Typography
                key={index}
                variant="h6"
                weight="semi-bold"
                className={style.timeText}
            >
                {line.trim()}
            </Typography>
        ));

    return (
        <div className={style.fContact}>
            <Typography variant="h6" weight="bold" className={style.fTitle}>
                Контакты
            </Typography>
            <a
                href={`https://2gis.kg/search/${encodeURIComponent(contactsInfo?.address)}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Typography
                    variant="h6"
                    weight="semi-bold"
                    className={style.actionText}
                >
                    <Location />
                    {contactsInfo?.address}
                </Typography>
            </a>
            <Typography
                onClick={handlePhoneClick}
                variant="h6"
                weight="semi-bold"
                className={style.actionText}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === "Enter" && handlePhoneClick()}
            >
                <Phone />
                {contactsInfo?.phone}
            </Typography>
            <div className={style.timetable}>
                <Watch color="white" />
                <div>{formattedWorkingHours}</div>
            </div>
        </div>
    );
};
