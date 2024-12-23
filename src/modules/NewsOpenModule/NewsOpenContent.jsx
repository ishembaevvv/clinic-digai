import { Typography } from "@ui/Typography/Typography";
import { useEffect } from "react";
import styles from "./NewsOpenContent.module.scss";
import { useNewsStore } from "@modules/NewsModule/store/useNewsStore";
import { useLocation } from "react-router-dom";

export const NewsOpenContent = () => {
    const { fetchData, data, selectedNews, loadSelectedNewsFromStorage } =
        useNewsStore();
    const location = useLocation();

    useEffect(() => {
        if (!data) {
            fetchData();
        }
    }, [fetchData, data]);

    useEffect(() => {
        if (!selectedNews && !location.state?.news) {
            loadSelectedNewsFromStorage();
        }
    }, [selectedNews, location.state, loadSelectedNewsFromStorage]);

    const news = location.state?.news || selectedNews;

    return (
        <div className={styles.openingsWrapper}>
            <Typography variant="h1" className={styles.title}>
                {news?.title?.toUpperCase()}
            </Typography>
            <div className={styles.textWrapper}>
                <Typography variant="h5" className={styles.body}>
                    {news?.description}
                </Typography>
            </div>
            <div className={styles.containerImages}>
                {news?.main_image && (
                    <div className={styles.image}>
                        <img src={news.main_image} alt="Main image" />
                    </div>
                )}
                {news?.image && (
                    <div className={styles.image}>
                        <img src={news.image} alt="Additional image" />
                    </div>
                )}
            </div>
        </div>
    );
};
