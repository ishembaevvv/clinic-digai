import { useNavigate } from "react-router-dom";
import styles from "./AboutBlock.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Button } from "@ui/Buttons/Button/Button";
import { Container } from "@ui/Container/Container";
import { useEffect } from "react";
import { PATH } from "@utils/Constants/Constants";
import { useAboutStore } from "../store/useAboutStore";

export const AboutBlock = () => {
    const { data, fetchData } = useAboutStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    const handleNavigation = () => {
        navigate(PATH.about);
    };
    const truncateText = (text) => {
        const sentences = text.match(/[^.!?]+[.!?]/g) || [];
        const truncated = sentences.slice(0, 3).join(" ");
        return truncated + (sentences.length > 3 ? ".." : "");
    };
    return (
        <Container>
            <div className={styles.container}>
                <Typography
                    variant="h2"
                    weight="bold"
                    className={styles.h2Title}
                >
                    О клинике
                </Typography>
                {Array.isArray(data) &&
                    data.map((item, index) => (
                        <div key={index} className={styles.about}>
                            <div className={styles.aboutSection}>
                                <div className={styles.image}>
                                    <img src={item.image} alt="about img" />
                                </div>
                                <div className={styles.aboutText}>
                                    <Typography
                                        variant="h5"
                                        className={styles.text}
                                    >
                                        {truncateText(item.description)}
                                    </Typography>
                                    <div className={styles.line} />
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.figures}>
                                        <div className={styles.subtitle}>
                                            <Typography
                                                variant="h2"
                                                className={styles.num}
                                            >
                                                {item.year} +
                                            </Typography>
                                            <Typography variant="h5">
                                                На рынке
                                            </Typography>
                                        </div>
                                        <div className={styles.subtitle2}>
                                            <Typography
                                                variant="h2"
                                                className={styles.num}
                                            >
                                                {item.count_of_spa} +
                                            </Typography>
                                            <Typography variant="h5">
                                                Довольных клиентов
                                            </Typography>
                                        </div>
                                        <div className={styles.subtitle}>
                                            <Typography
                                                variant="h2"
                                                className={styles.num}
                                            >
                                                {item.count_of_services} +
                                            </Typography>
                                            <Typography variant="h5">
                                                Видов услуг
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className={styles.buttonContainer}>
                                        <Button
                                            text="Подробнее о клинике"
                                            variant="secondary"
                                            onClick={handleNavigation}
                                            height="50px"
                                            className={styles.button}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </Container>
    );
};
