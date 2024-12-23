import { useState } from "react";
import style from "./Slider.module.scss";
import { ArrowRight } from "@assets/Icons/ArrowRight";
import { ArrowLeft } from "@assets/Icons/ArrowLeft";

export const Slider = ({ beforeImg, afterImg }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderMove = (e) => {
        const container = e.target.closest(`.${style.container}`);
        const containerRect = container.getBoundingClientRect();
        const newSliderPosition =
            ((e.clientX - containerRect.left) / containerRect.width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, newSliderPosition)));
    };

    return (
        <div className={style.box}>
            <div
                className={style.container}
                onMouseMove={handleSliderMove}
                onTouchMove={(e) => handleSliderMove(e.touches[0])}
            >
                <img
                    src={afterImg}
                    className={`${style.image} ${style.afterImage}`}
                    alt="After"
                />
                <img
                    src={beforeImg}
                    className={style.image}
                    alt="Before"
                    style={{
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                />
                <div
                    className={style.customHandle}
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className={style.arrow}>
                        <ArrowLeft />
                    </div>
                    <div className={style.arrow}>
                        <ArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
