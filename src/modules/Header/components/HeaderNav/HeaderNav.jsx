import styles from "./HeaderNav.module.scss";
import { Link } from "react-router-dom";
import { NavLinks } from "@utils/Constants/Constants";
import { Typography } from "@ui/Typography/Typography";
import { Button } from "@ui/Buttons/Button/Button";
import { useEffect } from "react";
import { useHeaderStore } from "@modules/Header/store/useHeaderStore";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";

export const HeaderNav = () => {
    const { data, fetchData } = useHeaderStore();
    const contactsInfo = useContactsInfo();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleWhatsapp = () => {
        const sanitizedPhone = contactsInfo?.phone.replace(/\D/g, "");
        window.open(`https://wa.me/${sanitizedPhone}`, "_blank");
    };

    return (
        <div className={styles.container}>
            <ul className={styles.navlinks}>
                {NavLinks.map((item, index) => (
                    <li key={index}>
                        <Link to={item.path}>
                            <Typography
                                variant="h6"
                                weight="semi-bold"
                                className={styles.h6}
                            >
                                {item.title}
                            </Typography>
                        </Link>
                    </li>
                ))}
                <li>
                    <a href="#contacts">
                        <Typography
                            variant="h6"
                            weight="semi-bold"
                            className={styles.h6}
                        >
                            Контакты
                        </Typography>
                    </a>
                </li>
                <li>
                    <a href={data} target="_blank" rel="noopener noreferrer">
                        <Typography
                            variant="h6"
                            weight="semi-bold"
                            className={styles.h6}
                        >
                            Прайс
                        </Typography>
                    </a>
                </li>
                <li>
                    <Button
                        text="Записаться"
                        variant="primary"
                        onClick={handleWhatsapp}
                        color="white"
                        width="162px"
                        height="50px"
                    />
                </li>
            </ul>
        </div>
    );
};
