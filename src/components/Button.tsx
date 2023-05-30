// import "./Button.css";
import styled from "styled-components";

const Btn = styled.ul`
  background-color: cornflowerblue;
  padding: 8px 16px;
  display: inline-block;
  box-sizing: border-box;
  border-style: outset;
  border-color: buttonborder;
  text-align: center;
  coursor: pointer;
`;

interface Props {
  // alphabetical order is good for readability
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "danger", onClick }: Props) => {
  return (
    <Btn /**type="button" className={`btn btn-${color}`}**/ onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;
