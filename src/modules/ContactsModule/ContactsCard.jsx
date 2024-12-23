import styles from "./ContactsCard.module.scss";
import { Container } from "@ui/Container/Container";
import { Typography } from "@ui/Typography/Typography";
import { Contacts } from "./Сontacts/components/Сontacts";

export const ContactsCard = () => {
    return (
        <Container>
            <div className={styles.contactsContainer} id="contacts">
                <Typography variant="h2" weight="bold" className={styles.text}>
                    Контакты
                </Typography>
                <div className={styles.contactsWrapper}>
                    <Contacts className={styles.contactsBox} />
                    <div className={styles.mapContainer}>
                        <iframe
                            className={styles.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.881990565677!2d74.60545537460726!3d42.85422490374096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb737b8d39717%3A0x79371583d6380490!2z0JzQtdC00LjQutC-LdGN0YHRgtC10YLQuNGH0LXRgdC60LDRjyDQutC70LjQvdC40LrQsCDQtNC-0LrRgtC-0YDQsCDQlNC40LPQsNC5!5e0!3m2!1sru!2skg!4v1730558589597!5m2!1sru!2skg"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};
