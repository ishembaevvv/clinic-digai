import classNames from "classnames";
import styles from "./Icon.module.scss";

export const Whatsapp = (props) => {
    const { size } = props;
    const className = classNames(styles[size]);

    return (
        <svg
            className={className}
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5 22.5001C18.1736 22.4991 22.2839 19.4093 23.5836 14.9202C24.8833 10.431 23.0595 5.62311 19.1094 3.12539C15.1593 0.62768 10.0338 1.04142 6.53543 4.14039C3.03707 7.23936 2.00805 12.2775 4.011 16.5001L1.5 22.5001L8.088 21.0001C9.72134 21.9845 11.5929 22.5033 13.5 22.5001Z"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5614 10.5989C9.70742 10.5915 9.02047 9.89451 9.02542 9.04052C9.03037 8.18653 9.72535 7.49755 10.5794 7.50001C11.4333 7.50247 12.1244 8.19544 12.1244 9.04944C12.1203 9.90876 11.4207 10.6023 10.5614 10.5989V10.5989Z"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.875 14.8776C14.8702 15.5101 15.2474 16.0831 15.8303 16.3287C16.4132 16.5742 17.0867 16.4439 17.5358 15.9986C17.985 15.5532 18.1212 14.8809 17.8807 14.2959C17.6402 13.7109 17.0706 13.3288 16.438 13.3281C15.5787 13.3248 14.8792 14.0183 14.875 14.8776V14.8776Z"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9.00007 9.0498C8.97907 14.2503 13.9501 16.9953 16.4386 16.4268"
                strokeWidth="2.25"
                strokeLinecap="round"
            />
        </svg>
    );
};
