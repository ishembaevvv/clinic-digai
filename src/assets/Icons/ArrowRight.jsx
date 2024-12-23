import classNames from "classnames";
import styles from "./Icon.module.scss";
export const ArrowRight = (props) => {
    const { color, size } = props;

    const className = classNames(styles[size], styles[color]);
    return (
        <svg
            className={className}
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 1L6 6L1 11"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
