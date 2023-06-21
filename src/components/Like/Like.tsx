import { useState } from "react";
import styles from "./Like.module.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

interface Props {
  active: boolean;
  display: string;
  onClick: () => void;
}

function Like({ active, display, onClick }: Props) {
  console.log("active :>> ", active);
  return (
    <span
      onClick={onClick}
      className={[
        display,
        styles[display],
        active && "active",
        styles[`${active && "active"}`],
      ].join(" ")}
    >
      {active ? <IoHeartSharp /> : <IoHeartOutline />}
    </span>
  );
}

export default Like;
