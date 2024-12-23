import { useLicenseStore } from "@modules/AboutModule/store/useLicenseStore";
import styles from "./License.module.scss";
import { Typography } from "@ui/Typography/Typography";
import { useEffect } from "react";

export const License = () => {
    const { data, fetchData } = useLicenseStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className={styles.licenseContainer}>
            <Typography
                variant="h2"
                weight="bold"
                className={styles.textHeader}
            >
                Лицензия
            </Typography>
            <div className={styles.licenseContent}>
                <div className={styles.textWrapper}>
                    <Typography
                        variant="h3"
                        weight="semi-bold"
                        className={styles.textBold}
                    >
                        Клиника Дигай обладает официальной медицинской лицензией
                        и гарантирует высокое качество оказываемых услуг.
                    </Typography>
                    <Typography variant="h4" className={styles.text}>
                        Наша клиника имеет все необходимые лицензии на
                        предоставление медицинских услуг в области косметологии.
                        <br />
                        Мы соблюдаем высокие стандарты безопасности и качества,
                        подтвержденные государственной сертификацией и
                        разрешительными документами.
                        <br />
                        Для нас важно ваше доверие и безопасность, поэтому мы
                        следим за соблюдением всех нормативов и стандартов в
                        нашей деятельности.
                    </Typography>
                </div>
                <div className={styles.imgBlock}>
                    <img src={data} alt="about img" />
                </div>
            </div>
        </div>
    );
};
