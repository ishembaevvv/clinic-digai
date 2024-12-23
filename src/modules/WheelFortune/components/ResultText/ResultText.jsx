import { Typography } from "@ui/Typography/Typography";
import styles from "./ResultText.module.scss";
import { Button } from "@ui/Buttons/Button/Button";
import { useEffect, useState } from "react";

export const ResultText = ({ prize, onClose }) => {
    const [buttonWidth, setButtonWidth] = useState("369px");

    useEffect(() => {
        const btnResize = () => {
            if (window.innerWidth <= 440) {
                const width = `calc(320px + (335 - 315) * ((100vw - 320px) / (440 - 320)))`;
                setButtonWidth(width);
            } else if (window.innerWidth <= 790) {
                const adapBtn = `calc(300px + (369 - 300) * ((100vw - 700px) / (790 - 700)))`;
                setButtonWidth(adapBtn);
            } else {
                setButtonWidth("369px");
            }
        };

        btnResize();
        window.addEventListener("resize", btnResize);
        return () => {
            window.removeEventListener("resize", btnResize);
        };
    }, []);
    if (!prize || !prize.discount || !prize.name) {
        return null;
    }
    return (
        <div className={styles.wheel_text}>
            <div className={styles.text}>
                <Typography variant="h3" weight="black">
                    Поздравляем, вы выиграли приз: Скидка {prize.discount}% на{" "}
                    {prize.name}
                </Typography>
                <Typography variant="h5" weight="semi-bold">
                    Не пропустите звонок, мы скоро свяжемся с&nbsp;вами!
                </Typography>
                <Button
                    text="Закрыть"
                    variant="primary"
                    onClick={onClose}
                    color="white"
                    width={buttonWidth}
                />
            </div>
        </div>
    );
};
