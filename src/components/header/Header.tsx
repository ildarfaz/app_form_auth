import { FC } from "react";
import styles from "./header.module.scss";

interface IHeader {
    title: string;
}

export const Header: FC<IHeader> = ({ title }) => {

    return (
        <div className={styles.header}>
            <header>
                <h1>{title}</h1>
            </header>
        </div>
    );
}