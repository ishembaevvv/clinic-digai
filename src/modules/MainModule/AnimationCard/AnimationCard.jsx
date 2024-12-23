import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AnimationCard.module.scss";
import { PATH } from "@utils/Constants/Constants";
import { Card } from "@ui/Card/Card";
import { ButtonIconLeft } from "@assets/Icons/ButtonIconLeft";
import { ButtonIconRight } from "@assets/Icons/ButtonIconRight";
import { Button } from "@ui/Buttons/Button/Button";
import { useServiceStore } from "@modules/ServiceModule/store/useServiceStore";
import { slugify } from "transliteration";

export const AnimationCard = ({ data, type }) => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const { handleCardClick } = useServiceStore();

    const buttonTextMap = {
        services: "Смотреть все услуги",
        specialists: "Смотреть всех врачей",
        news: "Смотреть все новости",
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container && container.scrollWidth <= container.offsetWidth) {
            setIsNextDisabled(true);
            setIsPrevDisabled(true);
        } else {
            setIsNextDisabled(false);
            setIsPrevDisabled(true);
        }
    }, [data]);

    const handleNewsClick = (id) => {
        const selectedData = data.find((item) => item.id === id);
        if (selectedData) {
            const normalizedTitle = selectedData.title.trim().toLowerCase();
            const transliteratedTitle = slugify(normalizedTitle);

            navigate(`${PATH.news}/${transliteratedTitle}`, {
                state: { news: selectedData, crumbEl: selectedData.title },
            });
        }
    };

    const handleNext = () => {
        const container = containerRef.current;
        const cardWidth = container.querySelector(
            `.${styles.cardItem}`
        ).offsetWidth;
        const newScrollRight = container.scrollLeft + cardWidth + 20;

        container.scrollTo({
            left: newScrollRight,
            behavior: "smooth",
        });
        setIsPrevDisabled(false);
        if (newScrollRight + container.offsetWidth >= container.scrollWidth) {
            setIsNextDisabled(true);
        }
    };

    const handlePrev = () => {
        const container = containerRef.current;
        const cardWidth = container.querySelector(
            `.${styles.cardItem}`
        ).offsetWidth;
        const newScrollLeft = container.scrollLeft - cardWidth - 20;

        container.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
        });
        setIsNextDisabled(false);
        if (newScrollLeft <= 0) {
            setIsPrevDisabled(true);
        }
    };

    return (
        <div className={styles.containerCardWrapper}>
            <div className={styles.containerCard} ref={containerRef}>
                {data?.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        className={styles.cardItem}
                    >
                        <Card
                            type={type}
                            imageSrc={item.image}
                            textHeader={item.title || item.full_name}
                            text={item.description || item.position}
                            onClick={() => {
                                if (type === "services") {
                                    handleCardClick(item, navigate);
                                } else if (type === "news") {
                                    handleNewsClick(item.id);
                                }
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonsIcon}>
                    <Button
                        icon={<ButtonIconLeft />}
                        variant="icon"
                        onClick={handlePrev}
                        disabled={isPrevDisabled}
                        width="50px"
                    />
                    <Button
                        icon={<ButtonIconRight />}
                        variant="icon"
                        onClick={handleNext}
                        disabled={isNextDisabled}
                        width="50px"
                    />
                </div>
                <div className={styles.buttonsText}>
                    <Button
                        text={buttonTextMap[type]}
                        variant="secondary"
                        onClick={() => navigate(PATH[type], { replace: true })}
                        height="50px"
                        className={styles.button}
                    />
                </div>
            </div>
        </div>
    );
};
