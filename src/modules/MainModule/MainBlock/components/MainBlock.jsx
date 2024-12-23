import styles from "./MainBlock.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Button } from "@ui/Buttons/Button/Button";
import { useEffect, useState } from "react";
import { useMainBlockStore } from "../store/useMainBlockStore";
import { WheelContent } from "@modules/WheelFortune";
import { GetPresent } from "@ui/Buttons/GetPresent/GetPresent";
import { useContactsInfo } from "@utils/Helpers/ContactsUtils";

export const MainBlock = () => {
    const [isWheelVisible, setIsWheelVisible] = useState(false);
    const [hasReceivedPrize, setHasReceivedPrize] = useState(false);
    const { data, fetchData } = useMainBlockStore();
    const contactsInfo = useContactsInfo();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        const prizeReceived = localStorage.getItem("prizeReceived");
        if (prizeReceived) {
            setHasReceivedPrize(true);
        }
    }, []);

    useEffect(() => {
        if (isWheelVisible) {
            document.body.classList.add("noScroll");
        } else {
            document.body.classList.remove("noScroll");
        }
        return () => document.body.classList.remove("noScroll");
    }, [isWheelVisible]);

    const handlePrizeReceived = () => {
        setHasReceivedPrize(true);
    };

    const handleWhatsapp = () => {
        const sanitizedPhone = contactsInfo?.phone.replace(/\D/g, "");
        window.open(`https://wa.me/${sanitizedPhone}`, "_blank");
    };

    return (
        <div
            className={styles.main}
            style={{
                "--background-image": data ? `url(${data})` : "none",
            }}
        >
            <div className={styles.wrapper}>
                <div className={styles.slogan}>
                    <Typography variant="h1">CLINIC DR. DIGAI</Typography>
                    <Typography
                        variant="h5"
                        weight="semi-bold"
                        className={styles.text}
                    >
                        Бесплатная консультация дерматокосметолога! Получите
                        профессиональную оценку состояния вашей кожи
                        и&nbsp;рекомендации от&nbsp;эксперта.
                    </Typography>

                    <div className={styles.buttonsPresent}>
                        <Button
                            variant="primary"
                            text="Записаться"
                            onClick={handleWhatsapp}
                            aria-label="Записаться на консультацию"
                            color="white"
                            height="50px"
                            className={styles.button}
                        />
                        {!hasReceivedPrize && (
                            <GetPresent
                                className={styles.present}
                                onClick={() => setIsWheelVisible(true)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div
                className={`${styles.wheelWrapper} ${
                    isWheelVisible ? styles.visible : ""
                }`}
            >
                {isWheelVisible && (
                    <WheelContent
                        onClose={() => setIsWheelVisible(false)}
                        onPrizeReceived={handlePrizeReceived}
                    />
                )}
            </div>
        </div>
    );
};
