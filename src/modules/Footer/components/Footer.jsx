import { Typography } from "@ui/Typography/Typography";
import style from "./Footer.module.scss";
import { FooterMenu } from "./FooterMenu/FooterMenu";
import { Link } from "react-router-dom";
import { PATH } from "@utils/Constants/Constants";
import { Geeks } from "@assets/Icons/Geeks";
import { LogoPrimaryDark } from "@assets/Icons/LogoPrimaryDark";
import { Container } from "@ui/Container/Container";

export const Footer = () => {
    return (
        <footer className={style.footer}>
            <Container>
                <div className={style.container}>
                    <div className={style.footerBlocks}>
                        <div className={style.logoContainer}>
                            <Link to={PATH.home} className={style.logo}>
                                <LogoPrimaryDark />
                            </Link>
                        </div>
                        <FooterMenu />
                    </div>
                </div>
            </Container>
            <div className={style.geeksPro}>
                <Link to="https://geeks.kg/geeks-pro" target="_blank">
                    <Typography
                        variant="p"
                        weight="medium"
                        className={style.text}
                    >
                        MADE BY GEEKSPRO
                    </Typography>
                    <Geeks color="black" className={style.icon} />
                </Link>
            </div>
        </footer>
    );
};
