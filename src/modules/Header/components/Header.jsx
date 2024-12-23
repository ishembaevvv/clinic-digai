import { useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { PATH } from "@utils/Constants/Constants";
import { HeaderInfo } from "./HeaderInfo/HeaderInfo";
import { HeaderNav } from "./HeaderNav/HeaderNav";
import { LogoPrimaryDark } from "@assets/Icons/LogoPrimaryDark";
import { Burger } from "@assets/Icons/Burger";
import { Button } from "@ui/Buttons/Button/Button";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";
import { BurgerCard } from "./BurgerCard/BurgerCard";

export const Header = () => {
    const [isBurgerVisible, setIsBurgerVisible] = useState(false);
    const contactsInfo = useContactsInfo();

    const handleWhatsapp = () => {
        const sanitizedPhone = contactsInfo?.phone.replace(/\D/g, "");
        window.open(`https://wa.me/${sanitizedPhone}`, "_blank");
    };

    const handleMenu = () => {
        setIsBurgerVisible((prevState) => !prevState);
    };

    return (
        <header className={styles.header} id="home">
            <div className={styles.headerContent}>
                <Link to={PATH.home} className={styles.logo}>
                    <LogoPrimaryDark />
                </Link>
                <nav>
                    <HeaderInfo />
                    <HeaderNav />
                </nav>
                <div className={styles.buttons}>
                    <Button
                        text="Записаться"
                        variant="primary"
                        onClick={handleWhatsapp}
                        color="white"
                        className={styles.button}
                    />
                    <Burger className={styles.burger} onClick={handleMenu} />
                </div>
            </div>
            <div
                className={`${styles.burgerCardWrapper} ${
                    isBurgerVisible ? styles.visible : ""
                }`}
            >
                <BurgerCard onClose={() => setIsBurgerVisible(false)} />
            </div>
        </header>
    );
};
