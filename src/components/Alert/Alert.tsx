import { ReactNode } from "react";
import ButtonClose from "../ButtonClose/ButtonClose";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  // console.log("children :>> ", children);
  return (
    <div className={styles.alert} /*"alert alert-warning alert-dismissible"*/>
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
