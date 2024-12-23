import { useEffect, useState } from "react";
import { Typography } from "@ui/Typography/Typography";
import { Card } from "@ui/Card/Card";
import { ArrowRight } from "@assets/Icons/ArrowRight";
import { Button } from "@ui/Buttons/Button/Button";
import { useServiceStore } from "@modules/ServiceModule/store/useServiceStore";
import styles from "./ServiceOpenContent.module.scss";
import { useLocation } from "react-router-dom";

export const ServiceOpenContent = () => {
    const { serviceTitle, procedures, fetchData } = useServiceStore();
    const [isTruncated, setIsTruncated] = useState({});
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1250);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 440);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsDesktop(width >= 1250);
            setIsSmallScreen(width < 440);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!Object.keys(procedures).length) {
            fetchData();
        }
    }, [fetchData, procedures]);

    const service = location.state?.service || {
        title: serviceTitle,
    };

    const handleTruncateToggle = (id) => {
        setIsTruncated((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const truncatedProcedures = procedures.map((procedure) => {
        const truncatedDescription =
            procedure.description.length > 250
                ? `${procedure.description.slice(0, 250)}...`
                : procedure.description;
        return {
            ...procedure,
            truncatedDescription,
        };
    });

    return (
        <div className={styles.openedWrapper}>
            {service.title && (
                <Typography variant="h1" weight="bold" className={styles.title}>
                    {service.title.toUpperCase()}
                </Typography>
            )}
            <div className={styles.columnContainer}>
                {truncatedProcedures.map((procedure, index) => (
                    <div
                        key={procedure.id || procedure.title}
                        className={`${styles.cardWrapper} ${index % 2 === 0 ? styles.odd : ""}`}
                    >
                        <div className={styles.textContainer}>
                            <Typography
                                variant="h3"
                                weight="semi-bold"
                                className={styles.bodyHeader}
                            >
                                {procedure.title}
                            </Typography>
                            {!isDesktop && procedure.indications && (
                                <Card
                                    type="procedure"
                                    imageSrc={procedure.image}
                                    textHeader="Показание к процедуре:"
                                    text={procedure.indications}
                                    className={styles.card}
                                />
                            )}
                            <Typography
                                variant="h5"
                                className={styles.bodyText}
                            >
                                {isSmallScreen
                                    ? isTruncated[procedure.id]
                                        ? procedure.description
                                        : procedure.truncatedDescription
                                    : procedure.description}
                            </Typography>
                            {isSmallScreen &&
                                procedure.description.length > 150 && (
                                    <div
                                        className={styles.more}
                                        onClick={() =>
                                            handleTruncateToggle(procedure.id)
                                        }
                                    >
                                        <Button
                                            variant="text"
                                            text={
                                                isTruncated[procedure.id]
                                                    ? "Закрыть"
                                                    : "Читать далее"
                                            }
                                            color="var(--brand-primary)"
                                            className={styles.buttonMore}
                                        />
                                        <div
                                            style={{
                                                transform: isTruncated[
                                                    procedure.id
                                                ]
                                                    ? "rotate(270deg)"
                                                    : "rotate(90deg)",
                                            }}
                                            className={styles.iconWrapper}
                                        >
                                            <ArrowRight color="var(--brand-primary)" />
                                        </div>
                                    </div>
                                )}
                        </div>
                        {isDesktop && procedure.indications && (
                            <Card
                                type="procedure"
                                imageSrc={procedure.image}
                                textHeader="Показание к процедуре:"
                                text={procedure.indications}
                                className={styles.card}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
