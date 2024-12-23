import { Typography } from "@ui/Typography/Typography";
import styles from "./WheelContainer.module.scss";
import { useEffect } from "react";

export const WheelContainer = ({
    currentRotation,
    prizes,
    degreeses,
    wheelRef,
    isSpinning,
}) => {
    useEffect(() => {
        if (wheelRef.current) {
            wheelRef.current.style.animation = isSpinning
                ? "none"
                : "initial-spin 10s linear infinite";
        }
    }, [isSpinning]);

    const segmentStyle =
        prizes.length === 2
            ? styles.twoSegmentStyle
            : prizes.length === 3
              ? styles.threeSegmentStyle
              : prizes.length === 4
                ? styles.fourSegmentStyle
                : prizes.length === 5
                  ? styles.fiveSegmentStyle
                  : prizes.length === 6
                    ? styles.sixSegmentStyle
                    : prizes.length === 7
                      ? styles.sevenSegmentStyle
                      : prizes.length === 8
                        ? styles.eightSegmentStyle
                        : "";

    const formatPrizeText = (text) => {
        return text.length > 15 ? text.slice(0, 13) + "..." : text;
    };

    return (
        <div>
            <div
                className={`${styles.wheel_of_fortune__container} ${isSpinning ? styles.spinning : ""}`}
                style={{ transform: `rotate(${currentRotation}deg)` }}
                ref={wheelRef}
            >
                <div className={styles.dot}></div>
                {prizes.map((prize, index) => (
                    <div
                        key={index}
                        className={styles.wheel_of_fortune__segment}
                        style={{
                            transform: `rotate(${degreeses * index - degreeses / 2}deg) skewX(${degreeses - 90}deg)`,
                        }}
                    />
                ))}

                {prizes.map((prize, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.wheel_of_fortune__label}
                            style={{
                                transform: `rotate(${degreeses * index}deg)`,
                            }}
                        >
                            <div
                                className={`${styles.wheel_of_fortune__label_text} ${segmentStyle}`}
                            >
                                <Typography variant="h4" weight="bold-akrobat">
                                    {formatPrizeText(prize.name)}{" "}
                                    {prize.discount}%
                                </Typography>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.wheel_of_fortune__arrow}></div>
        </div>
    );
};
