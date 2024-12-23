import { ButtonIconLeft } from "@assets/Icons/ButtonIconLeft";
import { ButtonIconRight } from "@assets/Icons/ButtonIconRight";
import { Button } from "@ui/Buttons/Button/Button";
import { Container } from "@ui/Container/Container";
import { Slider } from "./Slider/Slider";
import { Typography } from "@ui/Typography/Typography";
import { useResultsStore } from "../store/useResultsStore";
import { useEffect, useState } from "react";
import { ArrowRight } from "@assets/Icons/ArrowRight";
import styles from "./ResultsBlock.module.scss";
import parse from "html-react-parser";

export const ResultsBlock = () => {
    const { data, fetchData } = useResultsStore();
    const [count, setCount] = useState(0);
    const [isTruncated, setIsTruncated] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 440);
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 440);
        };

        window.addEventListener("resize", handleResize);

        if (isSmallScreen) {
            setIsTruncated(true);
        } else {
            setIsTruncated(false);
        }
    }, []);
    if (!data || data.length === 0) return null;
    const currentData = data[count];
    const toggleTruncate = () => {
        setIsTruncated(!isTruncated);
    };
    const truncatedText =
        currentData.description.length > 150
            ? currentData.description.slice(0, 150)
            : currentData.description;
    return (
        <Container>
            <div className={styles.resultsWrapper}>
                <Typography
                    variant="h2"
                    weight="bold"
                    className={styles.textHeader}
                >
                    Результаты
                </Typography>
                <div className={styles.content}>
                    <div className={styles.slider}>
                        <Slider
                            beforeImg={currentData.image_before}
                            afterImg={currentData.image_after}
                        />
                    </div>
                    <div className={styles.textWrapper}>
                        <Typography variant="h5" className={styles.text}>
                            {isTruncated
                                ? truncatedText
                                : parse(currentData.description)}
                        </Typography>
                        {currentData.description.length > 150 && (
                            <div
                                style={{
                                    display: isSmallScreen ? "flex" : "none",
                                }}
                                className={styles.more}
                                onClick={toggleTruncate}
                            >
                                <Button
                                    variant="text"
                                    text={
                                        isTruncated ? "Читать далее" : "Закрыть"
                                    }
                                    color="var(--brand-primary)"
                                    className={styles.buttonMore}
                                />
                                <div
                                    style={{
                                        transform: isTruncated
                                            ? "rotate(90deg)"
                                            : "rotate(270deg)",
                                    }}
                                    className={styles.iconWrapper}
                                >
                                    <ArrowRight color="var(--brand-primary)" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.btnLeft}>
                        <Button
                            variant="icon"
                            icon={<ButtonIconLeft />}
                            onClick={() =>
                                setCount((prev) =>
                                    prev === 0 ? data.length - 1 : prev - 1
                                )
                            }
                            className={styles.buttonIcons}
                        />
                    </div>
                    <div className={styles.btnRight}>
                        <Button
                            variant="icon"
                            icon={<ButtonIconRight />}
                            onClick={() =>
                                setCount((prev) => (prev + 1) % data.length)
                            }
                            className={styles.buttonIcons}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};
