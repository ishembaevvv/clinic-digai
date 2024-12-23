import { useEffect, useState } from "react";
import styles from "./AboutContent.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { useAboutStore } from "@modules/MainModule/AboutBlock/store/useAboutStore";

export const AboutContent = () => {
    const { data, fetchData } = useAboutStore();
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        fetchData();

        const handleResize = () => {
            setIsTablet(window.innerWidth > 440 && window.innerWidth <= 780);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [fetchData]);

    const truncateText = (text, maxLength = 229) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "." : text;
    };
    const starText = (text, start = 230) => {
        return text.length > start ? text.slice(start) : text;
    };

    return (
        <div className={styles.aboutContainer}>
            <Typography
                variant="h1"
                weight="bold"
                className={styles.textHeader}
            >
                О КЛИНИКЕ
            </Typography>
            <div className={styles.aboutContent}>
                {data &&
                    data.map((item, index) => (
                        <div key={index}>
                            <div className={styles.aboutContent}>
                                <div className={styles.contentImg}>
                                    <img src={item.image} alt="about img" />
                                </div>
                                <div className={styles.textContainer}>
                                    <div className={styles.textWrapper}>
                                        <Typography
                                            variant="h5"
                                            className={styles.text}
                                        >
                                            {isTablet
                                                ? truncateText(item.description)
                                                : item.description}
                                        </Typography>
                                    </div>
                                    <div className={styles.line} />
                                    <div className={styles.numbers}></div>
                                    {!isTablet && (
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
                                    )}
                                </div>
                            </div>
                            {isTablet && (
                                <div>
                                    <div className={styles.textWrapper2}>
                                        <Typography
                                            variant="h5"
                                            className={styles.text}
                                        >
                                            {starText(item.description)}
                                        </Typography>
                                    </div>
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
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};
