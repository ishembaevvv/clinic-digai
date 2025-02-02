import classNames from "classnames";
import styles from "./Icon.module.scss";

export const RightArrowLong = (props) => {
    const { color, size } = props;

    const className = classNames(styles[size], styles[color]);
    return (
        <svg
            className={className}
            stroke={color}
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="Vector">
                <path
                    id="Vector-12"
                    d="M9.23276 10.4569C8.93281 10.7426 8.92123 11.2173 9.2069 11.5172C9.49256 11.8172 9.96729 11.8288 10.2672 11.5431L9.23276 10.4569ZM15.5172 6.5431C15.8172 6.25744 15.8288 5.78271 15.5431 5.48276C15.2574 5.18281 14.7827 5.17123 14.4828 5.4569L15.5172 6.5431ZM14.4828 6.5431C14.7827 6.82877 15.2574 6.81719 15.5431 6.51724C15.8288 6.21729 15.8172 5.74256 15.5172 5.4569L14.4828 6.5431ZM10.2672 0.456897C9.96729 0.171232 9.49256 0.182811 9.2069 0.482759C8.92123 0.782706 8.93281 1.25744 9.23276 1.5431L10.2672 0.456897ZM15 6.75C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25V6.75ZM1 5.25C0.585787 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585787 6.75 1 6.75V5.25ZM10.2672 11.5431L15.5172 6.5431L14.4828 5.4569L9.23276 10.4569L10.2672 11.5431ZM15.5172 5.4569L10.2672 0.456897L9.23276 1.5431L14.4828 6.5431L15.5172 5.4569ZM15 5.25L1 5.25V6.75L15 6.75V5.25Z"
                    fill="white"
                />
            </g>
        </svg>
    );
};
