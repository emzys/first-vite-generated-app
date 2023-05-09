function ListGroup() {
  let items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];
  items = [];
  const getMessage = () => {
    return items.length === 0 ? <p>No items found</p> : null;
  };

  return (
    <>
      <h1>Title</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
