import { useRef, useState } from "react";
import styles from "./Pagination.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { ArrowRight } from "@assets/Icons/ArrowRight";
import { ArrowLeft } from "@assets/Icons/ArrowLeft";
import { CardPages } from "@ui/CardPages/CardPages";

export const Pagination = ({
    variant,
    perPage,
    pages = [],
    onClick,
    textHeader,
    text,
    imageSrc,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const contentRef = useRef(null);

    const lastPageIndex = currentPage * perPage;
    const firstPageIndex = lastPageIndex - perPage;
    const currentPages = pages?.slice(firstPageIndex, lastPageIndex);

    const totalPageCount = Math.ceil(pages?.length / perPage);
    const pageNumbers = Array.from({ length: totalPageCount }, (_, i) => i + 1);

    const scrollToTop = () => {
        if (contentRef.current) {
            const offset = 230;
            setTimeout(() => {
                window.scrollTo({
                    top: contentRef.current.offsetTop - offset,
                    behavior: "smooth",
                });
            }, 100);
        }
    };

    const handleClickPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        scrollToTop();
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
            scrollToTop();
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPageCount) {
            setCurrentPage((prev) => prev + 1);
            scrollToTop();
        }
    };

    const keyMap = {
        specialists: { titleKey: textHeader, bodyKey: text, imgKey: imageSrc },
        procedure: { titleKey: textHeader, bodyKey: text },
        news: { titleKey: textHeader, bodyKey: text, imgKey: imageSrc },
        services: { titleKey: textHeader, bodyKey: text, imgKey: imageSrc },
    };
    const { titleKey, bodyKey } = keyMap[variant];

    return (
        <div className={styles.paginationWrapper}>
            <div className={styles.content} ref={contentRef}>
                {currentPages?.map((item, index) => (
                    <CardPages
                        type={variant}
                        imageSrc={item[imageSrc]}
                        textHeader={item[titleKey]}
                        text={item[bodyKey]}
                        onClick={() => onClick(item)}
                        key={item.id || index}
                    />
                ))}
            </div>

            {pages?.length > perPage && (
                <ul className={styles.pagination}>
                    <li
                        onClick={handlePrevPage}
                        className={`${styles.paginateBtn} ${currentPage === 1 ? styles.disabled : ""}`}
                    >
                        <ArrowLeft />
                    </li>
                    {pageNumbers.map((num) => (
                        <Typography
                            variant="h5"
                            className={`${styles.page} ${styles.paginateBtn} ${currentPage === num ? styles.active : ""}`}
                            onClick={() => handleClickPage(num)}
                            key={num}
                        >
                            {num}
                        </Typography>
                    ))}
                    <li
                        onClick={handleNextPage}
                        className={`${styles.paginateBtn} ${currentPage === totalPageCount ? styles.disabled : ""}`}
                    >
                        <ArrowRight />
                    </li>
                </ul>
            )}
        </div>
    );
};
