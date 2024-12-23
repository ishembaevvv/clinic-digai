import { Button } from "@ui/Buttons/Button/Button";
import { Typography } from "@ui/Typography/Typography";
import errorImage from "@assets/Images/errorImage.webp";
import styles from "./Found404.module.scss";
import { PATH } from "@utils/Constants/Constants";
import { useNavigate } from "react-router-dom";
import { Header } from "@modules/Header/components/Header";

export const Found404 = () => {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(PATH.home);
    };
    return (
        <div>
            <Header />
            <div className={styles.foundWrapper}>
                <div className={styles.message}>
                    <div className={styles.texts}>
                        <Typography variant="h1" className={styles.title}>
                            УПС!
                        </Typography>
                        <Typography variant="h5" className={styles.textError}>
                            Что-то пошло не так! Страница, которую
                            вы&nbsp;запрашиваете, не существует!
                        </Typography>
                        <Typography variant="h5" className={styles.textError}>
                            Перейдите на Главную страницу и&nbsp;попробуйте
                            найти необходимую информацию там!
                        </Typography>
                    </div>

                    <div className={styles.btn}>
                        <Button
                            variant="primary"
                            text="На главную"
                            color="var(--black-white)"
                            onClick={handleNavigation}
                        />
                    </div>
                </div>
                <div className={styles.number}>
                    <Typography variant="h5" className={styles.numberError}>
                        4
                    </Typography>
                    <div>
                        <img
                            className={styles.image}
                            src={errorImage}
                            alt="error image"
                        />
                    </div>
                    <Typography variant="h5" className={styles.numberError}>
                        4
                    </Typography>
                </div>
            </div>
        </div>
    );
};
