import classNames from "classnames";
import styles from "./Icon.module.scss";

export const TimeThin = (props) => {
    const { color, size } = props;
    const className = classNames(styles[size], styles[color]);
    return (
        <svg
            className={className}
            stroke={color}
            width="35"
            height="35"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Vector">
                <path
                    id="Vector-20"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9992 36.5018C27.3425 36.5023 34.526 30.6127 36.161 22.4312C37.796 14.2496 33.4278 6.05155 25.725 2.84543C18.0223 -0.360686 9.12737 2.31684 4.47439 9.24224C-0.178596 16.1676 0.704503 25.4147 6.58418 31.3343C9.86913 34.6415 14.3378 36.5015 18.9992 36.5018Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    id="Vector-21"
                    d="M18.7766 11.9092V20.4392H26.9441"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
};
