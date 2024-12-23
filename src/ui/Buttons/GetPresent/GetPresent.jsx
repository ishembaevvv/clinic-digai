import { useState } from "react";
import styles from "./GetPresent.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Gift } from "@assets/Icons/Gift";

export const GetPresent = ({ onClick }) => {
    const [showButton] = useState(true);

    return (
        showButton && (
            <button className={styles.button2} onClick={onClick}>
                <Typography
                    variant="h6"
                    weight="semibold"
                    className={styles.text}
                >
                    Получить подарок
                </Typography>
                <div className={styles.icon}>
                    <Gift />
                </div>
            </button>
        )
    );
};
