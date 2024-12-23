import { useEffect } from "react";
import { Typography } from "@ui/Typography/Typography";
import { Pagination } from "@ui/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import styles from "./NewsContent.module.scss";
import { useNewsStore } from "../store/useNewsStore";
import { useState } from "react";

export const NewsContent = () => {
    const { data, fetchData, handleCardClick } = useNewsStore();
    const navigate = useNavigate();
    const [perPage, setPerPage] = useState(9);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    useEffect(() => {
        const updatePerPage = () => {
            setPerPage(window.innerWidth < 1024 ? 6 : 9);
        };
        updatePerPage();
        window.addEventListener("resize", updatePerPage);
        return () => window.removeEventListener("resize", updatePerPage);
    }, []);
    return (
        <div className={styles.newsWrapper}>
            <div className={styles.content}>
                <Typography variant="h1" weight="bold" className={styles.title}>
                    НОВОСТИ
                </Typography>
                {data && (
                    <Pagination
                        variant="news"
                        textHeader="title"
                        text="description"
                        perPage={perPage}
                        pages={data}
                        imageSrc="main_image"
                        onClick={(selectedNews) =>
                            handleCardClick(selectedNews, navigate)
                        }
                    />
                )}
            </div>
        </div>
    );
};
