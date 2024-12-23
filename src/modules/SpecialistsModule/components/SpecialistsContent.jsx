import { useEffect, useState } from "react";
import styles from "./SpecialistsContent.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { Pagination } from "@ui/Pagination/Pagination";
import { useSpecialistsStore } from "../store/useSpecialistsStore";

export const SpecialistsContent = () => {
    const { dataSpecialists, dataTeamImage, fetchData } = useSpecialistsStore();
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
        <div className={styles.specialistsWrapper}>
            <div className={styles.team}>
                <Typography variant="h1" weight="bold" className={styles.title}>
                    НАША КОМАНДА
                </Typography>
                <Typography variant="h5" className={styles.body}>
                    Наша команда — это синергия опыта и&nbsp;большой любви к
                    &nbsp;своему делу. Мы постоянно совершенствуем свои знания
                    и&nbsp;используем проверенные методики в&nbsp;уходе
                    за&nbsp;кожей и&nbsp;эстетике лица и&nbsp;тела. Каждый
                    сотрудник имеет медицинское образование и&nbsp;проходит
                    каждый год сертификацию.
                </Typography>
                <div className={styles.teamImages}>
                    {dataTeamImage &&
                        dataTeamImage.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt="image-team" />
                            </div>
                        ))}
                </div>
            </div>
            <div className={styles.content}>
                <Typography variant="h2" weight="bold" className={styles.title}>
                    Специалисты
                </Typography>
                {dataSpecialists && (
                    <Pagination
                        variant="specialists"
                        textHeader="full_name"
                        text="position"
                        perPage={perPage}
                        pages={dataSpecialists}
                        imageSrc="image"
                    />
                )}
            </div>
        </div>
    );
};
