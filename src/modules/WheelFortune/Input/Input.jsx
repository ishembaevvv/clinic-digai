import { Typography } from "@ui/Typography/Typography";
import styles from "./Input.module.scss";

import { Button } from "@ui/Buttons/Button/Button";
import { PhoneInput } from "@modules/WheelFortune/components/PhoneInput/PhoneInput";
import { useEffect, useState } from "react";

export const Input = ({
    type = "text",
    name,
    placeholder = "Введите номер телефона",
    error = false,
    onChange,
    className,
    handleSpin,
    isSubmitting,
}) => {
    const {
        value,
        validationError,
        isFocused,
        handleChange,
        handleFocus,
        handleBlur,
    } = PhoneInput(onChange);
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

    const inputClasses = `${styles.input} ${className} ${validationError || error ? styles.inputError : ""}`;
    const isPlaceholderVisible = !value && !isFocused;

    return (
        <div>
            <div className={styles.inputWrapper}>
                <input
                    type={type}
                    value={value}
                    name={name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={inputClasses}
                    placeholder={isPlaceholderVisible ? placeholder : ""}
                />
                {isPlaceholderVisible && (
                    <Typography variant="h6" className={styles.placeholder}>
                        {placeholder}
                    </Typography>
                )}
            </div>
            <div className={styles.btnDiv}>
                <Button
                    text="Кликнуть!"
                    variant="primary"
                    onClick={handleSpin}
                    className={styles.customButton}
                    width={buttonWidth}
                    disabled={
                        value.length < 13 || !!validationError || isSubmitting
                    }
                    color="white"
                />
            </div>
        </div>
    );
};
