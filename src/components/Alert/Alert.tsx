import { ReactNode } from "react";
import ButtonClose from "../ButtonClose/ButtonClose";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  color: string;
  onClose: () => void;
}

const Alert = ({ children, color, onClose }: Props) => {
  // console.log("children :>> ", children);
  return (
    <div className={[styles.alert, styles[`alert-${color}`]].join(" ")}>
      {children}
      <ButtonClose
        onClose={() => {
          onClose();
        }}
      />
    </div>
  );
};

export default Alert;
