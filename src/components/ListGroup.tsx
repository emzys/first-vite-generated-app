import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];
  // items = [];
  // const getMessage = () => {
  //   return items.length === 0 && <p>No items found</p>;
  // };

  // event handler
  const handleClick = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <h1>Title</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {index}. {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
