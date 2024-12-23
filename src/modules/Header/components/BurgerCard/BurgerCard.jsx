import styles from "./BurgerCard.module.scss";
import { Close } from "@assets/Icons/Close";
import { LogoPrimaryDark } from "@assets/Icons/LogoPrimaryDark";
import { NavLinks, PATH } from "@utils/Constants/Constants";
import { Link } from "react-router-dom";
import { HeaderInfo } from "@modules/Header/components/HeaderInfo/HeaderInfo";
import { Typography } from "@ui/Typography/Typography";
import { Button } from "@ui/Buttons/Button/Button";
import { useHeaderStore } from "@modules/Header/store/useHeaderStore";
import { useRef } from "react";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";
import { useEffect } from "react";

export const BurgerCard = ({ onClose }) => {
    const { data, fetchData } = useHeaderStore();
    const contactsInfo = useContactsInfo();
    const burgerCardRef = useRef(null);
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleWhatsapp = () => {
        const sanitizedPhone = contactsInfo?.phone.replace(/\D/g, "");
        window.open(`https://wa.me/${sanitizedPhone}`, "_blank");
        onClose();
    };

    const handleLinkClick = () => {
        onClose();
    };

    const handleClickOutside = (event) => {
        if (
            burgerCardRef.current &&
            !burgerCardRef.current.contains(event.target)
        ) {
            onClose();
        }
    };

    return (
        <div className={styles.overlay} onClick={handleClickOutside}>
            <div ref={burgerCardRef} className={styles.burgerContainer}>
                <div className={styles.logoContainer}>
                    <Link to={PATH.home} className={styles.logoWrapper}>
                        <LogoPrimaryDark className={styles.logo} />
                    </Link>
                    <div className={styles.closeContainer} onClick={onClose}>
                        <Close color="white" width="32px" height="32px" />
                    </div>
                </div>
                <nav>
                    <ul className={styles.navlinks}>
                        {NavLinks.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} onClick={handleLinkClick}>
                                    <Typography
                                        variant="h2"
                                        weight="bold"
                                        className={styles.h6}
                                    >
                                        {item.title}
                                    </Typography>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <a href="#contacts" onClick={handleLinkClick}>
                                <Typography
                                    variant="h2"
                                    weight="bold"
                                    className={styles.h6}
                                >
                                    Контакты
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <a
                                href={data}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                            >
                                <Typography
                                    variant="h2"
                                    weight="bold"
                                    className={styles.h6}
                                >
                                    Прайс
                                </Typography>
                            </a>
                        </li>
                    </ul>
                    <Button
                        text="Записаться"
                        variant="primary"
                        onClick={handleWhatsapp}
                        color="white"
                        className={styles.button}
                    />
                </nav>
                <HeaderInfo
                    style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginTop: "65px",
                        gap: "30px",
                    }}
                />
            </div>
        </div>
    );
};
