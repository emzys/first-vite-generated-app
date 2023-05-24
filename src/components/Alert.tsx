import { ReactNode } from "react";
import ButtonClose from "./ButtonClose";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  // console.log("children :>> ", children);
  return (
    <div className="alert alert-warning alert-dismissible">
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
