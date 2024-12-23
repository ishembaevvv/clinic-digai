import classNames from "classnames";
import styles from "./Icon.module.scss";

export const Geeks = (props) => {
    const { color, size } = props;

    const className = classNames(styles[size], styles[color]);
    return (
        <svg
            className={className}
            stroke={color}
            width="17"
            height="23"
            viewBox="0 0 17 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.78101 6.5257C9.65024 7.41253 9.163 8.21675 8.48835 8.80125C7.8137 9.38534 6.95081 9.743 6.06211 9.7501H6.05544H6.04878C4.27137 9.743 3.03618 8.29973 3.30437 6.5257C3.4343 5.63888 3.91489 4.83464 4.58954 4.25016C5.26418 3.66603 6.12706 3.30876 7.01494 3.30166H7.02243H7.02911C7.09907 3.30166 7.16819 3.30166 7.23816 3.30876L6.98829 4.99946C6.91832 4.98599 6.84837 4.97926 6.77257 4.97926C5.91885 4.98599 5.12259 5.67362 4.99099 6.5257C4.86606 7.37141 5.45825 8.06577 6.31197 8.06577C6.90416 8.06577 7.46221 7.72869 7.79453 7.24204H6.65347L6.86169 5.85509H9.80682L9.81432 6.07875C9.81932 6.22301 9.8035 6.37471 9.78101 6.5257ZM13.4358 9.51435L14.8692 0H2.64638L0.5 14.2711H3.56507L3.12697 17.2148H6.20786L2.81713 19.2971L2.26491 23H14.4877L16.5 9.51435H13.4358Z"
                fill="black"
            />
        </svg>
    );
};
