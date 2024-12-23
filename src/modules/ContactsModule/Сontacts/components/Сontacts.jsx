import { useState, useEffect } from "react";
import { Typography } from "@ui/Typography/Typography";
import styles from "./Сontacts.module.scss";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";
import { GetContactInfo } from "@utils/Helpers/ContactsUtils";
import { ArrowTop } from "@assets/Icons/ArrowTop";

export const Contacts = ({ classNames }) => {
    const contactsInfo = useContactsInfo();
    const contactInfo = GetContactInfo(contactsInfo);
    const [areRowsVisible, setAreRowsVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1250);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1250);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (url) => {
        if (url.startsWith("tel:")) {
            if (
                window.confirm(
                    `Вы хотите позвонить на номер ${contactsInfo.phone}?`
                )
            ) {
                window.location.href = url;
            }
        } else if (url.startsWith("http")) {
            window.open(url, "_blank");
        } else {
            window.open(`http://${url}`, "_blank");
        }
    };

    const handleOpen = () => setAreRowsVisible((prev) => !prev);

    return (
        <div
            className={`${styles.container} ${classNames} ${areRowsVisible ? styles.visible : styles.hidden}`}
        >
            <div
                className={`${styles.rows} ${areRowsVisible ? styles.visible : styles.hidden}`}
            >
                {contactInfo?.map(
                    ({ title, details, link, icon: IconComponent }) => (
                        <div
                            className={styles.rowItem}
                            key={title}
                            onClick={() => handleClick(link)}
                            aria-label={`Open link to ${title}`}
                        >
                            <div className={styles.rowContent}>
                                {IconComponent && (
                                    <div className={styles.icons}>
                                        <IconComponent />
                                    </div>
                                )}
                                <div className={styles.info}>
                                    <Typography
                                        variant="h4"
                                        weight="bold"
                                        className={styles.title}
                                    >
                                        {title}
                                    </Typography>
                                    {details.map((detail, index) => (
                                        <div
                                            key={index}
                                            className={styles.detailRow}
                                        >
                                            <Typography variant="h6">
                                                {detail}
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
            {!isDesktop && (
                <div
                    className={`${styles.arrow} ${areRowsVisible ? styles.visible : ""}`}
                >
                    <div onClick={handleOpen} className={styles.arrowContainer}>
                        <ArrowTop />
                    </div>
                </div>
            )}
        </div>
    );
};
