import styles from "./Loader.module.scss";
import loaderImage from "../../assets/Logo/loader1.webp";

export const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loaderImage} alt="Загрузка..." />
        </div>
    );
};
