import styles from "./TopWhatsapp.module.scss";
import { WhatsappChat } from "@assets/Icons/WhatsappChat";
import { ArrowTop } from "@assets/Icons/ArrowTop";

export const Icon = ({ iconType, onClick }) => {
    const iconSrc = iconType === "whatsapp" ? <WhatsappChat /> : <ArrowTop />;
    const buttonClasses = `${styles.button} ${iconType === "whatsapp" ? styles.bounce : ""}`;

    return (
        <button className={buttonClasses} onClick={onClick}>
            {iconSrc}
        </button>
    );
};
