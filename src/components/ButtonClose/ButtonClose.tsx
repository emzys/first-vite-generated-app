// import { ReactNode } from "react";
import styles from "./ButtonClose.module.css";
import { IoClose } from "react-icons/io5";

interface Props {
  // childern: ReactNode;
  onClose: () => void;
}

const ButtonClose = ({ onClose }: Props) => {
  return (
    <button type="button" className={styles.btnClose} onClick={onClose}>
      <IoClose />
    </button>
  );
};

export default ButtonClose;
