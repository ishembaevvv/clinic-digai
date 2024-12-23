import { Link, NavLink } from "react-router-dom";
import { NavLinks, PATH } from "@utils/Constants/Constants";
import style from "./FooterMenu.module.scss";
import { FooterContacts } from "../FooterContacts/FooterContacts";
import { Typography } from "@ui/Typography/Typography";
import { SocialMedia } from "../SocialMedia/SocialMedia";

export const FooterMenu = () => {
    return (
        <div className={style.footerItem}>
            <div className={style.fPrime}>
                <Link to={PATH.home} className={style.h6Main}>
                    <Typography
                        variant="h6"
                        weight="bold"
                        className={style.h6Text}
                    >
                        Главная
                    </Typography>
                </Link>
                {NavLinks.map((item, index) => (
                    <NavLink key={index} to={item.path}>
                        <Typography variant="h6" weight="semi-bold">
                            {item.title}
                        </Typography>
                    </NavLink>
                ))}
                <a href="#contacts">
                    <Typography variant="h6" weight="semi-bold">
                        Контакты
                    </Typography>
                </a>
            </div>
            <FooterContacts />
            <SocialMedia />
        </div>
    );
};
