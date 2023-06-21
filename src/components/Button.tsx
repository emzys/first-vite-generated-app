// import "./Button.css";
import styled from "styled-components";
import { GiBurningSkull } from "react-icons/gi";

const Btn = styled.ul`
  background-color: #9ec1ff;
  padding: 8px 16px;
  display: inline-block;
  box-sizing: border-box;
  border-style: outset;
  border-color: cornflowerblue;
  text-align: center;
  coursor: pointer;

  > svg {
    transform: translateY(2px);
  }
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
      <GiBurningSkull color="deeppink" />
      {children}
      <GiBurningSkull color="deeppink" />
    </Btn>
  );
};

export default Button;
