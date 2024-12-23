export const Burger = (props) => {
    return (
        <svg
            className={props.className}
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
        >
            <rect width="52" height="52" rx="8" fill="#7A8BBD" />
            <line
                x1="11.5"
                y1="16.5"
                x2="40.5"
                y2="16.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <line
                x1="11.5"
                y1="26.5"
                x2="40.5"
                y2="26.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <line
                x1="11.5"
                y1="36.5"
                x2="40.5"
                y2="36.5"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
            />
        </svg>
    );
};
