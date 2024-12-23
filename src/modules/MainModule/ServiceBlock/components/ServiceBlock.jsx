import styles from "./ServiceBlock.module.scss";
import { Container } from "@ui/Container/Container";
import { Typography } from "@ui/Typography/Typography";
import { useEffect } from "react";
import { useServiceStore } from "@modules/ServiceModule/store/useServiceStore";
import { AnimationCard } from "@modules/MainModule/AnimationCard/AnimationCard";

export const ServiceBlock = () => {
    const { data, fetchData } = useServiceStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <Container>
            <div className={styles.serviceWrapper}>
                <Typography
                    variant="h2"
                    weight="bold"
                    className={styles.textHeader}
                >
                    Услуги
                </Typography>
                <AnimationCard data={data} type="services" />
            </div>
        </Container>
    );
};
