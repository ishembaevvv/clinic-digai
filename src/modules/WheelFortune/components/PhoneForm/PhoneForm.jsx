import { Input } from "@modules/WheelFortune/Input/Input";
import styles from "./PhoneForm.module.scss";
import { Typography } from "@ui/Typography/Typography";

export const PhoneForm = ({ handleSpin }) => (
    <div className={styles.wheel_text}>
        <div className={styles.text}>
            <Typography variant="h3">
                Впервые в Косметологической клинике в&nbsp;Бишкеке? Для вас
                welcome-подарок!
            </Typography>
            <Typography variant="h5">
                Укажите свой номер телефона, крутите колесо Фортуны
                и&nbsp;забирайте скидку!
            </Typography>
        </div>
        <form onSubmit={handleSpin}>
            <Input
                type="tel"
                name="phone"
                onChange={(value) => console.log("Phone number:", value)}
            />
        </form>
        <Typography variant="h6" className={styles.h6}>
            Нажимая на кнопку, вы даёте согласие на&nbsp;обработку своих
            персональных данных и&nbsp;соглашаетесь с&nbsp;Политикой
            конфиденциальности.
        </Typography>
    </div>
);
