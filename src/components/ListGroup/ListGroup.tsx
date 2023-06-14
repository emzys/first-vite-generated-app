import { useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";
// import { MouseEvent } from "react";
// interface ListGroupProps {}

interface LiProps {
  active: boolean;
}

const Li = styled.li<LiProps>`
  background: ${(props) => (props.active ? "deeppink" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];
  // items = [];
  // const getMessage = () => {
  //   return items.length === 0 && <p>No items found</p>;
  // };

  // // event handler
  // const handleClick = (e: MouseEvent, index: number) => {
  //   selectedIndex = index;
  //   console.log(selectedIndex);
  // };

  // // state, hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // arr[0] contains the variable, arr[1] contains the updater function

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <Li
            active={index === selectedIndex}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {index + 1}. {item}
          </Li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
