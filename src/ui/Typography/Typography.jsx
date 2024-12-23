import styles from "./Typography.module.scss";
import { truncateString } from "@utils/Helpers/StringUtils";

export const Typography = ({
    variant,
    weight,
    children,
    className,
    truncate = 0,
    id,
    href,
    ...props
}) => {
    const Tags = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        h5: "h5",
        h6: "h6",
    };

    const classNameGenerated = [styles[variant], styles[weight], className]
        .filter(Boolean)
        .join(" ")
        .trim();

    const TagName = Tags[variant] || "p";

    return (
        <TagName id={id} className={classNameGenerated} href={href} {...props}>
            {!truncate ? children : truncateString(children, truncate)}
        </TagName>
    );
};
