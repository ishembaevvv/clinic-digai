import { useRef, useState, useEffect } from "react";
import styles from "./WheelContent.module.scss";
import { Loader } from "@ui/Loader/Loader";
import { Close } from "@assets/Icons/Close";
import { PhoneForm } from "../PhoneForm/PhoneForm";
import { ResultText } from "../ResultText/ResultText";
import { WheelContainer } from "../WheelContainer/WheelContainer";
import { useWheelStore } from "@modules/WheelFortune/store/useWheelStore";
import { PhoneInput } from "../PhoneInput/PhoneInput";

export const WheelContent = ({ onPrizeReceived }) => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [currentRotation, setCurrentRotation] = useState(0);
    const [hasSpan, setHasSpan] = useState(false);
    const [prizeIndex, setPrizeIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [setIsWheelStopped] = useState(false);
    const [justifyContent, setJustifyContent] = useState("flex-start");
    const {
        data,
        loading,
        fetchData,
        setPrizeName,
        setPrizeNameId,
        setDiscount,
    } = useWheelStore();
    const wheelRef = useRef(null);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const degreeses = 360 / data.length;
    const spins = 4;
    const animationTime = 5000;

    const {
        value,
        validationError,
        handleChange,
        handleFocus,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = PhoneInput({ onChange: () => {} });

    const handleSpin = (e) => {
        e.preventDefault();
        if (validationError || isSubmitting) return;

        setIsLoading(true);
        handleSubmit();

        const randomIndex = Math.floor(Math.random() * data.length);
        setPrizeIndex(randomIndex);
        setPrizeName(data[randomIndex]?.name);
        setPrizeNameId(data[randomIndex]?.id);
        setDiscount(data[randomIndex]?.discount);
        if (!data[randomIndex]?.name) {
            setIsLoading(false);
            return;
        }
        spinWheel(randomIndex);
    };

    const spinWheel = (index) => {
        setIsSpinning(true);
        const segmentDegrees = degreeses * index;
        const extraRotation = 360 * spins;
        const rotate =
            currentRotation + extraRotation - segmentDegrees + degreeses * 2;
        animateSpin(rotate, segmentDegrees);
    };

    const animateSpin = (rotate, targetRotation) => {
        let start = null;
        const startRotation = currentRotation;

        const animate = (time) => {
            if (!start) start = time;
            const progress = Math.min((time - start) / animationTime, 1);
            const newRotation =
                (startRotation +
                    (rotate - startRotation) * easeInOut(progress)) %
                360;

            if (progress < 1) {
                setCurrentRotation(newRotation);
                requestAnimationFrame(animate);
            } else {
                setIsSpinning(false);
                setIsLoading(false);
                setHasSpan(true);
                setIsWheelStopped(true);
                setCurrentRotation(targetRotation);
                onPrizeReceived();
            }
        };

        requestAnimationFrame(animate);
    };

    const easeInOut = (time) => 0.5 * (1 - Math.cos(Math.PI * time));

    const handleClose = () => {
        setIsVisible(false);
        document.body.classList.remove(styles.noScroll);
    };

    useEffect(() => {
        document.body.classList.add(styles.noScroll);
        return () => {
            document.body.classList.remove(styles.noScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 350 && window.innerWidth <= 440) {
                setJustifyContent("center");
            } else {
                setJustifyContent("flex-start");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    if (data[prizeIndex]) {
        localStorage.setItem("prizeReceived", "true");
    }

    if (loading) return;

    return (
        <div className={isVisible ? styles.overlay : styles.hidden}>
            <div className={styles.wrap} style={{ justifyContent }}>
                <div className={styles.wheel_of_fortune}>
                    <WheelContainer
                        wheelRef={wheelRef}
                        currentRotation={currentRotation}
                        prizes={data}
                        degreeses={degreeses}
                        isSpinning={isSpinning}
                    />
                </div>
                <div className={styles.widgetClose} onClick={handleClose}>
                    <Close
                        fill="var(--black-black1)"
                        width="24px"
                        height="24px"
                    />
                </div>
                {isLoading ? (
                    <Loader />
                ) : hasSpan ? (
                    <ResultText
                        prize={data[prizeIndex]}
                        onClose={handleClose}
                    />
                ) : (
                    <div className={styles.wheel_text}>
                        <PhoneForm
                            value={value}
                            validationError={validationError || ""}
                            handleChange={handleChange}
                            handleFocus={handleFocus}
                            handleBlur={handleBlur}
                            handleSpin={handleSpin}
                            isSubmitting={isSubmitting}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
