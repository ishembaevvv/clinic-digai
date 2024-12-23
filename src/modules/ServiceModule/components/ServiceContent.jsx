import { useEffect, useRef, useState } from "react";
import styles from "./ServiceContent.module.scss";
import { useNavigate } from "react-router-dom";
import { Typography } from "@ui/Typography/Typography";
import { Pagination } from "@ui/Pagination/Pagination";
import { useServiceStore } from "../store/useServiceStore";

export const ServiceContent = () => {
    const { data, fetchData, handleCardClick } = useServiceStore();
    const navigate = useNavigate();
    const [setMaxHeight] = useState(0);
    const containerRef = useRef();
    const [perPage, setPerPage] = useState(9);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    useEffect(() => {
        if (containerRef.current) {
            setMaxHeight(containerRef.current.clientHeight);
        }
    }, [data]);
    useEffect(() => {
        const updatePerPage = () => {
            setPerPage(window.innerWidth < 1024 ? 6 : 9);
        };
        updatePerPage();
        window.addEventListener("resize", updatePerPage);
        return () => window.removeEventListener("resize", updatePerPage);
    }, []);

    return (
        <div className={styles.serviceWrapper}>
            <Typography variant="h1" weight="bold" className={styles.title}>
                УСЛУГИ
            </Typography>
            {data && (
                <Pagination
                    variant="services"
                    perPage={perPage}
                    textHeader="title"
                    text="description"
                    pages={data}
                    imageSrc="image"
                    onClick={(procedure) =>
                        handleCardClick(procedure, navigate)
                    }
                />
            )}
        </div>
    );
};
