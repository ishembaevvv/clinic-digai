import { Typography } from "@ui/Typography/Typography";
import { Link } from "react-router-dom";
import style from "./SocialMedia.module.scss";
import { Instagram } from "@assets/Icons/Instagram";
import { Whatsapp } from "@assets/Icons/Whatsapp";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";

export const SocialMedia = () => {
    const contactsInfo = useContactsInfo();
    const sanitizedPhone = contactsInfo?.phone.replace(/\D/g, "");
    return (
        <div className={style.socialMedia}>
            <Typography variant="h6" weight="bold" className={style.header}>
                Социальные сети
            </Typography>
            <div>
                <Link
                    to={`https://www.instagram.com/${contactsInfo?.instagram}/`}
                    target="_blank"
                    className={style.actionText}
                >
                    <Instagram />
                </Link>
                <Link
                    to={`https://wa.me/${sanitizedPhone}`}
                    target="_blank"
                    className={style.actionText}
                >
                    <Whatsapp />
                </Link>
            </div>
        </div>
    );
};
