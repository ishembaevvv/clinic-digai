import styles from "./SpecialistsBlock.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Container } from "@ui/Container/Container";
import { useSpecialistsBlockStore } from "../store/useSpecialistsBlockStore";
import { useEffect } from "react";
import { AnimationCard } from "@modules/MainModule/AnimationCard/AnimationCard";

export const SpecialistsBlock = () => {
    const { data, fetchData } = useSpecialistsBlockStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <Container>
            <div className={styles.specialistsWrapper}>
                <Typography
                    variant="h2"
                    weight="bold"
                    className={styles.textHeader}
                >
                    Специалисты
                </Typography>
                <AnimationCard data={data} type="specialists" />
            </div>
        </Container>
    );
};
