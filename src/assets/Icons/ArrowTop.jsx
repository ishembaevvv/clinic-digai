import classNames from "classnames";
import styles from "./Icon.module.scss";

export const ArrowTop = (props) => {
    const { color, size, rotate = 0 } = props;

    const className = classNames(styles[size], styles[color]);

    return (
        <svg
            className={className}
            width="335"
            height="9"
            viewBox="0 0 16 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: `rotate(${rotate}deg)` }}
        >
            <path
                d="M14.6666 7.99992L7.99992 1.33325L1.33325 7.99992"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
