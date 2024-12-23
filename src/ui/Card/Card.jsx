import { useState } from "react";
import styles from "./Card.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Button } from "@ui/Buttons/Button/Button";
import { RightArrowBlack } from "@assets/Icons/RightArrowBlack";
import { useNavigate } from "react-router-dom";
import { PATH } from "@utils/Constants/Constants";

const cardTypes = {
    specialists: {
        cardClass: styles.docCard,
        imageClass: styles.docImage,
        textClass: styles.docText,
        textContainer: styles.docTextContainer,
    },
    services: {
        cardClass: styles.servCard,
        imageClass: styles.servImage,
        textClass: styles.servText,
        textContainer: styles.servTextContainer,
    },
    procedure: {
        cardClass: styles.procedureCard,
        imageClass: styles.procedureImage,
        textClass: styles.procedureText,
        textContainer: styles.procedureTextContainer,
    },
    news: {
        cardClass: styles.newsCard,
        imageClass: styles.newsImage,
        textClass: styles.newsText,
        textContainer: styles.newsTextContainer,
    },
};

export const Card = ({ type, imageSrc, textHeader, text, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardConfig = cardTypes[type];
    const navigate = useNavigate();

    if (!cardConfig) {
        return null;
    }

    const { cardClass, imageClass, textClass, textContainer } = cardConfig;

    return (
        <div
            className={cardClass}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={imageClass}>
                <img
                    src={imageSrc}
                    alt="Card image"
                    className={isHovered ? styles.zoomIn : styles.zoomOut}
                />
            </div>
            <div
                className={textClass}
                onClick={() => {
                    if (type === "specialists") {
                        navigate(PATH.specialists);
                    }
                }}
            >
                <div className={textContainer}>
                    <Typography variant="h4" weight="semi-bold">
                        {textHeader}
                    </Typography>
                    <Typography variant="h5">{text}</Typography>
                </div>
                {(type === "services" || type === "news") && (
                    <div className={styles.btnMore}>
                        <Button
                            text="Подробнее"
                            variant="text"
                            onClick={onClick}
                            className={styles.detailsButton}
                            hoverColor="var(--button-hovertext)"
                            activeColor="var(--button-active)"
                        >
                            <div className={styles.icon}>
                                <RightArrowBlack />
                            </div>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
