import classNames from "classnames";
import styles from "./Icon.module.scss";

export const Instagram = (props) => {
    const { color, size } = props;

    const className = classNames(styles[size], styles[color]);
    return (
        <svg
            className={className}
            stroke={color}
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 1.5H7.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5Z"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 13.1935 16.0259 14.3381 15.182 15.182C14.3381 16.0259 13.1935 16.5 12 16.5Z"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="16.5"
                y="7.5"
                width="3"
                height="3"
                rx="1.5"
                transform="rotate(-90 16.5 7.5)"
                fill="white"
            />
            <rect
                x="17.25"
                y="6.75"
                width="1.5"
                height="1.5"
                rx="0.75"
                transform="rotate(-90 17.25 6.75)"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
};
