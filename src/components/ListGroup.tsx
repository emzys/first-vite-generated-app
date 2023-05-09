function ListGroup() {
  const items = ["Warsaw", "Gdynia", "Cracow", "Olsztyn", "Yokohama"];
  return (
    <>
      <h1>Title</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
