import styles from "./Breadcrumb.module.scss";
import { Link, useLocation } from "react-router-dom";
import { PathTranslations, PATH } from "@utils/Constants/Constants";
import { Typography } from "@ui/Typography/Typography";
import { Vector } from "@assets/Icons/Vector";
import { useEffect, useState } from "react";
export const Breadcrumb = ({ title }) => {
    const location = useLocation();
    const initialCrumbEl = location.state?.crumbEl;
    const [crumbEl, setCrumbEl] = useState(initialCrumbEl);

    useEffect(() => {
        const crumbFromStorage = localStorage.getItem("breadcrumb");
        setCrumbEl(location.state?.crumbEl || crumbFromStorage || title);
    }, [location.state, title]);

    let currentLink = "";
    const crumbs = location.pathname
        .split("/")
        .filter((crumb) => crumb !== "")
        .map((crumb, index) => {
            const crumbName = PathTranslations[crumb] || crumb;
            currentLink += `/${crumb}`;
            return { name: crumbName, link: currentLink, index };
        });
    const breadcrumbItems = [{ name: "Главная", link: PATH.home }, ...crumbs];
    if (location.pathname.includes("/procedures/")) {
        breadcrumbItems.pop();
    }
    if (breadcrumbItems[2]) {
        breadcrumbItems[2] = { name: crumbEl, link: breadcrumbItems[2].link };
    }

    return (
        <div className={styles.breadcrumbWrapper}>
            {breadcrumbItems.map((item, index) => {
                const isActive = index === breadcrumbItems.length - 1;

                return (
                    <div key={index}>
                        {isActive ? (
                            <span className={styles.crumbContainer}>
                                <Typography
                                    className={`${styles.crumb} ${styles.isActive}`}
                                    variant="h6"
                                >
                                    {item.name}
                                </Typography>
                            </span>
                        ) : (
                            <Link
                                to={item.link}
                                className={styles.crumbContainer}
                            >
                                <Typography
                                    className={styles.crumb}
                                    variant="h6"
                                >
                                    {item.name}
                                </Typography>
                                <div className={styles.crumbIcon}>
                                    <Vector color="var(--grey-grey3)" />
                                </div>
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
