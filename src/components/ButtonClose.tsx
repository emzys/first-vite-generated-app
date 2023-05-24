// import { ReactNode } from "react";

interface Props {
  // childern: ReactNode;
  onClose: () => void;
}

const ButtonClose = ({ onClose }: Props) => {
  return (
    <button
      type="button"
      className="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      onClick={onClose}
    ></button>
  );
};

export default ButtonClose;
