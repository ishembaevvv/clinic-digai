import { Container } from "@ui/Container/Container";
import styles from "./NewsBlock.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { useEffect } from "react";
import { useNewsStore } from "@modules/NewsModule/store/useNewsStore";
import { AnimationCard } from "@modules/MainModule/AnimationCard/AnimationCard";

export const NewsBlock = () => {
    const { data, fetchData } = useNewsStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container>
            <div className={styles.newsWrapper}>
                <Typography variant="h2" weight="bold" className={styles.text}>
                    Новости
                </Typography>
                <AnimationCard data={data} type="news" />
            </div>
        </Container>
    );
};
