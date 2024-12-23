import { useEffect, useState } from "react";
import { Icon } from "@ui/Buttons/IconWhatsApp/TopWhatsapp";
import styles from "./NavigationBtn.module.scss";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";

export const Buttons = () => {
    const [showArrowTop, setShowArrowTop] = useState(false);
    const contactsInfo = useContactsInfo();

    const handleWhatsapp = () => {
        const sanitizedPhone = contactsInfo?.phone.replace(/\D/g, "");
        window.open(`https://wa.me/${sanitizedPhone}`, "_blank");
    };

    const handleArrowTopClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowArrowTop(window.scrollY > 850);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={styles.iconContainer}>
            {showArrowTop && (
                <div className={styles.arrowTopIcon}>
                    <Icon
                        iconType="arrow-top"
                        aria-label="Scroll to top"
                        onClick={handleArrowTopClick}
                    />
                </div>
            )}
            <div className={styles.whatsAppIcon}>
                <Icon
                    iconType="whatsapp"
                    aria-label="Message on WhatsApp"
                    onClick={handleWhatsapp}
                />
            </div>
        </div>
    );
};
