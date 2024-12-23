import classNames from "classnames";
import styles from "./Icon.module.scss";

export const Vector = (props) => {
    const { color, size } = props;
    const className = classNames(styles[size], styles[color]);
    return (
        <svg
            className={className}
            stroke={color}
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.64688 4.03358L0.0975246 0.556902C-0.0306358 0.431394 -0.0327465 0.225785 0.0927619 0.0976249C0.218541 -0.0308061 0.42415 -0.0326465 0.552039 0.0928619L4.34056 3.80394C4.40318 3.86553 4.43836 3.9498 4.43809 4.03753C4.43755 4.12526 4.40161 4.20931 4.33818 4.27009L0.549658 7.90935C0.486768 7.96985 0.40564 8 0.324782 8C0.239432 8 0.154352 7.96644 0.0906511 7.90009C-0.0335583 7.77085 -0.0296074 7.56524 0.099906 7.44108L3.64688 4.03358Z"
                fill="#828282"
            />
        </svg>
    );
};
