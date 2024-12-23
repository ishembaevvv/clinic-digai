import classNames from "classnames";
import styles from "./Icon.module.scss";

export const Watch = (props) => {
    const { color, size } = props;
    const className = classNames(styles[size], styles[color]);
    return (
        <svg
            className={className}
            stroke={color}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.99967 15.0007C11.337 15.0009 14.2104 12.6451 14.8644 9.37246C15.5184 6.09983 13.7711 2.82062 10.69 1.53817C7.60892 0.255725 4.05095 1.32674 2.18976 4.0969C0.328562 6.86706 0.681801 10.5659 3.03367 12.9337C4.34765 14.2566 6.13511 15.0006 7.99967 15.0007Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.91016 5.16357V8.57557H11.1772"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
