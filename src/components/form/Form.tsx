import { FC, useState } from "react";
import styles from "./form.module.scss";
import { Header } from "../header/Header";
import { Input } from "../ui/input/Input";
import { Button } from "../ui/button/Button";
import { login } from "../../API";
const initialAuth = {
    email: "", password: ""
}

export const Form: FC = () => {
    const [data, setData] = useState(initialAuth);
    const handleAuth = (type: string) => {
        return (data: string) => {
            setData((value) => ({ ...value, [type]: data }))
        }
    }
    const handleClick = async () => {
        if (data.email && data.password) {
            const { token } = await login(data);
            alert(`Token: ${token}`);
            setData(initialAuth);
        }
    }

    return (
        <div className={styles.form}>
            <Header title="ВХОД" />
            <div className={styles.form__content}>
                <Input type={"email"} placeholder="E-mail" onChange={handleAuth("email")} value={data["email"]} />
                <Input type={"password"} placeholder="Пароль" onChange={handleAuth("password")} value={data["password"]} />
                <Button children={"ВОЙТИ"} onClick={handleClick} />
            </div>

        </div>
    )
}