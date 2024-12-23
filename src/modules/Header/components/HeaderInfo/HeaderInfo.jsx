import styles from "./HeaderInfo.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Location } from "@assets/Icons/Location";
import { Phone } from "@assets/Icons/Phone";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";

export const HeaderInfo = ({ style }) => {
    const contactsInfo = useContactsInfo();

    const handlePhoneClick = () => {
        if (contactsInfo?.phone) {
            if (
                window.confirm(
                    `Вы хотите позвонить на номер ${contactsInfo.phone}?`
                )
            ) {
                window.location.href = `tel:${contactsInfo.phone}`;
            }
        }
    };

    return (
        <div className={styles.info} style={style}>
            <a
                href={contactsInfo?.map_link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Typography variant="h6" className={styles.infoItem}>
                    <Location />
                    {contactsInfo?.address}
                </Typography>
            </a>
            <Typography
                variant="h6"
                onClick={handlePhoneClick}
                className={styles.infoItem}
            >
                <Phone />
                {contactsInfo?.phone}
            </Typography>
        </div>
    );
};
