import styles from "./wrapper.module.scss";
import { Form } from "../form/Form";

export const Wrapper = () => {

    return (
        <div className={styles.wrapper}>
            <Form />
        </div>
    )
}