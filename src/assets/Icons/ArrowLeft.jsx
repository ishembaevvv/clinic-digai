import classNames from "classnames";
import styles from "./Icon.module.scss";
export const ArrowLeft = (props) => {
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
                d="M6 1L1 6L6 11"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
