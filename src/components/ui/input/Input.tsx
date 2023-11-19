import { FC, useRef } from "react";
import styles from "./input.module.scss";

interface IInput {
    placeholder: string;
    type: string;
    onChange: (value: string) => void;
    value: string;
}

export const Input: FC<IInput> = ({ type, placeholder, onChange, value }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInput = () => {
        onChange(inputRef?.current?.value || "");
    }
    return (
        <div className={styles.box}>
            <input type={type} ref={inputRef} placeholder={placeholder} onChange={handleInput} value={value} required />
        </div>
    )
}