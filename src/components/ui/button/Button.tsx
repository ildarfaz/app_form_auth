import { FC } from "react";
import styles from "./button.module.scss";

type TButton = {
  children: JSX.Element | string;
  onSubmit: () => void;
  active?: boolean;
  isDisabled?: boolean;
}
export const Button: FC<TButton> = ({ children, onSubmit, active, isDisabled = false }) => {
  return (
    <div className={styles.box}>
      <button className={active ? styles.active : ''}
        onSubmit={onSubmit}
        disabled={isDisabled}>{children}</button>
    </div>
  )
}